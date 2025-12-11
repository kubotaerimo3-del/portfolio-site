// app/works/page.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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
    format: "mp4",
    tools: "premiere pro / Affinity",
    term: "約1.5日",
    point:
      "このポートフォリオサイトの元になったポートフォリオ動画。余白と読みやすさ、わかりやすさを意識して構成しました。動画の概要欄にその他の制作実績も掲載していますので、ぜひご覧ください。",
    videoUrl: "https://youtu.be/93JhLlyVuKw",
  },
  {
    type: "banner",
    id: "lunch-banner",
    title: "飲食店ランチバナー",
    images: ["/works/work-sandwich-orange-2.png", "/works/work-sandwich.png"],
    target:
      "お店のInstagramフォロワー・八幡山周辺のお仕事されている20〜30代の男女",
    size: "1080px × 1080px",
    format: "png",
    tools: "Photoshop",
    term: "約2時間",
    point:
      "Instagram用ランチバナー。写真のボリューム感と、トーストを焼いた香ばしさやお肉のジューシーさを意識し、テキストの読みやすさのバランスを重視して制作しました。また、お店のイメージカラーのオレンジを意識したデザインと、オレンジ系の温かみを残したデザインの2パターンを作成しました。",
  },
  {
    type: "lp",
    id: "shop-reel",
    title: "お店のInstagram用リール動画",
    image: "/works/work-move-reelshort-enotekadiner1.png",
    target:
      "お店のInstagramフォロワー・八幡山周辺のお仕事されている20〜30代の男女",
    size: "1280px × 1920px",
    format: "mp4",
    tools: "premiere pro",
    term: "約3時間",
    point:
      "Instagramリール用の動画広告。お店の紹介用として作成しました。お店のコンセプトに合わせた雰囲気や魅力が伝わるよう編集しました。また、音楽やテキストを効果的に使用し、視聴者の関心を引きつけることを意識しています。",
    videoUrl: "https://youtube.com/shorts/FqcZ_ePYVYw",
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
    tools: "Photoshop",
    term: "約2時間",
    point:
      "新色の雰囲気が伝わるようパステルカラーでまとめたバナー。情報が一目で分かるレイアウトを意識しました。また、グラデーションを活かしたデザインも制作し、ターゲットに合わせて使い分けられるようにしています。 写真の色味調整も行い、全体のトーンを統一しました。",
  },
  {
    type: "lp",
    id: "shampoo-lp",
    title: "課題LP（シャンプー）",
    image: "/works/work-lp-shampoo.png",
    imageLarge: "/works/work-lp-shampoo-all.png",
    target: "20代〜30代の女性",
    size: "1440px × 5775px",
    format: "png",
    tools: "Photoshop",
    term: "約8時間",
    point:
      "このシャンプーを使用することによって、1日の疲れを洗い流し、明日の自分に自信が持てるようなイメージで、悩み別の訴求や成分の見せ方を意識して構成したLPです。 ターゲット層に合わせた柔らかい色味と、少しだけリッチな気分になれる高級感の感じられるデザインに仕上げました。 また、購入しやすいよう、割引率と金額がわかりやすいように意識しました。",
  },
  {
    type: "card",
    id: "business-card-sample",
    title: "課題名刺デザイン（表・裏）",
    front: "/works/card-front.jpg",
    back: "/works/card-back.jpg",
    target: "ヘアサロンに来店する20〜40代の男女",
    size: "91mm × 55mm（4号）",
    format: "PDF",
    tools: "Illustrator",
    term: "約8時間",
    point:
      "落ち着いた配色と、読みやすい情報配置を意識した名刺デザイン。表面で印象づけ、裏面でサービス内容が伝わる構成にしています。 また、ヘアサロンのロゴカラーをアクセントに使用し、ブランドイメージを強調しました。全体的にシンプルで洗練されたデザインに仕上げています。",
  },
  {
    type: "banner",
    id: "fashion-banner",
    title: "課題バナー（ファッション）",
    images: ["/works/work-banner-fashion.png"],
    target: "20〜30代の男女",
    size: "1080px × 1080px",
    format: "png",
    tools: "Photoshop / Illustrator",
    term: "約2時間",
    point:
      "冬物ファッションのセールバナー。ターゲット層に合わせたシンプルでスタイリッシュなデザインを意識しました。「お得感を感じさせる、文字メインのバナーにして欲しい」という要望を想定してトーンを調整し、全体の雰囲気を統一しています。セール感が伝わるよう、テキストの配置とフォント選びにもこだわりました。また、冬を感じさせる色味を使用し、季節感を演出しています。",
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
          const img = new window.Image();
          img.src = src;
        });
      } else if (work.type === "lp") {
        const targets = [work.image, work.imageLarge].filter(
          Boolean
        ) as string[];
        targets.forEach((src) => {
          const img = new window.Image();
          img.src = src;
        });
      } else if (work.type === "card") {
        [work.front, work.back].forEach((src) => {
          const img = new window.Image();
          img.src = src;
        });
      }
    });
  }, []);

  return (
    <main className="min-h-screen text-slate-900 pt-20 md:pt-24">
      <Header currentSection="works" enableSectionTracking={false} />

      <div className="max-w-5xl mx-auto px-[10%] md:px-6 py-10 md:py-16 space-y-12 md:space-y-16">
        <section>
          <SectionTitle>デザインしたもの</SectionTitle>

          <div>
            <header className="mb-8 md:mb-10 text-left space-y-3">
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdef8] text-xs font-semibold text-slate-800">
                Works
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                バナー・LP・名刺など、用途に合わせてさまざまなデザインを制作しています。
                目的やターゲットに合わせてレイアウトや色を設計し、「伝わる」ビジュアルに仕上げました。
              </p>

              <p className="font-semibold mt-4">
                このポートフォリオサイトについて
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                このポートフォリオサイトでは、単に作品を並べるだけでなく、
                「誰に・どんな目的で・どんな意図で作ったデザインか」が伝わるよう UI / UX を意識して構成しています。<br />
                各作品ごとにターゲット・サイズ・制作ツール・制作期間・デザインのポイントを整理し、
                画像はモーダルで拡大できるようにすることで、視覚と情報の両面から制作意図が伝わるようにしました。
              </p>

              <p className="text-xs md:text-sm text-slate-600">
                ☝🏻 画像はクリック・タップで拡大表示できますので、ぜひ細部までご覧ください👀✨
              </p>
            </header>

            <div className="space-y-12 md:space-y-14">
              {works.map((work) => (
                <section
                  key={work.id}
                  id={work.id}
                  className="
                    rounded-2xl bg-[#fffbfe] border border-[#f3d5eb]
                    p-6 md:p-8
                    shadow-lg shadow-black/5
                    transition-all duration-200
                    hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10
                    active:translate-y-0 active:shadow-lg
                  "
                >
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
                            // 複数パターン
                            <div className="grid grid-cols-2 gap-4 max-w-[460px]">
                              {work.images.map((src) => (
                                <button
                                  key={src}
                                  type="button"
                                  onClick={() => openImage(src, "normal")}
                                  className="cursor-zoom-in hover:opacity-90 transition"
                                >
                                  <div className="w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden
                                      bg-transparent
                                      shadow-lg shadow-black/5
                                      transition-all duration-200
                                      hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10
                                      active:translate-y-0 active:shadow-lg relative">
                                    <Image
                                      src={src}
                                      alt={work.title}
                                      fill
                                      sizes="(min-width: 768px) 220px, 45vw"
                                      className="object-cover scale-[1.06]"
                                    />
                                  </div>
                                </button>
                              ))}
                            </div>
                          ) : (
                            // 1枚だけ
                            <div className="flex justify-center">
                              <button
                                type="button"
                                onClick={() =>
                                  openImage(work.images[0], "normal")
                                }
                                className="cursor-zoom-in hover:opacity-90 transition"
                              >
                                <div className="w-full max-w-[260px] aspect-square rounded-2xl overflow-hidden
                                  bg-transparent mx-auto
                                  shadow-lg shadow-black/5
                                  transition-all duration-200
                                  hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10
                                  active:translate-y-0 active:shadow-lg relative">
                                  <Image
                                    src={work.images[0]}
                                    alt={work.title}
                                    fill
                                    sizes="(min-width: 768px) 260px, 70vw"
                                    className="object-cover scale-[1.06]"
                                  />
                                </div>
                              </button>
                            </div>
                          )}

                          <p className="text-xs text-slate-500 mt-1 text-center">
                            画像をタップすると、全体が見られます👀✨
                          </p>
                        </>
                      )}

                      {/* ▼ LP作品 */}
                      {work.type === "lp" && (
                        <>
                          <div className="flex justify-center">
                            <div className="w-full max-w-[260px] aspect-square rounded-2xl overflow-hidden
                              bg-transparent mx-auto
                              shadow-lg shadow-black/5
                              transition-all duration-200
                              hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10
                              active:translate-y-0 active:shadow-lg relative">
                              {work.videoUrl ? (
                                <a
                                  href={work.videoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block w-full h-full"
                                >
                                  <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    sizes="(min-width: 768px) 260px, 70vw"
                                    className="object-cover scale-[1.06]"
                                  />
                                </a>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() =>
                                    openImage(
                                      work.imageLarge ?? work.image,
                                      "lp"
                                    )
                                  }
                                  className="block w-full h-full cursor-zoom-in hover:opacity-90 transition"
                                >
                                  <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    sizes="(min-width: 768px) 260px, 70vw"
                                    className="object-cover scale-[1.06]"
                                  />
                                </button>
                              )}
                            </div>
                          </div>

                          <p className="text-xs text-slate-500 mt-1 text-center">
                            画像をタップすると、全体が見られます👀✨
                          </p>
                        </>
                      )}

                      {/* ▼ 名刺作品 */}
                      {work.type === "card" && (
                        <>
                          <div className="flex gap-4">
                            {[work.front, work.back].map((src, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => openImage(src, "normal")}
                                  className="cursor-zoom-in hover:opacity-90 transition"
                                >
                                  <div className="w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden
                                  bg-transparent
                                  shadow-lg shadow-black/5
                                  transition-all duration-200
                                  hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10
                                  active:translate-y-0 active:shadow-lg relative">
                                  <Image
                                      src={src}
                                      alt={`${work.title} ${
                                      i === 0 ? "表" : "裏"
                                      }`}
                                      fill
                                      sizes="(min-width: 768px) 220px, 45vw"
                                      className="object-cover scale-[1.01]"
                                    />
                                  </div>
                                </button>
                              ))}
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
                        <p className="font-semibold text-xs md:text-sm text-slate-700 mt-4">
                          デザインのポイント
                        </p>
                        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                          {work.point}
                        </p>
                      </dl>

                      <div className="pt-2">
                        <div className="pt-4 flex justify-end">
                          <SecondaryButton
                            href="/#works"
                            className="text-xs md:text-sm gap-1"
                          >
                            <span className="text-[11px]">
                              トップページの一覧に戻る
                            </span>
                          </SecondaryButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            {/* お問い合わせセクション */}
            <section id="contact" className="pt-8 md:pt-10">
              <div className="max-w-5xl mx-auto text-center">
                <SectionTitle>お問い合わせ</SectionTitle>

                <p className="mt-6 mx-auto text-xs md:text-base leading-relaxed text-[#333]">
                  ご覧いただきありがとうございます。<br />
                  「こんなデザインできる？」「ポートフォリオの詳細が知りたい」など、
                  <br />
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
            className={`relative mx-2 md:mx-6 modal-panel ${
              modal.variant === "lp"
                ? "w-[min(480px,90vw)] max-h-[90vh] overflow-y-auto"
                : "w-[min(700px,80vw)] max-h-[80vh]"
            }`}
          >
            <div
              className="relative w-full"
              style={{ aspectRatio: modal.variant === "lp" ? "9 / 16" : "1 / 1" }}
            >
              <Image
                src={modal.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 60vw, 90vw"
                className="object-contain"
              />
            </div>
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
