import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";
import { sendTelegram } from "@/lib/telegram/client";
import { LeadInputSchema } from "@/types/lead";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999999999";

function buildWhatsAppUrl(name: string, locale: string, source: string) {
  const greeting =
    locale === "en"
      ? `Hi! I'm ${name}, came from the Zoomma website.`
      : locale === "es"
        ? `¡Hola! Soy ${name}, vengo del sitio de Zoomma.`
        : `Olá! Sou ${name}, vim pelo site da Zoomma.`;
  const tag = source === "whatsapp_fab" ? "[FAB]" : "[FORM]";
  const text = encodeURIComponent(`${greeting} ${tag}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = LeadInputSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "validation", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const supabase = createServiceClient();

    const ua = req.headers.get("user-agent") ?? undefined;
    const ipHeader = req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip") ?? undefined;
    const ip = ipHeader?.split(",")[0]?.trim();

    const { data: row, error } = await supabase
      .from("leads")
      .insert({
        nome: data.nome,
        whatsapp: data.whatsapp,
        instagram: data.instagram || null,
        email: data.email || null,
        maior_desafio: data.maior_desafio || null,
        source: data.source,
        locale: data.locale,
        utm_source: data.utm_source ?? null,
        utm_medium: data.utm_medium ?? null,
        utm_campaign: data.utm_campaign ?? null,
        referrer: data.referrer ?? null,
        user_agent: ua ?? null,
        ip: ip ?? null,
      })
      .select("id, created_at")
      .single();

    if (error) {
      console.error("[/api/leads] supabase insert failed", error);
      return NextResponse.json({ ok: false, error: "db" }, { status: 500 });
    }

    // Fire-and-forget telegram notification (don't block the response)
    void sendTelegram({
      text:
        `*Novo lead Zoomma* \\[${data.source}]\n` +
        `*Nome:* ${data.nome}\n` +
        `*WhatsApp:* ${data.whatsapp}\n` +
        (data.instagram ? `*Instagram:* ${data.instagram}\n` : "") +
        (data.email ? `*Email:* ${data.email}\n` : "") +
        (data.maior_desafio ? `*Desafio:* ${data.maior_desafio}\n` : "") +
        `*Idioma:* ${data.locale}`,
    });

    const wa = buildWhatsAppUrl(data.nome, data.locale, data.source);

    return NextResponse.json({ ok: true, id: row.id, whatsappUrl: wa });
  } catch (err) {
    console.error("[/api/leads] unexpected", err);
    return NextResponse.json({ ok: false, error: "unknown" }, { status: 500 });
  }
}
