// app/components/PinkPillButton.tsx
"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type PinkPillButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  children: ReactNode;
};

export default function PinkPillButton({
  href,
  children,
  className = "",
  ...rest
}: PinkPillButtonProps) {
  const base =
    "inline-flex items-center justify-center " +
    "rounded-full border-[0.8px] border-solid " +
    "px-6 py-2 text-sm md:text-base font-semibold tracking-[0.02em] " +
    "transition-all duration-150 whitespace-nowrap transform";

  const colors =
    "bg-[#FFDEF8] text-[#463236] border-[#E4C5D4] " +
    "shadow-[0_1px_3px_rgba(140,90,99,0.16)] " +
    "hover:bg-[#ffc8f1] hover:shadow-[0_4px_12px_rgba(140,90,99,0.28)] " +
    "active:shadow-[0_4px_16px_rgba(190,80,130,0.35)] " +
    "active:border-[#E28ABF] active:ring-2 active:ring-[#f472b6]/40";

  const motion =
    "hover:-translate-y-[1.5px] active:translate-y-[1px] active:scale-[0.97]";

  // 👇 ここでは幅を決めない！場所ごとに className で指定
  return (
    <a
      href={href}
      className={`${base} ${colors} ${motion} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
