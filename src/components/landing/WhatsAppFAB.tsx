"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { LeadInputSchema } from "@/types/lead";
import { cn } from "@/lib/utils";

export default function WhatsAppFAB() {
  const { t, locale } = useI18n();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [errors, setErrors] = useState<{ nome?: string; whatsapp?: string }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (!dialogRef.current) return;
      if (!dialogRef.current.contains(e.target as Node)) {
        // ignore clicks on the FAB toggle itself
        const target = e.target as HTMLElement;
        if (target.closest("[data-fab-toggle]")) return;
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.addEventListener("mousedown", onClick);
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    const parsed = LeadInputSchema.safeParse({
      nome: name,
      whatsapp,
      source: "whatsapp_fab",
      locale,
    });

    if (!parsed.success) {
      const next: typeof errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof typeof errors;
        next[key] = issue.message;
      }
      setErrors(next);
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok || !json.whatsappUrl) throw new Error("api");

      // Redirect to WhatsApp
      window.open(json.whatsappUrl, "_blank", "noopener,noreferrer");
      setStatus("idle");
      setOpen(false);
      setName("");
      setWhatsapp("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* FAB button */}
      <button
        type="button"
        data-fab-toggle
        onClick={() => setOpen((v) => !v)}
        aria-label={t.whatsapp.fab_label}
        aria-expanded={open}
        className="group fixed bottom-5 right-5 z-[90] flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-mint to-[#00B574] shadow-[0_12px_40px_-8px_rgba(1,226,145,0.55)] transition-transform duration-300 ease-smooth hover:scale-105 md:bottom-6 md:right-6 md:size-16"
      >
        <span className="absolute inset-0 animate-pulse-glow rounded-full bg-mint/40 blur-md" aria-hidden />
        <svg className="relative size-7 text-[#0A0A0A] md:size-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.6 14.2c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.1s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.5.1-.1.3-.3.4-.4.1-.1.2-.3.3-.4.1-.2.1-.3 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1.1 3.1 1 3.6 1 .5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.6-.4z" />
          <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.1-1.3c1.5.8 3.2 1.3 4.9 1.3h.1c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3h-.1c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.9-3.1-.2-.3c-.9-1.4-1.3-3-1.3-4.6 0-4.5 3.7-8.2 8.2-8.2s8.3 3.7 8.3 8.2-3.7 8.6-8 8.6z" />
        </svg>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-end p-5 md:items-end md:justify-end md:p-6">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
            aria-hidden
            onClick={() => setOpen(false)}
          />

          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={t.whatsapp.modal_title}
            className={cn(
              "relative mx-auto w-full max-w-sm md:mx-0",
              "glass-strong p-6 md:bottom-24 md:right-6 md:fixed md:p-7",
              "animate-fade-up"
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              <svg className="size-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M4.3 4.3a1 1 0 011.4 0L10 8.6l4.3-4.3a1 1 0 111.4 1.4L11.4 10l4.3 4.3a1 1 0 11-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 01-1.4-1.4L8.6 10 4.3 5.7a1 1 0 010-1.4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <h3 className="font-display text-lg font-semibold text-white">{t.whatsapp.modal_title}</h3>
            <p className="mt-2 text-sm text-white/65">{t.whatsapp.modal_sub}</p>

            <form onSubmit={onSubmit} className="mt-5 space-y-4" noValidate>
              <div>
                <label htmlFor="fab-name" className="label">
                  {t.whatsapp.name}
                </label>
                <Input
                  id="fab-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  hasError={!!errors.nome}
                  autoComplete="name"
                  required
                />
              </div>
              <div>
                <label htmlFor="fab-wa" className="label">
                  {t.whatsapp.whatsapp}
                </label>
                <Input
                  id="fab-wa"
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  hasError={!!errors.whatsapp}
                  placeholder="+1 (___) ___-____"
                  autoComplete="tel"
                  required
                />
              </div>

              {status === "error" && (
                <p className="rounded-lg border border-alert/30 bg-alert/10 px-3 py-2 text-xs text-alert">
                  {t.finalCta.form.error_msg}
                </p>
              )}

              <Button type="submit" className="w-full" disabled={status === "submitting"}>
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.6 14.2c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.1s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.5.1-.1.3-.3.4-.4.1-.1.2-.3.3-.4.1-.2.1-.3 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1.1 3.1 1 3.6 1 .5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.6-.4z" />
                </svg>
                {status === "submitting" ? t.finalCta.form.submitting : t.whatsapp.submit}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
