"use client";

import { useCallback, useState } from "react";

type CopyEmailButtonProps = {
  email: string;
  label?: string;
};

async function copyToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export function CopyEmailButton({ email, label = "Email" }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await copyToClipboard(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked — no toast
    }
  }, [email]);

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className="flex min-h-12 w-full items-center justify-center rounded-xs border border-black text-black active:bg-zinc-100"
      >
        {label}
      </button>

      {copied && (
        <p
          role="status"
          aria-live="polite"
          className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-xs bg-black px-4 py-2 text-sm font-medium text-white shadow-lg"
        >
          Email Copied!
        </p>
      )}
    </>
  );
}
