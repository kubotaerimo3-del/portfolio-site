// app/about/page.tsx
"use client";

import Header from "../components/Header";
import ContactCTA from "../components/ContactCTA";
import BackToTopButton from "../components/BackToTopButton";
import SectionTitle from "../components/SectionTitle";

type Tool = {
  name: string;
  icon: string;
};

const designTools: Tool[] = [
  { name: "Figma", icon: "/tools/figma.svg" },
  { name: "Canva", icon: "/tools/canva.svg" },
  { name: "SUTADIO", icon: "/tools/sutadio.svg" },
  { name: "VScord", icon: "/tools/vscord.svg" },
  { name: "Affinity", icon: "/tools/affinity.svg" },
  { name: "Photoshop", icon: "/tools/photoshop.svg" },
  { name: "Illustrator", icon: "/tools/illustrator.svg" },
  { name: "Premiere Pro", icon: "/tools/premierepro.svg" },
  { name: "After Effects", icon: "/tools/aftereffect.svg" },
];

const communicationTools: Tool[] = [
  { name: "Google Meet", icon: "/tools/googlemeet.svg" },
  { name: "Zoom", icon: "/tools/zoom.svg" },
  { name: "chatwork", icon: "/tools/chatwork.svg" },
  { name: "Slack", icon: "/tools/slack.svg" },
  { name: "Discord", icon: "/tools/discord.svg" },
  { name: "MetaLife", icon: "/tools/metalife.svg" },
];

const languageTools: Tool[] = [
  { name: "HTML", icon: "/tools/html.svg" },
  { name: "CSS", icon: "/tools/css.svg" },
  { name: "JavaScript", icon: "/tools/javascript.svg" },
  { name: "PHP", icon: "/tools/php.svg" },
  { name: "Java", icon: "/tools/java.svg" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fff6f8] text-slate-900">
      <Header currentSection="about" enableSectionTracking={false} />

      {/* ★ 左右の余白を SP でも少し広めに（px-5） */}
      {/* ★ セクション間：SP は詰めて、PC はゆったり */}
      <div className="max-w-5xl mx-auto px-[10%] md:px-6 py-12 md:py-16 space-y-12 md:space-y-16">
        {/* ===== 私について ===== */}
        <section>
          <SectionTitle>私について</SectionTitle>

          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-10 items-center">
            {/* 左：テキスト */}
            <div className="space-y-4 text-sm md:text-base leading-relaxed">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#ffdef8] px-3 py-1 text-xs font-semibold text-slate-800">
                WEBデザイン / 動画編集 / SNS 運用
              </div>
              <p className="text-lg md:text-xl font-bold text-slate-900">
                はじめまして。<br />
                WEBデザイナー・動画編集者の久保田恵里です。
              </p>
              <p>
                SNS運用やWEBデザインを通して、企業やお店の魅力をカタチにするお手伝いをしています。
                「 まずやってみる」「なんとかなる」を合言葉に、目的に寄り添うデザインを大切にしています。
              </p>
              <p>
                ものづくりの原点は高校の文化祭。手作りのポーチが完売した経験から、
                パタンナーを目指して専門学校へ進学しました。結婚・出産後は医療事務として働きながら、
                再びクリエイティブへの想いが強くなり、動画編集とWEBデザインを学び直しています。
              </p>
              <p>
                動画編集では魅力を伝える導線、デザインでは見る人の気持ちに寄り添う余白と色を意識。
                「伝わるカタチ」を一緒につくるパートナーとして伴走します。
              </p>
            </div>

            {/* 右：写真 */}
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
              <div
                className="
                  relative w-full
                  max-w-[260px] sm:max-w-[300px] md:max-w-[420px]  // ★ SP の写真を少し小さく
                "
              >
                <img
                  src="/about-my-face.png"
                  alt="久保田恵里の写真"
                  className="relative w-full h-auto rounded-[28px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== できること ===== */}
        <section>
          <SectionTitle>できること</SectionTitle>

          {/* ★ SP は幅を少し絞って中央寄せ・PC は3カラム */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              "動画編集（ショート・長尺）",
              "サムネイル・バナー制作",
              "LP / 名刺 / 簡単なWEBサイト制作",
              "SNS運用の設計・効率化",
              "マーケ視点での構成提案",
              // "Googleワークスペースでの業務改善",
            ].map((item) => (
              <div
                key={item}
                className="
w-[60%] md:w-full
          mx-auto
          rounded-2xl bg-[#fffbfe] border border-[#f3d5eb]
          px-4 py-3
          text-xs md:text-sm font-medium text-slate-800
          text-center md:text-left
          shadow-[0_6px_18px_rgba(0,0,0,0.05)]
                "
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ===== 使用ツール ===== */}
        <section>
          <SectionTitle>使用ツール</SectionTitle>

          <div className="grid gap-10 md:gap-12">
            <ToolGroup title="デザイン・動画制作" tools={designTools} />
            <ToolGroup title="コミュニケーション・業務" tools={communicationTools} />
            <ToolGroup title="学習中の言語" tools={languageTools} />
          </div>
        </section>

        {/* ===== お問い合わせエリア ===== */}
        <section id="contact" className="pt-6 md:pt-10">
          <div className="max-w-5xl mx-auto text-center">
            <SectionTitle>お問い合わせ</SectionTitle>

            {/* ★ SP は幅を絞って中央に。行間も少しだけ広め */}
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

      <BackToTopButton />
    </main>
  );
}

type ToolGroupProps = {
  title: string;
  tools: Tool[];
};

function ToolGroup({ title, tools }: ToolGroupProps) {
  return (
    <div className="space-y-4">
      {/* ★ ラベルは PC / SP 共通で見やすいサイズ */}
      <div className="flex justify-center">
        <span
          className="
            inline-flex items-center justify-center
            rounded-full border border-[#f3cfe6]
            bg-[#ffeef9]     // 薄いピンクベース
            px-4 py-1
            text-xs md:text-sm font-semibold text-slate-700
          "
        >
          {title}
        </span>
      </div>

      <div
        className="
          grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5
          gap-x-6 gap-y-8
          justify-items-center
        "
      >
        {tools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center gap-2">
            <img
              src={tool.icon}
              alt={tool.name}
              className="
                w-14 h-14 md:w-16 md:h-16
                rounded-2xl
                object-contain
                shadow-[0_4px_16px_rgba(0,0,0,0.10)]
              "
            />

            {/* ★ アイコンタイトル：少し大きめ＆色も少し濃く */}
            <span className="text-[11px] md:text-sm text-slate-700 text-center">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
