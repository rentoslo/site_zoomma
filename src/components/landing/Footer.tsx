"use client";

import { useI18n } from "@/lib/i18n/context";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] py-16">
      <div className="container-zoomma">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-xl bg-white/[0.06] ring-1 ring-white/10">
                <span className="absolute inset-0 bg-gradient-electric opacity-30" />
                <span className="relative font-display text-base font-bold tracking-tight text-white">
                  Z
                </span>
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-white">
                zoomma
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/55">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">
              {t.footer.contact}
            </p>
            <a
              href="mailto:zoomma.ag@gmail.com"
              className="font-display text-base text-white transition hover:text-electric"
            >
              zoomma.ag@gmail.com
            </a>
            <a
              href="https://www.zoomma.com.br"
              className="text-sm text-white/55 transition hover:text-white"
            >
              www.zoomma.com.br
            </a>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <p className="mt-8 text-xs text-white/35">
          © {year} Zoomma — {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
