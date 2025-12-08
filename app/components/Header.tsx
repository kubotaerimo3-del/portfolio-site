// app/components/Header.tsx
"use client";

import { useLayoutEffect, useState } from "react";

const navItems = [
  { id: "home", label: "ホーム" },
  { id: "about", label: "私について" },
  { id: "works", label: "デザインしたもの" },
  { id: "contact", label: "お問い合わせ" },
] as const;

type NavId = (typeof navItems)[number]["id"];

const sectionIds: NavId[] = ["home", "about", "works", "contact"];
const SCROLL_OFFSET = 120;

const getActiveSection = (scrollY: number): NavId => {
  const viewportHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;
  const scrollBottom = scrollY + viewportHeight;

  if (scrollBottom >= docHeight - 4) {
    return "contact";
  }

  let closestId: NavId = "home";
  let minDistance = Number.POSITIVE_INFINITY;

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const distance = Math.abs(sectionTop - (scrollY + SCROLL_OFFSET));

    if (distance < minDistance) {
      minDistance = distance;
      closestId = id;
    }
  });

  return closestId;
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<NavId>("home");

  // ★ ユーザーが一度でもスクロールしたかどうか
  const [hasUserScrolled, setHasUserScrolled] = useState(false);

  useLayoutEffect(() => {
    let isFirstCall = true;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 10);
      setActiveSection(getActiveSection(scrollY));

      // 初回（マウント直後）の handleScroll 呼び出しでは
      // 「ユーザーがスクロールした」とみなさない
      if (!isFirstCall && scrollY > 0) {
        setHasUserScrolled(true);
      }
      isFirstCall = false;
    };

    // 初期ロード時：現在のスクロール位置を元に状態を即セット（transitionなし）
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ ヘッダー全体のトランジションは「ユーザーがスクロールしてから」有効化
  const headerTransitionClass = hasUserScrolled
    ? "transition-all duration-300"
    : "transition-none";

  // ✅ ナビリンク用クラス：こちらも hasUserScrolled で transition を切り替える
  const navLinkClass = (id: NavId) => {
    const base =
      "inline-flex items-center justify-center " +
      "rounded-2xl border-[0.8px] border-solid " +
      "px-5 md:px-6 py-1.5 md:py-2 " +
      "text-sm md:text-base font-semibold tracking-[0.02em] " +
      // ⬇ transition は hasUserScrolled が true になってから
      (hasUserScrolled ? "transition-all duration-150 transform " : "transform ") +
      "active:scale-[0.97] active:translate-y-[1px]";

    if (id === "contact") {
      return (
        base +
        " bg-emerald-500 border-emerald-500 text-white " +
        "shadow-[0_3px_8px_rgba(16,185,129,0.35)] hover:bg-emerald-600"
      );
    }

    const isActive = activeSection === id;

    const activeClasses =
      " bg-[#F7C9DF] text-[#3B2930] border-[#8C5A63] " +
      "shadow-[0_2px_6px_rgba(140,90,99,0.35)]";

    const inactiveClasses =
      " bg-[#FFDEF8] text-[#463236] border-[#E4C5D4] " +
      "shadow-[0_1px_3px_rgba(140,90,99,0.16)] " +
      "hover:shadow-[0_2px_6px_rgba(140,90,99,0.25)]";

    return base + (isActive ? activeClasses : inactiveClasses);
  };

  const handleNavClick = (id: NavId) => {
    setActiveSection(id);
    setIsMenuOpen(false);

    const el = document.getElementById(id);
    if (!el) return;

    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const header = document.querySelector("header");
    const headerHeight =
      header instanceof HTMLElement ? header.offsetHeight : 0;

    const rect = el.getBoundingClientRect();
    const targetY = window.scrollY + rect.top - (headerHeight + 16);

    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <header
      className={`
        sticky top-0 z-50
        backdrop-blur-sm
        bg-[rgba(255,255,255,0.7)]
        ${headerTransitionClass}
        ${isScrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.15)]" : "shadow-none"}
      `}
    >
      <div
        className={`
          max-w-5xl mx-auto px-4
          flex items-center justify-between gap-4
          ${headerTransitionClass}
          ${isScrolled ? "py-2" : "py-4"}
        `}
      >
        {/* ロゴボタンなどはそのまま */}
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="
            flex items-center
            transition-transform duration-150
            transform
            active:scale-[0.97] active:translate-y-[1px]
          "
        >
          <img
            src="/icon.png"
            alt="くぼた えり ポートフォリオのロゴ"
            className="h-[60px] w-auto transition-all duration-300"
          />
        </button>

        {/* PC ナビ */}
        <nav className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={navLinkClass(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* SP ハンバーガー */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-slate-100/70 transition"
          aria-label="メニューを開く"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <div className="space-y-[5px]">
            <span
              className={`block h-[2px] w-5 rounded-full bg-slate-800 transition-transform ${
                isMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-slate-800 transition-opacity ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-slate-800 transition-transform ${
                isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* SPメニュー展開部分 */}
      {isMenuOpen && (
        <div className="md:hidden bg-transparent">
          <nav className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-3 items-start">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`${navLinkClass(item.id)} w-auto self-start`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
