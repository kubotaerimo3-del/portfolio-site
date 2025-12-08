// app/about/page.tsx
"use client";

import ContactCTA from "../components/ContactCTA";
import BackToTopButton from "../components/BackToTopButton";

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
      {/* 全体の背景（#home とトーンを合わせる想定） */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
        {/* ★あとで共通ヘッダーコンポーネントをここに差し込む予定 */}
        {/* <SiteHeader current="about" /> みたいなイメージ */}

        {/* 中央の白いカード */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-5 py-8 md:px-10 md:py-10">
          {/* 上の名前＆アイコンエリア */}
          <header className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                {/* プロフィールアイコン */}
                <img
                  src="/icon.png" // ★ご自身のアイコン画像に差し替え
                  alt="くぼた えり"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm md:text-base font-semibold">くぼた えり</p>
            </div>

            {/* 上部の3つボタン（デザインしたもの / 私について / お問い合わせ） */}
            <nav className="flex gap-2 text-xs md:text-sm">
              <a
                href="/#works"
                className="px-3 py-1.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 transition"
              >
                デザインしたもの
              </a>
              <span className="px-3 py-1.5 rounded-full border border-emerald-400 bg-emerald-50 text-emerald-700 font-semibold">
                私について
              </span>
              <a
                href="/#contact"
                className="px-3 py-1.5 rounded-full border border-lime-400 bg-lime-50 text-lime-700 hover:bg-lime-100 transition"
              >
                お問い合わせ
              </a>
            </nav>
          </header>

          {/* 私について -------------------------------------------------- */}
          <section className="py-12 md:py-16">
            {/* 上の破線 */}
            <div className="mb-10 h-2 bg-[url('/section-dash.svg')] bg-repeat-x bg-[length:60px_8px]" />

            <h2 className="text-center text-xl md:text-2xl font-bold mb-8">
              私について
            </h2>

            {/* 中央寄せ */}
            <div className="flex justify-center">
              <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-14 max-w-4xl w-full">
                
                {/* 自己紹介テキスト：行間少し詰める */}
                <div className="md:flex-1 text-sm md:text-base leading-tight">
                  <p className="mb-4">
                    はじめまして。<br />
                    WEBデザイン・動画編集者の久保田恵里です。
                  </p>
                  <p className="mb-4">
                    SNS運用やWEBデザインを通して、企業やお店の魅力をカタチにするお手伝いをしています。
                  </p>
                  <p className="mb-4">
                    私のものづくりの原点は、高校生の文化祭でした。<br />
                    手作りのポーチを制作して販売したら、なんと完売。<br />
                    この経験がきっかけでものづくりに目覚め、パタンナーを目指し専門学校に進学しました。
                  </p>
                  <p className="mb-4">
                    パタンナーとして就職しましたが、結婚・妊娠・出産を機に退職。<br />
                    家庭と子育てを優先しながら、医療事務の資格を取得し、長く医療事務の仕事を続けてきました。
                  </p>
                  <p className="mb-4">
                    ですが…やっぱりクリエイティブな仕事がしたい！<br />
                    その気持ちが再燃し、動画編集を学び、YouTube動画編集を始めました。
                  </p>
                  <p>
                    動画編集を続ける中で、もっと効果的に魅力を届けるためには、デザインやマーケティングの知識が必要だと感じ、
                    WEBマーケティングとWEBデザインを学びました。
                  </p>
                </div>

                {/* プロフィール写真：さらに大きく */}
                <div className="md:w-72 md:flex-shrink-0 flex justify-center md:justify-end">
                  <img
                    src="/about-my-face.png"
                    alt="久保田恵里の写真"
                    className="w-56 md:w-80 h-auto rounded-2xl shadow-md object-contain mt-6 md:mt-10" 
                  />
                </div>
              </div>
            </div>

            {/* 下の破線 */}
            <div className="mt-10 h-2 bg-[url('/section-dash.svg')] bg-repeat-x bg-[length:60px_8px]" />
          </section>

          {/* ===== セクション：今できること ===== */}
          <section className="mb-8 md:mb-10">
            <h2 className="text-base md:text-lg font-semibold mb-3">今できること</h2>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm leading-relaxed">
              <li>動画編集（ショート・長尺）</li>
              <li>サムネイル制作</li>
              <li>バナー制作</li>
              <li>LPデザイン</li>
              <li>名刺デザイン</li>
              <li>簡単なWEBサイト制作（HTML / CSS）</li>
              <li>Googleワークスペースを使った作業効率化</li>
            </ul>
          </section>

          {/* 使用ツール -------------------------------------------------- */}
          <section className="py-12 md:py-16">
            {/* 上の破線 */}
            <div className="mb-10 h-2 bg-[url('/section-dash.svg')] bg-repeat-x bg-[length:60px_8px]" />

            <h2 className="text-center text-xl md:text-2xl font-bold mb-8">
              使用ツール
            </h2>

            <div className="max-w-5xl mx-auto space-y-10 md:space-y-12">
              {/* デザイン・動画制作 */}
              <div>
                <h3 className="text-center text-base md:text-lg font-semibold mb-4">
                  デザイン・動画制作
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-8 justify-items-center">
                  {designTools.map((tool) => (
                    <div key={tool.name} className="flex flex-col items-center gap-2">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-14 h-14 md:w-16 md:h-16 object-contain"
                      />
                      <span className="text-xs md:text-sm text-slate-700">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 破線 */}
            <div className="mb-10 h-2 bg-[url('/section-dash.svg')] bg-repeat-x bg-[length:60px_8px]" />

              {/* コミュニケーション・業務 */}
              <div>
                <h3 className="text-center text-base md:text-lg font-semibold mb-4">
                  コミュニケーション・業務
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-8 justify-items-center">
                  {communicationTools.map((tool) => (
                    <div key={tool.name} className="flex flex-col items-center gap-2">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-14 h-14 md:w-16 md:h-16 object-contain"
                      />
                      <span className="text-xs md:text-sm text-slate-700">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 破線 */}
            <div className="mb-10 h-2 bg-[url('/section-dash.svg')] bg-repeat-x bg-[length:60px_8px]" />

              {/* 学習中の言語 */}
              <div>
                <h3 className="text-center text-base md:text-lg font-semibold mb-4">
                  学習中の言語
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-8 justify-items-center">
                  {languageTools.map((tool) => (
                    <div key={tool.name} className="flex flex-col items-center gap-2">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-14 h-14 md:w-16 md:h-16 object-contain"
                      />
                      <span className="text-xs md:text-sm text-slate-700">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 下の破線 */}
            <div className="mt-10 h-2 bg-[url('/section-dash.svg')] bg-repeat-x bg-[length:60px_8px]" />
          </section>

          {/* ===== お問い合わせエリア ===== */}
          <section id="about-contact" className="text-center space-y-4">
            <h2 className="text-base md:text-lg font-semibold">お問い合わせ</h2>
            <p className="text-xs md:text-sm leading-relaxed">
              ご覧いただきありがとうございます。
              <br />
              「こんなデザインできる？」「ポートフォリオの詳細が知りたい」など、
              <br className="hidden md:block" />
              まずはお気軽にご相談ください。
            </p>
            <ContactCTA />
          </section>
        </div>
      </div>
      {/* 👇 追従「戻る」ボタン */}
      <BackToTopButton />
    </main>
  );
}

/** 小さいツールアイコン用のミニコンポーネント */
type ToolIconProps = {
  label: string;
  src: string;
};

function ToolIcon({ label, src }: ToolIconProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden">
        <img src={src} alt={label} className="w-7 h-7 object-contain" />
      </div>
      <span className="leading-tight">{label}</span>
    </div>
  );
}
