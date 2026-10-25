"use client";

import { useEffect, useState } from "react";

/** Renders the current year; tiny client island so the footer can stay a server component. */
export function CurrentYear() {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
