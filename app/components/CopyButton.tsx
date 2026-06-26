"use client";

import { useCallback, useState } from "react";
import { copyToClipboard } from "../lib/copyToClipboard";

type CopyButtonProps = {
  text: string;
  label: string;
  toastMessage?: string;
  className?: string;
};

export function CopyButton({
  text,
  label,
  toastMessage = "Copied!",
  className = "flex min-h-12 w-full items-center justify-center rounded-xs border border-black text-black active:bg-zinc-100",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await copyToClipboard(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked — no toast
    }
  }, [text]);

  return (
    <>
      <button type="button" onClick={handleCopy} className={className}>
        {label}
      </button>

      {copied && (
        <p
          role="status"
          aria-live="polite"
          className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-xs bg-black px-4 py-2 text-sm font-medium text-white shadow-lg"
        >
          {toastMessage}
        </p>
      )}
    </>
  );
}
