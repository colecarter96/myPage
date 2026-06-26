"use client";

import { CopyButton } from "./CopyButton";

type CopyEmailButtonProps = {
  email: string;
  label?: string;
};

export function CopyEmailButton({ email, label = "Email" }: CopyEmailButtonProps) {
  return (
    <CopyButton
      text={email}
      label={label}
      toastMessage="Email Copied!"
    />
  );
}
