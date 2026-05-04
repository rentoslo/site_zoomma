# 🚀 Zoomma Next.js Template

Template base para projetos Next.js da agência Zoomma. Inclui todas as conexões e integrações já configuradas e prontas para uso.

---

## ⚡ Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 14 (App Router) |
| UI | Tailwind CSS + shadcn/ui |
| Banco de dados | Supabase (Postgres + Auth) |
| IA | Anthropic Claude + OpenAI |
| Scraping | Apify |
| Email | Resend |
| Notificações | Telegram Bot |
| Deploy | Vercel |

---

## 🛠️ Como usar este template

### 1. Clone o repositório
```bash
# Via GitHub CLI (recomendado)
gh repo create meu-novo-projeto --template rentoslo/zoomma-nextjs-template --clone

# Ou manualmente
git clone https://github.com/rentoslo/zoomma-nextjs-template.git meu-novo-projeto
cd meu-novo-projeto
```

### 2. Configure as variáveis de ambiente
```bash
# Copie o template
cp .env.example .env.local

# Edite com suas chaves reais
# (veja instruções em cada variável do .env.example)
```

### 3. Instale as dependências
```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento
```bash
npm run dev
# Acesse http://localhost:3000
```

---

## 📁 Estrutura de arquivos

```
src/
├── app/                    → Páginas e API Routes
│   ├── layout.tsx          → Layout raiz com fontes configuradas
│   ├── page.tsx            → Página inicial (substitua pelo seu conteúdo)
│   └── globals.css         → Design tokens e estilos globais
├── components/             → Componentes reutilizáveis
│   └── ui/                 → shadcn/ui (gerado com: npx shadcn add <component>)
├── lib/                    → Clientes e utilitários
│   ├── supabase/
│   │   ├── client.ts       → Supabase para browser (ANON KEY)
│   │   └── server.ts       → Supabase para servidor (SERVICE ROLE)
│   ├── ai/
│   │   ├── anthropic.ts    → Cliente Anthropic Claude
│   │   └── openai.ts       → Cliente OpenAI GPT (opcional)
│   ├── apify/
│   │   └── client.ts       → Cliente genérico Apify (scraping)
│   ├── resend/
│   │   └── client.ts       → Envio de emails via Resend
│   ├── telegram/
│   │   └── client.ts       → Notificações via Telegram Bot
│   └── utils.ts            → Função cn() para Tailwind
└── types/                  → Interfaces TypeScript do projeto
```

---

## 🔌 Como usar os clientes

### Supabase
```typescript
// Em um Server Component ou API Route
import { createServiceClient } from '@/lib/supabase/server'
const supabase = createServiceClient()
const { data } = await supabase.from('tabela').select()

// Em um Client Component
import { createClient } from '@/lib/supabase/client'
const supabase = createClient()
```

### IA (Anthropic Claude)
```typescript
import { getAI } from '@/lib/ai/anthropic'
const ai = getAI()
const response = await ai.messages.create({
  model: 'claude-opus-4-7',
  max_tokens: 1024,
  messages: [{ role: 'user', content: 'Olá!' }],
})
```

### Apify (Scraping)
```typescript
import { runApifyActor } from '@/lib/apify/client'
const results = await runApifyActor('apify~instagram-profile-scraper', {
  usernames: ['zoomma.ag'],
  resultsLimit: 12,
})
```

### Resend (Email)
```typescript
import { sendEmail } from '@/lib/resend/client'
await sendEmail({
  subject: 'Novo lead recebido!',
  html: '<h1>Olá!</h1><p>Um novo lead chegou.</p>',
})
```

### Telegram (Notificações)
```typescript
import { sendTelegram } from '@/lib/telegram/client'
await sendTelegram({
  text: '🔔 *Novo evento!*\n\nDescrição do evento aqui.',
})
```

---

## 🎨 Design System

| Token | Valor | Uso |
|---|---|---|
| `brand` / `#C9A050` | Gold | Cor primária, destaques |
| `dark` / `#1C1C1E` | Charcoal | Fundo escuro |
| `light` / `#FAFAF8` | Off-white | Fundo claro |
| `danger` / `#DC2626` | Vermelho | Erros |
| `success` / `#22C55E` | Verde | Sucesso |
| `warning` / `#F59E0B` | Âmbar | Avisos |
| `font-manrope` | Manrope | Headings |
| `font-inter` | Inter | Body |

### Adicionar componentes shadcn/ui
```bash
npx shadcn add button
npx shadcn add input
npx shadcn add card
# etc.
```

---

## 🚀 Deploy no Vercel

1. Importe o repositório em [vercel.com/new](https://vercel.com/new)
2. Configure as variáveis de ambiente (copie do `.env.example`)
3. Deploy automático a cada `git push` no branch `main`

---

## 🔑 Onde obter as credenciais

| Serviço | URL |
|---|---|
| Supabase | [supabase.com/dashboard](https://supabase.com/dashboard) |
| Anthropic | [console.anthropic.com](https://console.anthropic.com/settings/keys) |
| OpenAI | [platform.openai.com](https://platform.openai.com/api-keys) |
| Apify | [console.apify.com](https://console.apify.com/account/integrations) |
| Resend | [resend.com](https://resend.com/api-keys) |
| Telegram Bot | [@BotFather no Telegram](https://t.me/BotFather) |
| Google Cloud | [console.cloud.google.com](https://console.cloud.google.com/iam-admin/serviceaccounts) |

---

*Template mantido pela [Zoomma](https://zoomma.com.br) — Agência de Marketing Digital*
