// app/components/ContactCTA.tsx
"use client";

import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function ContactCTA() {
  return (
    <>
      {/* メインのフォームボタン */}
      <div className="flex justify-center">
        <PrimaryButton
          href="https://docs.google.com/forms/d/e/1FAIpQLSctEE4sMSxtNXCfIWX6CAkyMCdgjZHKB2oKolQJLudpPrY5fQ/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-full max-w-[320px]
            !text-[13px] md:!text-[15px]   
            !font-semibold                     
          "
        >
          フォームからお問い合わせ
        </PrimaryButton>
      </div>

      {/* フォームが使えない場合の案内 */}
      <p className="mt-4 text-xs md:text-sm text-slate-700">
        <span className="text-[11px] md:text-xs">
          原則２営業日以内にご返信いたします。
          フォームが開かない場合は</span>

        <span className="inline-block mx-1 align-middle">
          <SecondaryButton
            href="mailto:kubota.eri.mo3@gmail.com"
            className="!px-3 !py-1 !text-[11px] !rounded-xl"
          >
            メール
          </SecondaryButton>
        </span>

        <span className="text-[11px] md:text-xs">
          からもお問い合わせいただけます。
        </span>
      </p>
    </>
  );
}
