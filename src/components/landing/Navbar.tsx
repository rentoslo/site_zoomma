"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import LangSwitcher from "./LangSwitcher";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[80] transition-[background,backdrop-filter,border-color] duration-500 ease-smooth",
        scrolled
          ? "glass-nav border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container-zoomma flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Zoomma — home">
          <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-xl bg-white/[0.06] backdrop-blur ring-1 ring-white/10">
            <span className="absolute inset-0 bg-gradient-electric opacity-30 transition-opacity duration-500 group-hover:opacity-60" />
            <span className="relative font-display text-base font-bold tracking-tight text-white">
              Z
            </span>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            zoomma
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          <a
            href="#metodo"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            {t.nav.method}
          </a>
          <a
            href="#servicos"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            {t.nav.services}
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            {t.nav.faq}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitcher />
          <a
            href="#diagnostico"
            className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:border-electric/40 hover:bg-white/[0.08] sm:inline-flex"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
