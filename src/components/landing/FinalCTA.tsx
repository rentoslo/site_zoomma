"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { useReveal } from "@/lib/animations/hooks";
import { LeadInputSchema } from "@/types/lead";

type FormState = {
  nome: string;
  whatsapp: string;
  instagram: string;
  email: string;
  maior_desafio: string;
};

const initial: FormState = {
  nome: "",
  whatsapp: "",
  instagram: "",
  email: "",
  maior_desafio: "",
};

export default function FinalCTA() {
  const { t, locale } = useI18n();
  const ref = useReveal<HTMLElement>();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    if (!form.instagram.trim()) {
      setErrors({ instagram: "required" });
      setStatus("idle");
      return;
    }

    const parsed = LeadInputSchema.safeParse({ ...form, source: "form", locale });
    if (!parsed.success) {
      const flat: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        flat[k] = issue.message;
      }
      setErrors(flat);
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          referrer: typeof document !== "undefined" ? document.referrer : undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error("api");
      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section ref={ref} id="diagnostico" className="section relative overflow-hidden">
      <div className="orb orb-electric absolute -right-32 top-20 size-[480px] opacity-50" />
      <div className="orb orb-magenta absolute -left-40 bottom-0 size-[420px] opacity-40" />

      <div className="container-zoomma relative z-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="reveal">
            <Eyebrow>{t.finalCta.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-display text-display-lg font-bold text-white">
              <span className="gradient-text">{t.finalCta.h2}</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/72">{t.finalCta.sub}</p>

            <ul className="mt-10 space-y-4">
              {[t.method.steps[0], t.method.steps[2], t.method.steps[4]].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="mt-0.5 flex size-7 items-center justify-center rounded-full border border-electric/30 bg-electric/10 text-xs font-semibold text-electric"
                  >
                    ✓
                  </span>
                  <p className="text-[0.95rem] text-white/72">
                    <strong className="font-semibold text-white">{step.title}</strong> · {step.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <div className="glass-strong relative overflow-hidden p-8 md:p-10">
              <div className="absolute -top-20 right-0 size-48 rounded-full bg-electric/15 blur-3xl" />

              {status === "success" ? (
                <div className="relative z-10 py-8 text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-mint/40 bg-mint/15">
                    <svg className="size-7 text-mint" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4L8.5 12l6.8-6.7a1 1 0 011.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                    {t.finalCta.form.success_title}
                  </h3>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-white/72">
                    {t.finalCta.form.success_msg}
                  </p>
                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-5 py-2.5 text-sm font-medium text-mint transition hover:bg-mint/20"
                  >
                    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M17.6 14.2c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.1s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.5.1-.1.3-.3.4-.4.1-.1.2-.3.3-.4.1-.2.1-.3 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1.1 3.1 1 3.6 1 .5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.6-.4z" />
                      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.1-1.3c1.5.8 3.2 1.3 4.9 1.3h.1c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3h-.1c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.9-3.1-.2-.3c-.9-1.4-1.3-3-1.3-4.6 0-4.5 3.7-8.2 8.2-8.2s8.3 3.7 8.3 8.2-3.7 8.6-8 8.6z" />
                    </svg>
                    {t.finalCta.form.success_whatsapp}
                  </a>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="relative z-10 space-y-5" noValidate>
                  <div>
                    <label htmlFor="nome" className="label">
                      {t.finalCta.form.name} *
                    </label>
                    <Input
                      id="nome"
                      type="text"
                      value={form.nome}
                      onChange={(e) => update("nome", e.target.value)}
                      hasError={!!errors.nome}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="whatsapp" className="label">
                        {t.finalCta.form.whatsapp} *
                      </label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        value={form.whatsapp}
                        onChange={(e) => update("whatsapp", e.target.value)}
                        hasError={!!errors.whatsapp}
                        placeholder="+1 (___) ___-____"
                        autoComplete="tel"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="instagram" className="label">
                        {t.finalCta.form.instagram} *
                      </label>
                      <Input
                        id="instagram"
                        type="text"
                        value={form.instagram}
                        onChange={(e) => update("instagram", e.target.value)}
                        hasError={!!errors.instagram}
                        placeholder="@..."
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="label">
                      {t.finalCta.form.email}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      hasError={!!errors.email}
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="desafio" className="label">
                      {t.finalCta.form.challenge}
                    </label>
                    <Select
                      id="desafio"
                      value={form.maior_desafio}
                      onChange={(e) => update("maior_desafio", e.target.value)}
                    >
                      <option value="">{t.finalCta.form.challenge_placeholder}</option>
                      {t.finalCta.form.challenge_options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </Select>
                  </div>

                  {status === "error" && (
                    <p className="rounded-xl border border-alert/30 bg-alert/10 px-4 py-3 text-sm text-alert">
                      {t.finalCta.form.error_msg}
                    </p>
                  )}

                  <div className="flex items-center justify-center gap-4 text-xs text-white/45">
                    {t.finalCta.form.microtrust.map((item) => (
                      <span key={item} className="flex items-center gap-1.5">
                        <span className="size-1 rounded-full bg-mint/60" aria-hidden />
                        {item}
                      </span>
                    ))}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting"
                      ? t.finalCta.form.submitting
                      : t.finalCta.form.submit}
                    {status !== "submitting" && (
                      <svg className="size-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path
                          fillRule="evenodd"
                          d="M10.7 4.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4L13.6 11H4a1 1 0 110-2h9.6l-2.9-2.9a1 1 0 010-1.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </Button>

                  <p className="text-center text-xs leading-relaxed text-white/40">
                    {t.finalCta.form.consent}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
