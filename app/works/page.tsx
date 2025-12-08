// app/works/page.tsx
"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import BackToTopButton from "../components/BackToTopButton";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import ContactCTA from "../components/ContactCTA";

type BannerWork = {
  type: "banner"; // A案
  id: string;
  title: string;
  images: string[]; // メイン＋バリエーション
  target: string;
  size: string;
  format: string;
  tools: string;
  term: string;
  point: string;
};

type LpWork = {
  type: "lp"; // B案
  id: string;
  title: string;
  image: string;       // 一覧用サムネ
  imageLarge?: string; // モーダル用の縦長画像（あれば使う）
  target: string;
  size: string;
  format: string;
  tools: string;
  term: string;
  point: string;
  videoUrl?: string;   // 動画リンク（ある作品だけ入れる）
};

type CardWork = {
  type: "card"; // C案（名刺）
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
  // ====== 動画編集ポートフォリオ（B案） ======
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
    videoUrl: "https://youtu.be/93JhLlyVuKw", // ← 末尾の string は削除
  },

  // ====== サンドイッチバナー（A案） ======
  {
    type: "banner",
    id: "lunch-banner",
    title: "飲食店ランチバナー",
    images: [
      "/works/work-sandwich-orange-2.png", // メイン
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

  // ====== ネイルバナー（A案） ======
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

  // ====== 課題LP（B案） ======
  {
    type: "lp",
    id: "shampoo-lp",
    title: "課題LP（シャンプー）",
    image: "/works/work-lp-shampoo.png",        // 小さいサムネ
    imageLarge: "/works/work-lp-shampoo-all.png", // 縦長フル画像
    target: "10代〜20代の女性",
    size: "1440px × 5775px",
    format: "png",
    tools: "Photoshop",
    term: "約2時間",
    point:
      "自分に合うシャンプーが見つかるように、悩み別の訴求や成分の見せ方を意識して構成したLPです。",
  },

  // ====== 名刺（C案） ======
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

  // ====== 課題バナー（A案） ======
  {
    type: "banner",
    id: "fashion-banner",
    title: "飲食店ランチバナー",
    images: [
      "/works/work-banner-fashion.png", // メイン
    ],
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
  // モーダルの状態：表示する画像と種類だけ持つ
  type ModalState = {
    src: string;
    variant: "lp" | "normal"; // LP 用か、バナー／名刺用か
  } | null;

  const [modal, setModal] = useState<ModalState>(null);

  const openImage = (src: string, variant: "lp" | "normal" = "normal") => {
    setModal({ src, variant });
  };

  const closeModal = () => setModal(null);

   // ESCキーでモーダルを閉じる ＋ 背景スクロール固定
  useEffect(() => {
    if (!modal) {
      // モーダルが閉じているとき：スクロールを元に戻す
      document.body.style.overflow = "";
      return;
    }

    // 背景スクロールを止める
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // 後片付け
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [modal]);

  // 画像プリロード（初回マウント時に1回だけ）
  useEffect(() => {
    works.forEach((work) => {
      if (work.type === "banner") {
        work.images.forEach((src) => {
          const img = new Image();
          img.src = src;
        });
      } else if (work.type === "lp") {
        const targets = [work.image, work.imageLarge].filter(
          Boolean
        ) as string[];
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
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 space-y-12 md:space-y-16">
        <SectionTitle>デザインしたもの</SectionTitle>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 px-6 py-8 md:px-10 md:py-12">
          {/* タイトル部分 */}
          <header className="mb-10 md:mb-12 text-center md:text-left space-y-3">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdef8] text-xs font-semibold text-slate-800">
              Works
            </p>
            <h1 className="text-2xl md:text-3xl font-bold">デザインしたもの</h1>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              バナー・LP・名刺など、用途に合わせてさまざまなデザインを制作しています。
              目的やターゲットに合わせてレイアウトや色を設計し、「伝わる」ビジュアルに仕上げました。
            </p>
          </header>

          {/* 各作品ブロック */}
          <div className="space-y-14 md:space-y-16">
            {works.map((work, index) => (
              <section
                key={work.id}
                id={work.id}
                className={`
                  rounded-2xl bg-[#fffbfe] border border-[#f3d5eb] p-6 md:p-8 shadow-[0_16px_50px_rgba(0,0,0,0.06)]
                  ${index !== 0 ? "mt-6" : ""}
                `}
              >
                {/* タイトル */}
                <h2 className="text-lg md:text-xl font-bold mb-6 text-slate-900">
                  {work.title}
                </h2>

                <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-6 md:gap-10 items-start">

                  {/* 画像エリア */}
                  <div className="space-y-4">
                    {/* A案：バナー */}
                    {work.type === "banner" && (
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
                    )}

                    {/* B案：LP */}
                    {work.type === "lp" && (
                      <div className="rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center">
                        {work.videoUrl ? (
                          // 動画作品 → YouTubeへ
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
                          // 通常LP → モーダルで縦長画像
                          <button
                            type="button"
                            onClick={() =>
                              openImage(work.imageLarge ?? work.image, "lp")
                            }
                            className="block cursor-zoom-in hover:opacity-90 transition"
                          >
                            <img
                              src={work.image} // 一覧はサムネ
                              alt={work.title}
                              className="w-full max-w-[420px] h-auto object-contain"
                            />
                          </button>
                        )}
                      </div>
                    )}

                    {/* C案：名刺 */}
                    {work.type === "card" && (
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
                    )}
                  </div>

                  {/* テキスト情報エリア（ここは今のまま流用） */}
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
                      <Link
                        href="/#works"
                        className="inline-flex items-center gap-1 text-xs md:text-sm text-emerald-600 font-medium hover:text-emerald-700"
                      >
                        <span className="border-b border-emerald-300 pb-0.5">
                          トップページの一覧に戻る
                        </span>
                        <span className="text-[11px]">↩</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

        {/* お問い合わせセクション（home と同じイメージ） */}
          <section className="mt-16 md:mt-20 border-t border-dashed border-[#f3d5eb] pt-10 md:pt-12 text-center space-y-6">
            <h2 className="text-xl md:text-2xl font-bold">お問い合わせ</h2>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              ご覧いただきありがとうございます！<br />
              下記よりお気軽にご相談ください！
            </p>

            <div className="flex justify-center">
              <ContactCTA />
            </div>
          </section>

          {/* 一番下：HOMEへ戻る */}
          <div className="mt-12 md:mt-16 text-center">
            <Link
              href="/#home"
              className="inline-flex items-center gap-2 text-sm md:text-base text-emerald-600 font-medium"
            >
              <span className="border-b border-emerald-300 pb-0.5">
                ホームに戻る
              </span>
              <span className="text-base">↑</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 画像モーダル */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          {/* 背景クリックで閉じる */}
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
                  ? "w-[min(480px,90vw)] max-h-[90vh] overflow-y-auto" // LP：細め＋縦スクロール
                  : "w-[min(700px,80vw)] max-h-[80vh]"                  // バナー・名刺：少し小さめ（約70%）
              }
            `}
          >
            <img
              src={modal.src}
              alt=""
              className="w-full h-auto object-contain"   // ★ 白いフレームなし（bg-white, rounded コンテナ削除）
            />

            {/* 閉じるボタン：画像の中に収まるように */}
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
      {/* 追従「戻る」ボタン */}
      <BackToTopButton />
    </main>
  );
}
