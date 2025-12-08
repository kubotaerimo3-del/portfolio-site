// app/components/SectionTitle.tsx
"use client";

import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-center gap-3 md:gap-4">
        {/* 左側：短めの破線（PC のみ表示） */}
        <div className="hidden md:block w-40 section-dash" />

        {/* タイトル文字（SP は中央、PC は少し左寄り） */}
        <h2 className="text-lg md:text-3xl font-bold text-slate-900 text-center md:text-left whitespace-nowrap">
          {children}
        </h2>

        {/* 右側：長めの破線 */}
        <div className="flex-1 h-[6px] section-dash" />
      </div>
    </div>
  );
}
