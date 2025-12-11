// app/components/FloatingShapes.tsx
"use client";

import { useMemo } from "react";

type Shape = {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  variant: 1 | 2 | 3; // どのSVGを使うか
};

const SHAPE_COUNT = 14;

function createShapes(): Shape[] {
  return Array.from({ length: SHAPE_COUNT }).map((_, i) => {
    // ★ ベースサイズの候補を増やす（かなり大きめも混ぜる）
    const baseSizes = [140, 220, 320, 420, 520]; // px
    const base = baseSizes[Math.floor(Math.random() * baseSizes.length)];

    // 少しだけランダムでバラつかせる
    const size = base * (0.85 + Math.random() * 0.4); // 0.85〜1.25倍

    const duration = 14 + Math.random() * 10; // 14〜24秒
    const delay = Math.random() * -20;        // 再生位置ランダムスタート
    const opacity = 0.35 + Math.random() * 0.25; // 0.35〜0.6 にして少し強め

    const variant = (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3;

    return {
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size,
      duration,
      delay,
      opacity,
      variant,
    };
  });
}

// 渡してもらった3つのSVGをそのまま使うコンポーネント
function ShapeSvg({ variant }: { variant: 1 | 2 | 3 }) {
  if (variant === 1) {
    return (
      <svg
        viewBox="0 0 566 566"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect
          x="50"
          y="50"
          width="466"
          height="466"
          rx="233"
          fill="#CCAFAF"
          fillOpacity="0.55"
        />
      </svg>
    );
  }

  if (variant === 2) {
    return (
      <svg
        viewBox="0 0 360 355"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect
          x="50"
          y="33"
          width="260"
          height="289"
          rx="130"
          fill="#CBBDB7"
          fillOpacity="0.5"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 358 352"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect
        x="50"
        y="30"
        width="258"
        height="292"
        rx="129"
        fill="#D3CAC5"
        fillOpacity="0.55"
      />
    </svg>
  );
}

export default function FloatingShapes() {
  const shapes = useMemo(() => createShapes(), []);

  return (
    // ★ fixed ではなく absolute にして、さっきのラッパー内で全画面に広げる
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="floating-shape"
          style={{
            top: shape.top,
            left: shape.left,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
            opacity: shape.opacity,
          }}
        >
          <ShapeSvg variant={shape.variant} />
        </div>
      ))}
    </div>
  );
}
