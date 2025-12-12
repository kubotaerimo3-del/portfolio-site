// app/about/page.tsx
"use client";

import Image from "next/image";
import Header from "../components/Header";
import ContactCTA from "../components/ContactCTA";
import BackToTopButton from "../components/BackToTopButton";
import SectionTitle from "../components/SectionTitle";
import aboutPortrait from "@/public/about-my-face.png";

type Tool = {
  name: string;
  icon: string;
};

const designTools: Tool[] = [
  { name: "Figma", icon: "/tools/figma.svg" },
  { name: "Canva", icon: "/tools/canva.svg" },
  { name: "STUDIO", icon: "/tools/sutadio.svg" },
  { name: "VS Code", icon: "/tools/vscord.svg" },
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
    <main className="min-h-screen text-slate-900 pt-20 md:pt-24 sp-text-left-all">
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
              </p>
              <p className="mt-6 font-semibold text-sm md:text-base">
                これまでのこと
              </p>
              <p>
                私の“ものづくり”の原点は、高校生の文化祭でした。<br />
                手作りのポーチを制作して販売したら、なんと完売。<br />
                この経験がきっかけでパタンナーを目指し、専門学校に進学しました。<br />
                パタンナーとして就職しましたが、結婚・妊娠・出産を機に退職。家庭と子育てを優先しながら、医療事務の資格を取得し、長く医療事務の仕事を続けてきました。
              </p>
              <p className="mt-4 font-semibold text-sm md:text-base">
                今、取り組んでいること
              </p>
              <p>
                そんな中、「やっぱりクリエイティブな仕事がしたい！」<br />
                その気持ちが再燃し、子育ての合間に動画編集を学び、副業として始めたのが現在のキャリアのスタートです。<br />
                その後、動画編集を続ける中でもっと効果的に魅力を届けるためには、デザインやマーケティングの知識が必要だと感じました<br />
                そこで、動画編集だけでなくWEBデザインやSNS運用のスキルも習得し、現在はフリーランスとして活動しています。
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
                  aspect-[3/4]
                "
              >
                <Image
                  src={aboutPortrait}
                  alt="久保田恵里の写真"
                  fill
                  sizes="(min-width: 1024px) 420px, (min-width: 640px) 300px, 260px"
                  className="rounded-[28px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== できること ===== */}
        <section>
          <SectionTitle>できること</SectionTitle>

          {/* ★ SP は幅を少し絞って中央寄せ・PC は3カラム */}
          <div className="grid gap-4 md:gap-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            {[
              "動画編集（ショート・長尺）",
              "サムネイル・バナー制作",
              "LP / 名刺 / WEBサイト制作",
              "SNS運用の設計・効率化",
              "マーケ視点での構成提案",
              "GASを使った業務効率化",
            ].map((item) => (
              <div
                key={item}
                className="
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
            <ToolGroup title="言 語" tools={languageTools} />
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
    <div
      className="
        rounded-3xl
        bg-[#fffafb]
        border border-[#f7d9ee]
        shadow-[0_10px_25px_rgba(0,0,0,0.03)]
        px-5 md:px-6 py-6 md:py-7
        space-y-4 md:space-y-3
      "
    >
      {/* 小見出しピル */}
      <div className="flex justify-center md:justify-start mb-4 md:mb-6">
        <span
          className="
            inline-flex items-center justify-center
            rounded-full border border-[#f3cfe6]
            bg-[#ffeef9]
            px-4 py-1
            text-xs md:text-sm font-semibold text-slate-700
            shadow-[0_4px_10px_rgba(0,0,0,0.04)]
          "
        >
          {title}
        </span>
      </div>

      {/* アイコンのグリッド */}
      <div
        className="
          grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5
          gap-x-6 gap-y-6 md:gap-y-10
          justify-items-center
          mx-auto
        "
      >
        {tools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center md:items-start gap-2">
            <Image
              src={tool.icon}
              alt={tool.name}
              width={64}
              height={64}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
            <span className="block w-full text-[11px] md:text-sm text-slate-700 text-center">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
