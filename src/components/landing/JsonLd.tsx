"use client";

import { useI18n } from "@/lib/i18n/context";

export default function JsonLd() {
  const { t, locale } = useI18n();

  const inLang = locale === "pt-BR" ? "pt-BR" : locale === "es" ? "es-ES" : "en-US";

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zoomma",
    url: "https://www.zoomma.com.br",
    logo: "https://www.zoomma.com.br/logo.png",
    description: t.hero.aeo,
    inLanguage: inLang,
    sameAs: [],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Zoomma — Strategic Marketing Consulting",
    description: t.hero.aeo,
    url: "https://www.zoomma.com.br",
    inLanguage: inLang,
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: t.solution.pillars.map((p) => p.title),
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: t.method.h2,
    description: t.method.sub,
    inLanguage: inLang,
    step: t.method.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.desc,
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: inLang,
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
