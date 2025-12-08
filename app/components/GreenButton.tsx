// app/components/GreenButton.tsx
"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type GreenButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function GreenButton({
  children,
  className = "",
  ...rest
}: GreenButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full " +
    "px-7 py-2.5 text-sm md:text-base font-semibold tracking-[0.03em] " +
    "transition-all duration-150 transform whitespace-nowrap";

  // 🌿 色味を少し明るめに＆ヘッダーのボタン系統に合わせる
  const colors =
    "bg-[#00C16A] text-white " +
    "shadow-[0_10px_30px_rgba(0,193,106,0.35)] " +
    "hover:bg-[#00AD60] hover:shadow-[0_14px_36px_rgba(0,193,106,0.45)] " +
    "active:bg-[#009456] active:shadow-[0_6px_18px_rgba(0,193,106,0.40)] " +
    "active:ring-2 active:ring-[#16a34a]/40";

  // ✋ 浮き＆押し込みアニメーション
  const motion =
    "hover:-translate-y-[1.5px] active:translate-y-[1px] active:scale-[0.97]";

  // 📱 SP は 70% 幅。PC は auto（ラッパーの className で上書き可能）
  const width = "w-[70%] sm:w-auto";

  return (
    <button
      type="button"
      className={`${base} ${colors} ${motion} ${width} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
