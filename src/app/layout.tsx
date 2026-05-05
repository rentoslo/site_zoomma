import type { Metadata, Viewport } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zoomma.com.br"),
  title: "Zoomma | Marketing Estratégico para Negócios da Beleza — EUA",
  description:
    "Consultoria estratégica de marketing para salões, clínicas e harmonização — brasileiros e hispanos nos EUA. Estratégia, marketing e gestão comercial em um único parceiro.",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/?lang=pt-BR",
      "es": "/?lang=es",
      "en": "/?lang=en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Zoomma",
    title: "Zoomma | Marketing Estratégico para Negócios da Beleza",
    description:
      "Estratégia, marketing e gestão comercial para negócios da beleza nos EUA. Não somos agência — somos sua sócia de crescimento.",
    url: "https://www.zoomma.com.br",
    locale: "pt_BR",
    alternateLocale: ["es_ES", "en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoomma | Marketing Estratégico para Negócios da Beleza",
    description:
      "Estratégia, marketing e gestão comercial em um único parceiro estratégico.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${jakarta.variable}`}>
      <body className="bg-page font-body antialiased">
        {children}
      </body>
    </html>
  );
}
