// app/works/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SecondaryButton from "../components/SecondaryButton";
import BackToTopButton from "../components/BackToTopButton";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import ContactCTA from "../components/ContactCTA";

type BannerWork = {
  type: "banner";
  id: string;
  title: string;
  images: string[];
  target: string;
  size: string;
  format: string;
  tools: string;
  term: string;
  point: string;
};

type LpWork = {
  type: "lp";
  id: string;
  title: string;
  image: string;
  imageLarge?: string;
  target: string;
  size: string;
  format: string;
  tools: string;
  term: string;
  point: string;
  videoUrl?: string;
};

type CardWork = {
  type: "card";
  id: string;
  title: string;
  front: string;
  back: string;
  target: string;
  size: string;
  format: string;
  tools: string;
  term: string;
  point: string;
};

type Work = BannerWork | LpWork | CardWork;

const works: Work[] = [
  {
    type: "lp",
    id: "portfolio-lp",
    title: "動画編集ポートフォリオ",
    image: "/works/work-portfolio-thumb.png",
    target: "SNS運用・動画広告・動画編集ディレクター",
    size: "1920px × 1280px",
    format: "png",
    tools: "Figma / Photoshop / VS Code",
    term: "約1.5日",
    point:
      "このポートフォリオサイトの元になったLP。余白と読みやすさを意識して構成しました。",
    videoUrl: "https://youtu.be/93JhLlyVuKw",
  },
  {
    type: "banner",
    id: "lunch-banner",
    title: "飲食店ランチバナー",
    images: [
      "/works/work-sandwich-orange-2.png",
      "/works/work-sandwich.png",
    ],
    target: "お店のInstagramフォロワー（20〜30代の男女）",
    size: "1080px × 1080px",
    format: "png",
    tools: "Photoshop / Illustrator",
    term: "約2時間",
    point:
      "Instagram用ランチバナー。写真のボリューム感と、テキストの読みやすさのバランスを重視して制作しました。",
  },
  {
    type: "banner",
    id: "nail-sale-banner",
    title: "ネイルサロン・新色告知バナー",
    images: [
      "/works/work-nail-gradient-2.png",
      "/works/work-nail-pastel.png",
      "/works/work-nail-pastel-random.png",
    ],
    target: "10代〜20代の女性",
    size: "1080px × 1080px",
    format: "png",
    tools: "Photoshop / Illustrator",
    term: "約2時間",
    point:
      "新色の雰囲気が伝わるようパステルカラーでまとめたバナー。割引率や期間などの情報が一目で分かるレイアウトを意識しました。",
  },
  {
    type: "lp",
    id: "shampoo-lp",
    title: "課題LP（シャンプー）",
    image: "/works/work-lp-shampoo.png",
    imageLarge: "/works/work-lp-shampoo-all.png",
    target: "10代〜20代の女性",
    size: "1440px × 5775px",
    format: "png",
    tools: "Photoshop",
    term: "約2時間",
    point:
      "自分に合うシャンプーが見つかるように、悩み別の訴求や成分の見せ方を意識して構成したLPです。",
  },
  {
    type: "card",
    id: "business-card-sample",
    title: "名刺デザイン（表・裏）",
    front: "/works/card-front.jpg",
    back: "/works/card-back.jpg",
    target: "フリーランスWEBデザイナー",
    size: "91mm × 55mm",
    format: "jpg",
    tools: "Illustrator",
    term: "約1日",
    point:
      "落ち着いた配色と、読みやすい情報配置を意識した名刺デザイン。表面で印象づけ、裏面でサービス内容が伝わる構成にしています。",
  },
  {
    type: "banner",
    id: "fashion-banner",
    title: "飲食店ランチバナー",
    images: ["/works/work-banner-fashion.png"],
    target: "お店のInstagramフォロワー（20〜30代の男女）",
    size: "1080px × 1080px",
    format: "png",
    tools: "Photoshop / Illustrator",
    term: "約2時間",
    point:
      "Instagram用ランチバナー。写真のボリューム感と、テキストの読みやすさのバランスを重視して制作しました。",
  },
];

