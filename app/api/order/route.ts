import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const NOTIFICATION_EMAIL = "support@streamb4.com";

interface OrderData {
  fullName: string;
  phone: string;
  email: string;
  device?: string;
  notes?: string;
  planId: string;
  planLabel: string;
  accounts: number;
  price: number;
  buyUrl: string;
}

/**
 * Saves order to local JSON storage so no client is ever lost
 */
function saveOrderLocally(order: Record<string, unknown>) {
  try {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const filePath = path.join(dataDir, "orders.json");
    let orders: unknown[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        orders = JSON.parse(fileContent);
        if (!Array.isArray(orders)) orders = [];
      } catch {
        orders = [];
      }
    }
    orders.unshift(order);
    fs.writeFileSync(filePath, JSON.stringify(orders, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to save order locally:", err);
  }
}

/**
 * Dispatches order details to support@streamb4.com via FormSubmit
 */
async function sendNotificationEmail(order: Record<string, unknown>) {
  try {
    console.log(`[Email] Attempting to send order ${order.id} notification to ${NOTIFICATION_EMAIL}...`);
    const response = await fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://buystrongiptv8k.com",
        Referer: "https://buystrongiptv8k.com/plans",
      },
      body: JSON.stringify({
        _subject: `🛒 New IPTV Order: ${order.fullName} - ${order.planLabel} ($${order.price})`,
        _template: "table",
        _captcha: "false",
        "Full Name": order.fullName,
        "Phone / WhatsApp": order.phone,
        "Email Address": order.email || "Not provided",
        "Device Type": order.device || "Not specified",
        "Selected Plan": order.planLabel,
        "Connections": `${order.accounts} Connection${Number(order.accounts) > 1 ? "s" : ""}`,
        "Total Price": `$${order.price} USD`,
        "Checkout Link": order.buyUrl,
        "Order Date": order.timestamp,
        "Order ID": order.id,
      }),
    });

    const resText = await response.text();
    console.log(`[Email] FormSubmit status: ${response.status}, response: ${resText}`);
  } catch (err) {
    console.error("[Email] Failed to send notification email via FormSubmit:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: OrderData = await req.json();

    if (!body.fullName || !body.phone) {
      return NextResponse.json(
        { error: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const orderRecord = {
      id: orderId,
      timestamp,
      fullName: body.fullName.trim(),
      phone: body.phone.trim(),
      email: (body.email || "").trim(),
      device: (body.device || "").trim(),
      notes: (body.notes || "").trim(),
      planId: body.planId,
      planLabel: body.planLabel,
      accounts: body.accounts,
      price: body.price,
      buyUrl: body.buyUrl,
    };

    // 1. Save locally to guarantee persistence
    saveOrderLocally(orderRecord);
    console.log(`[Order Created] ${orderId} for ${orderRecord.fullName} (${orderRecord.planLabel})`);

    // 2. Send email notification (await ensures network request completes)
    try {
      await sendNotificationEmail(orderRecord);
    } catch (e) {
      console.error("Background email error:", e);
    }

    return NextResponse.json({
      success: true,
      orderId,
      redirectUrl: body.buyUrl,
    });
  } catch (err) {
    console.error("Order processing error:", err);
    return NextResponse.json(
      { error: "Failed to process order", success: false },
      { status: 500 }
    );
  }
}
