// app/components/WorkCard.tsx
"use client";

import PinkPillButton from "./PinkPillButton";

type WorkCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  href: string;
};

export default function WorkCard({
  imageSrc,
  imageAlt,
  title,
  description,
  href,
}: WorkCardProps) {
  const handleGo = () => {
    if (!href) return;
    window.location.href = href;
  };

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={handleGo}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleGo();
      }}
      className="
        group
        rounded-3xl border border-slate-100
        bg-white p-4
        flex flex-col
        shadow-lg shadow-black/5
        cursor-pointer select-none
        transition-all duration-200
        hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10
        active:translate-y-0 active:shadow-lg
      "
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="
          w-full
          rounded-xl shadow-md object-cover

          /* 📱 SP時のみ画像縮小 */
          max-w-[75%] mx-auto sm:max-w-full
          transition-all duration-300
        "
      />

      <h3 className="text-sm font-semibold mb-1 text-slate-900">{title}</h3>
      <p className="text-xs text-slate-600 leading-relaxed mb-3">
        {description}
      </p>

      {/* ▼ ボタン右寄せ（テキスト幅のまま） */}
      <div className="mt-2 flex justify-end">
        <PinkPillButton href={href}>詳しくみる</PinkPillButton>
      </div>
    </div>
  );
}