export default function WorksPage() {
  type ModalState =
    | {
        src: string;
        variant: "lp" | "normal";
      }
    | null;

  const [modal, setModal] = useState<ModalState>(null);

  const openImage = (src: string, variant: "lp" | "normal" = "normal") => {
    setModal({ src, variant });
  };

  const closeModal = () => setModal(null);

  // ESCキーでモーダルを閉じる ＋ 背景スクロール固定
  useEffect(() => {
    if (!modal) {
      document.body.style.overflow = "";
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [modal]);

  // 画像プリロード
  useEffect(() => {
    works.forEach((work) => {
      if (work.type === "banner") {
        work.images.forEach((src) => {
          const img = new Image();
          img.src = src;
        });
      } else if (work.type === "lp") {
        const targets = [work.image, work.imageLarge].filter(Boolean) as string[];
        targets.forEach((src) => {
          const img = new Image();
          img.src = src;
        });
      } else if (work.type === "card") {
        [work.front, work.back].forEach((src) => {
          const img = new Image();
          img.src = src;
        });
      }
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#fff6f8] text-slate-900">
      <Header currentSection="works" enableSectionTracking={false} />

      {/* ===== デザインしたもの セクション ===== */}
      <div className="max-w-5xl mx-auto px-[10%] md:px-6 py-10 md:py-16 space-y-12 md:space-y-16">
        <section>
          <SectionTitle>デザインしたもの</SectionTitle>

          <div>
            {/* タイトル部分（Worksバッジ＋説明文） */}
            <header className="mb-8 md:mb-10 text-left space-y-3">
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdef8] text-xs font-semibold text-slate-800">
                Works
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                バナー・LP・名刺など、用途に合わせてさまざまなデザインを制作しています。
                目的やターゲットに合わせてレイアウトや色を設計し、「伝わる」ビジュアルに仕上げました。
              </p>
            </header>

            {/* 各作品ブロック */}
            <div className="space-y-12 md:space-y-14">
              {works.map((work) => (
                <section
                  key={work.id}
                  id={work.id}
                  className="
                    rounded-2xl bg-[#fffbfe] border border-[#f3d5eb]
                    p-6 md:p-8 shadow-[0_16px_50px_rgba(0,0,0,0.06)]
                  "
                >
                  {/* タイトル */}
                  <h2 className="text-lg md:text-xl font-bold mb-6 text-slate-900">
                    {work.title}
                  </h2>

                  <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-6 md:gap-10 items-start">
                    {/* 画像エリア */}
                    <div className="space-y-4">
                      {/* ▼ バナー作品 */}
                      {work.type === "banner" && (
                        <>
                          {work.images.length > 1 ? (
                            // ★ 2枚以上 → いままで通りのグリッド
                            <div className="grid gap-4 md:grid-cols-2">
                              {work.images.map((src) => (
                                <button
                                  key={src}
                                  type="button"
                                  onClick={() => openImage(src, "normal")}
                                  className="rounded-2xl overflow-hidden bg-white flex items-center justify-center cursor-zoom-in hover:opacity-90 transition shadow-sm"
                                >
                                  <img
                                    src={src}
                                    alt={work.title}
                                    className="w-full h-auto max-w-[420px] object-contain"
                                  />
                                </button>
                              ))}
                            </div>
                          ) : (
                            // ★ 1枚だけ → 共通サイズの正方形枠にそろえる
                            <button
                              type="button"
                              onClick={() => openImage(work.images[0], "normal")}
                              className="rounded-2xl overflow-hidden bg-white flex items-center justify-center cursor-zoom-in hover:opacity-90 transition shadow-sm"
                            >
                              <div className="w-full max-w-[360px] aspect-square flex items-center justify-center">
                                <img
                                  src={work.images[0]}
                                  alt={work.title}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            </button>
                          )}

                          <p className="text-xs text-slate-500 mt-1 text-center">
                            画像をタップすると、全体が見られます👀✨
                          </p>
                        </>
                      )}

                      {/* ▼ LP作品 */}
                      {work.type === "lp" && (
                        <>
                          <div className="rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center">
                            {work.videoUrl ? (
                              <a
                                href={work.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                              >
                                <img
                                  src={work.image}
                                  alt={work.title}
                                  className="w-full max-w-[420px] h-auto object-contain cursor-pointer hover:opacity-90 transition"
                                />
                              </a>
                            ) : (
                              <button
                                type="button"
                                onClick={() =>
                                  openImage(work.imageLarge ?? work.image, "lp")
                                }
                                className="block cursor-zoom-in hover:opacity-90 transition"
                              >
                                <img
                                  src={work.image}
                                  alt={work.title}
                                  className="w-full max-w-[420px] h-auto object-contain"
                                />
                              </button>
                            )}
                          </div>

                          <p className="text-xs text-slate-500 mt-1 text-center">
                            画像をタップすると、全体が見られます👀✨
                          </p>
                        </>
                      )}

                      {/* ▼ 名刺作品 */}
                      {work.type === "card" && (
                        <>
                          <div className="grid grid-cols-2 gap-4">
                            <button
                              type="button"
                              onClick={() => openImage(work.front, "normal")}
                              className="rounded-2xl overflow-hidden bg-white flex items-center justify-center cursor-zoom-in hover:opacity-90 transition shadow-sm"
                            >
                              <img
                                src={work.front}
                                alt={`${work.title} 表面`}
                                className="w-full h-auto object-contain"
                              />
                            </button>
                            <button
                              type="button"
                              onClick={() => openImage(work.back, "normal")}
                              className="rounded-2xl overflow-hidden bg-white flex items-center justify-center cursor-zoom-in hover:opacity-90 transition shadow-sm"
                            >
                              <img
                                src={work.back}
                                alt={`${work.title} 裏面`}
                                className="w-full h-auto object-contain"
                              />
                            </button>
                          </div>

                          <p className="text-xs text-slate-500 mt-1 text-center">
                            画像をタップすると、全体が見られます👀✨
                          </p>
                        </>
                      )}
                    </div>

                    {/* テキスト情報エリア */}
                    <div className="space-y-4 text-sm md:text-base">
                      <dl className="text-xs md:text-sm text-slate-600 space-y-1">
                        <div className="flex gap-2">
                          <dt className="w-20 shrink-0 font-semibold text-slate-700">
                            ターゲット
                          </dt>
                          <dd>{work.target}</dd>
                        </div>
                        <div className="flex gap-2">
                          <dt className="w-20 shrink-0 font-semibold text-slate-700">
                            サイズ
                          </dt>
                          <dd>{work.size}</dd>
                        </div>
                        <div className="flex gap-2">
                          <dt className="w-20 shrink-0 font-semibold text-slate-700">
                            納品形式
                          </dt>
                          <dd>{work.format}</dd>
                        </div>
                        <div className="flex gap-2">
                          <dt className="w-20 shrink-0 font-semibold text-slate-700">
                            制作ツール
                          </dt>
                          <dd>{work.tools}</dd>
                        </div>
                        <div className="flex gap-2">
                          <dt className="w-20 shrink-0 font-semibold text-slate-700">
                            制作期間
                          </dt>
                          <dd>{work.term}</dd>
                        </div>
                      </dl>

                      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                        {work.point}
                      </p>

                      <div className="pt-2">
                        <div className="pt-4 flex justify-end">
                          <SecondaryButton href="/#works" className="text-xs md:text-sm gap-1">
                            <span className="text-[11px]">トップページの一覧に戻る</span>
                          </SecondaryButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            {/* ===== お問い合わせセクション（home / about と統一） ===== */}
            <section id="contact" className="pt-8 md:pt-10">
              <div className="max-w-5xl mx-auto text-center">
                <SectionTitle>お問い合わせ</SectionTitle>

                <p
                  className="
                    mt-6
                    mx-auto
                    text-xs md:text-base
                    leading-relaxed text-[#333]
                  "
                >
                  ご覧いただきありがとうございます。<br />
                  「こんなデザインできる？」「ポートフォリオの詳細が知りたい」など、<br />
                  まずはお気軽にご相談ください。
                </p>

                <div className="mt-10">
                  <ContactCTA />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>

      {/* 画像モーダル */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <button
            type="button"
            onClick={closeModal}
            className="absolute inset-0 cursor-default"
            aria-label="モーダルを閉じる"
          />
          <div
            className={`relative mx-2 md:mx-6 modal-panel
              ${
                modal.variant === "lp"
                  ? "w-[min(480px,90vw)] max-h-[90vh] overflow-y-auto"
                  : "w-[min(700px,80vw)] max-h-[80vh]"
              }
            `}
          >
            <img
              src={modal.src}
              alt=""
              className="w-full h-auto object-contain"
            />
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-2 right-2 rounded-full bg-black/70 text-white text-xs px-2 py-1"
            >
              閉じる
            </button>
          </div>
        </div>
      )}

      <BackToTopButton />
    </main>
  );
}
