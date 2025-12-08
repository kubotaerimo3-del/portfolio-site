// app/components/BackToTopButton.tsx
"use client";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const maxTranslate = 8; // 追従の強さ

    const handleMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;  // -1〜1
      const ny = (e.clientY / window.innerHeight - 0.5) * 2; // -1〜1

      setOffset({
        x: nx * maxTranslate,
        y: ny * maxTranslate,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scale = isActive ? 0.96 : isHovering ? 1.06 : 1;

  return (
    <button
      type="button"
      onClick={scrollTop}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      className={`
        fixed z-40    /* ★ここで画面右下に固定 */
        flex items-center justify-center
        rounded-full
        w-14 h-14 md:w-16 md:h-16
        text-[13px] md:text-[14px] font-bold tracking-[0.02em]
        text-[#3d2c31]

        bg-[#FFDEF8]
        border border-[#e4c5d4]

        shadow-[0_4px_14px_rgba(140,90,99,0.32)]
        hover:bg-[#ffc8f1]
        hover:shadow-[0_6px_18px_rgba(140,90,99,0.40)]
        active:shadow-[0_4px_16px_rgba(190,80,130,0.45)]

        transition-all duration-200
        cursor-pointer select-none
      `}
      style={{
        // ちょっとだけ上に
        bottom: "28px",

        // セクション幅（max-w-5xl=1024px）の右端あたり ＋ 少し内側
        // 中央の 248px をいじれば、さらに微調整できます
        right: "clamp(20px, calc((100vw - 1024px) / 2 + 248px), 260px)",

        transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
      }}
    >
      <span className="leading-none">戻る</span>
    </button>
  );
}
