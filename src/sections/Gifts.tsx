import { useState } from "react";
import { SECTION_IDS } from "@/config/site";
import { usePrefs } from "@/hooks/usePrefs";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Please check the bank name: the account numbers start with 1000, which is the Commercial Bank of Ethiopia format.
const BANK_NAME = "Commercial Bank of Ethiopia (CBE)";

// Account holder names stay in English letters, so they match what guests see in their bank app.
const ACCOUNTS = [
  { holder: "Natnael Fitsum", number: "1000481595324" },
  { holder: "Bethel Regassa", number: "1000638455815" },
];

function CopyIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Gifts() {
  const { t } = usePrefs();
  const [revealed, setRevealed] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  async function copyNumber(number: string) {
    try {
      await navigator.clipboard.writeText(number);
    } catch {
      // Fallback for browsers without the Clipboard API (or non-secure contexts).
      const textarea = document.createElement("textarea");
      textarea.value = number;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopiedNumber(number);
    window.setTimeout(() => setCopiedNumber((current) => (current === number ? null : current)), 2000);
  }

  return (
    <Section id={SECTION_IDS.gifts}>
      <SectionHeading
        eyebrow="With gratitude"
        title="Gift Registry"
        subtitle="Your presence is the greatest gift of all. But should you wish to give, you are welcome to send a gift."
      />

      {!revealed ? (
        <div className="flex justify-center">
          <Button size="lg" onClick={() => setRevealed(true)} className="uppercase tracking-wider">
            {t("Send a Gift")}
          </Button>
        </div>
      ) : (
        <>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 sm:gap-6">
            {ACCOUNTS.map(({ holder, number }) => {
              const copied = copiedNumber === number;
              return (
                <Reveal key={number} className="rounded-2xl bg-card p-5 text-center shadow-soft sm:rounded-3xl sm:p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{t(BANK_NAME)}</span>
                  <h3 className="mt-2 text-xl font-medium text-primary sm:text-2xl">{holder}</h3>

                  <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t("Account number")}
                  </p>

                  <div className="mt-1 flex items-center justify-center gap-2">
                    <p className="select-all break-all font-mono text-lg tracking-wider text-foreground sm:text-xl">
                      {number}
                    </p>
                    <button
                      type="button"
                      onClick={() => copyNumber(number)}
                      aria-label={`${t("Copy account number")} — ${holder}`}
                      title={t("Copy account number")}
                      className="grid size-9 shrink-0 place-items-center rounded-full text-primary transition-colors hover:bg-accent/15 active:bg-accent/25"
                    >
                      {copied ? <CheckIcon className="size-5 text-accent" /> : <CopyIcon className="size-5" />}
                    </button>
                  </div>

                  {/* Fixed height so the card does not jump when the note appears */}
                  <p className="mt-1 h-4 text-xs font-medium text-accent" role="status">
                    {copied ? t("Copied!") : ""}
                  </p>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={() => setRevealed(false)}
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              {t("Hide details")}
            </button>
          </div>
        </>
      )}
    </Section>
  );
}