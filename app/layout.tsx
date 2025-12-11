// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import { Zen_Maru_Gothic } from "next/font/google";
import FloatingShapes from "./components/FloatingShapes";

// もともとのフォント
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// 追加：丸ゴ系フォント
const zenMaru = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "くぼた えり｜ポートフォリオ",
  description: "WEBデザイン・動画編集ポートフォリオサイト",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${zenMaru.variable}
          font-main antialiased
          bg-[var(--background)] text-[var(--foreground)]
        `}
      >
        {/* ★ 全体を包むラッパーを追加（ここにピンク背景を持たせる） */}
        <div className="relative min-h-screen overflow-x-hidden bg-[var(--background)]">
          {/* 1. ピンク背景（↑ラッパー） */}
          {/* 2. その上で動くポワンポワン */}
          <FloatingShapes />

          {/* 3. 一番上：ページ本体 */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
