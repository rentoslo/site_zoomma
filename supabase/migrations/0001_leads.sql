-- =====================================================
-- ZOOMMA — Lead capture table (idempotent)
-- Run in Supabase SQL Editor (or via CLI: supabase db push)
-- =====================================================
-- Safe to re-run: it adds any missing columns to an existing
-- `leads` table without dropping data.

create extension if not exists "pgcrypto";

-- 1. Create table if it doesn't exist (minimal shape)
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid()
);

-- 2. Add columns if they don't exist (handles pre-existing tables)
alter table public.leads add column if not exists nome           text;
alter table public.leads add column if not exists whatsapp       text;
alter table public.leads add column if not exists instagram      text;
alter table public.leads add column if not exists email          text;
alter table public.leads add column if not exists maior_desafio  text;
alter table public.leads add column if not exists source         text not null default 'form';
alter table public.leads add column if not exists locale         text not null default 'pt-BR';
alter table public.leads add column if not exists user_agent     text;
alter table public.leads add column if not exists referrer       text;
alter table public.leads add column if not exists utm_source     text;
alter table public.leads add column if not exists utm_medium     text;
alter table public.leads add column if not exists utm_campaign   text;
alter table public.leads add column if not exists ip             inet;
alter table public.leads add column if not exists created_at     timestamptz not null default now();

-- 3. Enforce NOT NULL on the required fields (only after the columns exist).
--    These are guarded so they don't fail if the columns are already constrained.
do $$
begin
  alter table public.leads alter column nome     set not null;
exception when others then null;
end$$;

do $$
begin
  alter table public.leads alter column whatsapp set not null;
exception when others then null;
end$$;

-- 4. Add CHECK constraints (drop-and-recreate to stay idempotent)
alter table public.leads drop constraint if exists leads_source_check;
alter table public.leads add  constraint leads_source_check
  check (source in ('form', 'whatsapp_fab'));

alter table public.leads drop constraint if exists leads_locale_check;
alter table public.leads add  constraint leads_locale_check
  check (locale in ('pt-BR', 'es', 'en'));

-- 5. Indexes
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_source_idx     on public.leads (source);

-- =====================================================
-- ROW LEVEL SECURITY
-- =====================================================
alter table public.leads enable row level security;

-- Inserts happen through the API route using SUPABASE_SERVICE_ROLE_KEY.
-- Service role bypasses RLS, so no policy is required for it.
-- No anon/authenticated policy => the table is sealed for the public.
