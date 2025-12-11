// app/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import heroFigureMobile from "@/public/FV-mobile.png";
import heroFigurePc from "@/public/FV-PC.png";
import heroTitle from "@/public/hero-title.svg";
import aboutFigure from "@/public/about-figure.png";

import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle";
import WorkCard from "./components/WorkCard";
import PinkPillButton from "./components/PinkPillButton";
import GreenButton from "./components/GreenButton";
import BackToTopButton from "./components/BackToTopButton";
import ContactCTA from "./components/ContactCTA";

export default function Home() {
  // ★ works / contact セクション用の ref（スクロール時だけふわっと）
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const worksRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (targetId: string) => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const el = document.getElementById(targetId);
    if (!el) return;
    el.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  // hero / about → 最初だけふわっと
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      heroRef.current?.classList.add("scroll-fade-visible");
      aboutRef.current?.classList.add("scroll-fade-visible");
      return;
    }

    if (heroRef.current) heroRef.current.classList.add("scroll-fade-visible");
    if (aboutRef.current) aboutRef.current.classList.add("scroll-fade-visible");
  }, []);

  // works / contact → 画面に入ったときにふわっと表示
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      worksRef.current?.classList.add("scroll-fade-visible");
      contactRef.current?.classList.add("scroll-fade-visible");
      return;
    }

    const targets: (HTMLElement | null)[] = [worksRef.current, contactRef.current];

    const validTargets = targets.filter(
      (el): el is HTMLElement => el instanceof HTMLElement
    );
    if (validTargets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-fade-visible");
            observer.unobserve(entry.target); // 一度表示されたら監視解除
          }
        });
      },
      { threshold: 0.15 }
    );

    validTargets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen text-slate-900 pt-20 md:pt-24">
      {/* 共通ヘッダー */}
      <Header />

      {/* ★ ファーストビュー（PC：左イラスト＋右テキスト / SP：上にPNG） */}
      <section id="home">
        <div ref={heroRef} className="scroll-fade mx-auto w-full max-w-4xl px-[10%] md:px-6 py-10 md:py-12">
          {/* ▼ スマホ用：一番上に表示する 1 枚PNG */}
          <div className="md:hidden mb-10">
            <Image
              src={heroFigureMobile}
              alt="くぼた えりのポートフォリオ スマホ用メインビジュアル"
              className="w-full max-w-[420px] mx-auto rounded-[32px] object-cover"
              priority
            />
          </div>

          {/* ▼ PC：左右２カラム / SP：１カラム */}
          <div className="grid gap-10 md:gap-16 md:grid-cols-2 items-center">
            {/* 左カラム：PC用メインイラスト */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <Image
                  src={heroFigurePc}
                  alt="くぼた えりのポートフォリオ メインイラスト"
                  className="w-full max-w-[360px] h-auto rounded-[40px]"
                  priority
                />
              </div>
            </div>


            {/* 右カラム：テキスト＋ボタン（SP/PC 共通） */}
            <div className="text-center md:text-left">
              <p className="text-xs md:text-sm mb-3">
                WEBデザイナー / 動画編集 / SNS運用
              </p>

              {/* タイトルSVG（PCのみ表示） */}
              <div className="hidden md:block mb-6">
                <Image
                  src={heroTitle}
                  alt="くぼた えりのポートフォリオ"
                  className="w-[260px] md:w-[360px] h-auto mx-auto md:mx-0"
                  priority
                />
              </div>

              <p className="text-sm md:text-base leading-relaxed mb-8">
                お客様が「届けたい想い」を、コーディングや動画制作を通して
                「伝わるカタチ」にしていきます。
              </p>

              {/* ボタン2つ */}
              <div
                className="
                flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start
                w-full
              "
              >
                {/* お問い合わせ */}
                <GreenButton
                  className="w-[70%] max-w-xs sm:w-auto"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (!el) return;
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  お問い合わせはこちら
                </GreenButton>

                {/* デザインしたもの */}
                <PinkPillButton
                  className="w-[70%] max-w-xs sm:w-auto"
                  onClick={() => scrollToSection("contact")}
                >
                  デザインしたものを見る
                </PinkPillButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 私についてセクション */}
      <section id="about" className="py-6 md:py-8">
        {/* ★ 外枠は 5xl：SectionTitle 用（アニメなしで常に表示） */}
        <div ref={aboutRef} className="scroll-fade max-w-5xl mx-auto px-[10%] md:px-4">
          <SectionTitle>私について</SectionTitle>

          {/* ★ 中身だけ 4xl にして中央寄せ */}
          <div
            className="
              mx-auto w-full
              max-w-4xl md:max-w-4xl
              px-0 md:px-2
              grid md:grid-cols-2 gap-8 md:gap-10 items-center
            "
          >
            {/* 右：画像（モバイルでは上） */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <Image
                src={aboutFigure}
                alt="プロフィール画像"
                className="
                  w-full max-w-[80%] mx-auto rounded-2xl
                  sm:max-w-[380px] md:max-w-[420px]
                  transition-all duration-300
                "
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 380px, 80vw"
                priority
              />
            </div>

            {/* 左：テキスト（モバイルでは下） */}
            <div
              className="order-2 md:order-1 text-slate-700 leading-relaxed space-y-4
              text-sm md:text-base text-center md:text-left"
            >
              <p>
                私自身を一言で表すなら「猪突猛進」、<br />
                モットーは「まず、やってみる」「なんとかなる」です。
              </p>
              <p>
                私が目指すのは、シンプルだけど心を惹きつけるデザイン。
                サイトに来やすく、見やすい。<br />
                そして、お客様のお話をじっくり聞きながら、デザインを通じて求める結果へ導くことです。
              </p>
              <p>
                あなたの想いを、もっと多くの人に届けるために。<br />
                ぜひ一度、お話ししましょう！
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                ポートフォリオサイト自体もひとつの制作物として、
                自然に視線と動線が流れるレイアウトを意識して設計しています。<br />
                とくに、
                <span className="font-semibold">「迷わずに知りたい情報にたどり着けること」</span>
                を大切にし、文字サイズやボタン配置など
                UI / UX の細かな使い心地にもこだわりました。
              </p>
              <p>
                私の詳しい経歴やスキルセットについては、aboutページでご紹介しています。
              </p>
            </div>
          </div>

          {/* aboutページへのリンク */}
          <div className="mt-10 text-center">
            <PinkPillButton
              href="/about"
              className="px-8 md:px-12 text-sm md:text-base"
            >
              私について、ぜひこちらもご覧ください
            </PinkPillButton>
          </div>
        </div>
      </section>

      {/* デザインしたもの セクション */}
      <section id="works" className="py-6 md:py-8">
        <div ref={worksRef} className="scroll-fade max-w-5xl mx-auto px-[10%] md:px-4">
          <SectionTitle>デザインしたもの</SectionTitle>

          <p className="text-sm md:text-base text-slate-600 mb-8">
            動画・バナー・LPなど、これまでに制作したデザインの一部をご紹介します。
          </p>

          {/* カードグリッド */}
          <div className="grid md:grid-cols-3 gap-6">
            <WorkCard
              imageSrc="/works/work-portfolio-thumb.png"
              imageAlt="ポートフォリオLP"
              title="動画ポートフォリオ"
              description="このポートフォリオサイトの元になった動画。余白と読みやすさを意識して構成しました。"
              href="/works#portfolio-lp"
            />

            <WorkCard
              imageSrc="/works/work-sandwich-orange.png"
              imageAlt="飲食店ランチバナー"
              title="飲食店ランチバナー"
              description="Instagram用ランチバナー。写真とテキストのバランスを意識して制作しました。"
              href="/works#lunch-banner"
            />

            <WorkCard
              imageSrc="/works/work-nail-gradient.png"
              imageAlt="セール告知バナー"
              title="春の新色 告知バナー（自主制作）"
              description="春に新色発売の告知バナー。春の柔らかさと、新色が出ることがすぐ分かるよう意識しました。"
              href="/works#nail-sale-banner"
            />
          </div>

          {/* 他の作品へのリンク */}
          <div className="mt-10 text-center">
            <PinkPillButton
              href="/works"
              className="px-8 md:px-12 text-sm md:text-base"
            >
              この他の作品も、こちらからご覧ください
            </PinkPillButton>
          </div>
        </div>
      </section>

      {/* ▼ お問い合わせ Section */}
      <section id="contact" className="mt-24 pb-16 md:pb-20">
        <div ref={contactRef} className="scroll-fade max-w-5xl mx-auto px-[10%] md:px-4 text-center">
          <SectionTitle>お問い合わせ</SectionTitle>

          <p
            className="
              mt-6
              mx-auto          // 中央寄せだけ残す
              text-xs md:text-base
              leading-relaxed text-[#333]
            "
          >
            ご覧いただきありがとうございます。<br />
            「こんなデザインできる？」「ポートフォリオの詳細が知りたい」など、<br />
            まずはお気軽にご相談ください。
          </p>

          {/* ★ ContactCTA コンポーネントを使用 */}
          <div className="mt-10">
            <ContactCTA />
          </div>
        </div>
      </section>
      {/* 追従「戻る」ボタン */}
      <BackToTopButton />
    </main>
  );
}
