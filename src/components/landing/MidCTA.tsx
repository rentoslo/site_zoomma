"use client";

import { useI18n } from "@/lib/i18n/context";
import Button from "@/components/ui/Button";
import { useReveal } from "@/lib/animations/hooks";

export default function MidCTA() {
  const { t } = useI18n();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative py-24">
      <div className="container-zoomma">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-electric/[0.10] via-white/[0.02] to-magenta/[0.08] p-10 text-center md:p-16">
          <div className="orb orb-electric absolute -left-20 -top-20 size-[320px] opacity-50" />
          <div className="orb orb-magenta absolute -right-16 -bottom-16 size-[260px] opacity-40" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="font-display text-display-md font-semibold leading-tight text-white">
              {t.midCta.h2}
            </h2>
            <p className="mt-5 text-lg text-white/70">{t.midCta.sub}</p>
            <div className="mt-10 flex justify-center">
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t.midCta.cta}
                <svg className="size-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M10.7 4.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4L13.6 11H4a1 1 0 110-2h9.6l-2.9-2.9a1 1 0 010-1.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
