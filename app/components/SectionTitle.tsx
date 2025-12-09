// app/components/SectionTitle.tsx
"use client";

import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="mb-10 md:mb-14 w-full">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex items-center gap-3 md:gap-4">
          {/* SP: 左右どちらも flex-1 で同じ長さ / PC: 左だけ短い 40px */}
          <div className="flex-1 md:flex-none md:w-40 h-[6px] section-dash" />

          {/* タイトル：SP 少し大きめ & 中央 / PC は左寄せ */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center md:text-left px-1 whitespace-nowrap">
            {children}
          </h2>

          {/* 右側の破線（PC も今まで通り長め） */}
          <div className="flex-1 h-[6px] section-dash" />
        </div>
      </div>
    </div>
  );
}
