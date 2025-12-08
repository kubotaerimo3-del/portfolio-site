// app/about/page.tsx
"use client";

import Header from "../components/Header";
import ContactCTA from "../components/ContactCTA";
import BackToTopButton from "../components/BackToTopButton";
import SectionTitle from "../components/SectionTitle";

export default function AboutPage() {

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
    { name: "Photoshop", icon: "/tools/photoshop.png" },
    { name: "Illustrator", icon: "/tools/illustrator.png" },
    { name: "Premiere Pro", icon: "/tools/premiere.png" },
    { name: "After Effects", icon: "/tools/aftereffects.png" },
  ];

  const communicationTools: Tool[] = [
    { name: "Google Meet", icon: "/tools/googlemeet.png" },
    { name: "Zoom", icon: "/tools/zoom.png" },
    { name: "chatwork", icon: "/tools/chatwork.png" },
    { name: "Slack", icon: "/tools/slack.png" },
    { name: "Discord", icon: "/tools/discord.png" },
    { name: "MetaLife", icon: "/tools/metalife.png" },
  ];

  const languageTools: Tool[] = [
    { name: "HTML", icon: "/tools/html.png" },
    { name: "CSS", icon: "/tools/css.png" },
    { name: "JavaScript", icon: "/tools/javascript.png" },
    { name: "PHP", icon: "/tools/php.png" },
    { name: "Java", icon: "/tools/java.png" },
  ];


  return (
    <main className="min-h-screen bg-[#fff6f8] text-slate-900">
      <Header currentSection="about" enableSectionTracking={false} />
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-12 md:space-y-16">
          <SectionTitle>私について</SectionTitle>
          <section className="bg-white rounded-3xl shadow-sm border border-slate-100 px-6 py-8 md:px-10 md:py-12 space-y-12">
            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-12 items-center">
              <div className="space-y-4 text-sm md:text-base leading-relaxed">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#ffdef8] px-3 py-1 text-xs font-semibold text-slate-800">
                  WEBデザイン / 動画編集 / SNS 運用
                </div>
                <p className="text-lg md:text-xl font-bold text-slate-900">
                  はじめまして。WEBデザイナー・動画編集者の久保田恵里です。
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

            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-[360px] md:max-w-[420px]">
                <div className="absolute -inset-3 rounded-[28px] bg-[#ffdef8] blur-xl opacity-60" />
                <img
                  src="/about-my-face.png"
                  alt="久保田恵里の写真"
                  className="relative w-full h-auto rounded-[28px] shadow-[0_20px_80px_rgba(0,0,0,0.12)] object-cover bg-white"
                />
              </div>
              </div>
            </div>
            <div className="space-y-6">
            <div className="section-dash" />
            <div className="grid md:grid-cols-3 gap-6">
              {["動画編集（ショート・長尺）", "サムネイル・バナー制作", "LP / 名刺 / 簡単なWEBサイト制作", "SNS運用の設計・効率化", "マーケ視点での構成提案", "Googleワークスペースでの業務改善"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#fffbfe] border border-[#f3d5eb] px-4 py-3 text-sm font-medium text-slate-800 shadow-[0_6px_18px_rgba(0,0,0,0.05)]"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
            </div>

            <div className="space-y-8">
              <div className="section-dash" />
              <h3 className="text-xl font-bold text-center">使用ツール</h3>

              <div className="grid gap-10 md:gap-12">
              <ToolGroup title="デザイン・動画制作" tools={designTools} />
              <ToolGroup title="コミュニケーション・業務" tools={communicationTools} />
              <ToolGroup title="学習中の言語" tools={languageTools} />
              </div>
            </div>
          </section>

        <section className="bg-white rounded-3xl shadow-sm border border-slate-100 px-6 py-8 md:px-10 md:py-12 text-center space-y-6">
          <h2 className="text-xl md:text-2xl font-bold">お問い合わせ</h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-700">
            ご覧いただきありがとうございます。
            「こんなデザインできる？」「ポートフォリオの詳細が知りたい」など、
            まずはお気軽にご相談ください。
          </p>
          <div className="flex justify-center">
            <ContactCTA />
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
      <h4 className="text-base md:text-lg font-semibold text-center text-slate-900">
        {title}
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-8 justify-items-center">
        {tools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-[#f8f4ff] border border-[#e8d6f3] flex items-center justify-center overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="text-xs md:text-sm text-slate-700 text-center">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
