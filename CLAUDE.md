# site_zoomma — Contexto para Claude Code

## Stack
- **Frontend/Backend:** Next.js 14 (App Router)
- **UI:** Tailwind CSS + shadcn/ui
- **Banco de dados:** Supabase (Postgres + Auth)
- **IA principal:** Anthropic Claude (`@anthropic-ai/sdk`) — cliente em `src/lib/ai/anthropic.ts`
- **IA alternativa:** OpenAI (`openai`) — cliente em `src/lib/ai/openai.ts`
- **Scraping:** Apify — cliente genérico em `src/lib/apify/client.ts`
- **Email:** Resend — cliente em `src/lib/resend/client.ts`
- **Notificações:** Telegram Bot — cliente em `src/lib/telegram/client.ts`
- **Deploy:** Vercel

## Variáveis de ambiente necessárias
Todas estão em `.env.local` (local) e no Vercel (produção):
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ANTHROPIC_API_KEY`
- `OPENAI_API_KEY` (opcional)
- `APIFY_API_TOKEN`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_TO_EMAIL`
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `GOOGLE_SERVICE_ACCOUNT_JSON` (se usar Vertex AI / Gemini)
- `GOOGLE_CLOUD_PROJECT` (se usar Vertex AI / Gemini)
- `GOOGLE_CLOUD_LOCATION` (se usar Vertex AI / Gemini)

## Modelos de IA disponíveis
- `claude-opus-4-7`      → máxima qualidade Anthropic
- `claude-sonnet-4-5`    → equilíbrio custo/qualidade
- `gpt-4o`               → OpenAI máxima qualidade
- `gpt-4o-mini`          → OpenAI rápido e econômico

## Arquitetura de pastas
```
src/
├── app/           → páginas e API routes (Next.js App Router)
├── components/    → componentes React reutilizáveis
│   └── ui/        → shadcn/ui (gerado automaticamente)
├── lib/           → clientes e utilitários
│   ├── supabase/  → client.ts (browser) + server.ts (service role)
│   ├── ai/        → anthropic.ts + openai.ts
│   ├── apify/     → client.ts (scraping genérico)
│   ├── resend/    → client.ts (envio de emails)
│   ├── telegram/  → client.ts (notificações)
│   └── utils.ts   → função cn() para Tailwind
└── types/         → interfaces TypeScript do projeto
```

## Paleta visual base
- Brand/Destaque: `#C9A050` (gold)
- Fundo escuro: `#1C1C1E` (charcoal)
- Fundo claro: `#FAFAF8` (off-white)
- Fontes: Manrope (display) + Inter (body)

## Workflow de deploy
```bash
git add <arquivos>
git commit -m "feat: descrição da mudança"
git push  # Vercel faz deploy automático do branch main
```
