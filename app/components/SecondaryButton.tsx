// app/components/SecondaryButton.tsx
"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type SecondaryButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  children: ReactNode;
};

export default function SecondaryButton({
  href,
  children,
  className = "",
  ...rest
}: SecondaryButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full " +
    "px-4 py-1.5 text-sm font-semibold tracking-[0.02em] " +
    "transition-all duration-200 border transform " + // ★ transform 追加
    "active:scale-[0.97] active:translate-y-[1px]";   // ★ 押し込み

  const normal =
    "bg-white text-[#463236] border-[#E4C5D4] " +
    "shadow-[0_1px_4px_rgba(140,90,99,0.25)] " +
    "active:border-[#8C5A63] active:shadow-[0_1px_5px_rgba(140,90,99,0.45)]";

  const hover =
    "hover:bg-[#FFE5F4] hover:shadow-[0_2px_8px_rgba(140,90,99,0.35)]";

  return (
    <a
      href={href}
      className={`${base} ${normal} ${hover} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
