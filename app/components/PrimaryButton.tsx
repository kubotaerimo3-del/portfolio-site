// app/components/PrimaryButton.tsx
"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type PrimaryButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  children: ReactNode;
};

export default function PrimaryButton({
  href,
  children,
  className = "",
  ...rest
}: PrimaryButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full " +
    "px-6 py-2.5 text-sm md:text-base font-semibold tracking-[0.02em] " +
    "text-white bg-emerald-500 border border-emerald-500 " +
    "shadow-[0_3px_10px_rgba(16,185,129,0.40)] " +
    "hover:bg-emerald-600 hover:shadow-[0_4px_14px_rgba(16,185,129,0.45)] " +
    "transition-all duration-150 transform " +
    "active:scale-[0.97] active:translate-y-[1px] " +
    "active:border-emerald-700 active:shadow-[0_2px_8px_rgba(16,120,90,0.55)]";

  return (
    <a
      href={href}
      className={`${base} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
