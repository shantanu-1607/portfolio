"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setMessage("Email copied");
    } catch {
      setMessage("Please use the email link to get in touch");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(""), 4000);
  }
  return (
    <span className="copy-wrap">
      <button
        onClick={copy}
        className="icon-button copy-button"
        aria-label="Copy email address"
      >
        {message === "Email copied" ? <Check size={18} /> : <Copy size={18} />}
      </button>
      <span className="copy-feedback" role="status">
        {message}
      </span>
    </span>
  );
}
