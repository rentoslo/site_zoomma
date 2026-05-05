import { z } from "zod";

export const LeadSourceEnum = z.enum(["form", "whatsapp_fab"]);
export const LocaleEnum = z.enum(["pt-BR", "es", "en"]);

export const LeadInputSchema = z.object({
  nome: z.string().trim().min(2, "min").max(120),
  whatsapp: z
    .string()
    .trim()
    .min(8, "min")
    .max(32)
    .regex(/^[+()\d\s-]+$/, "format"),
  instagram: z.string().trim().max(80).optional().or(z.literal("")),
  email: z.string().trim().email("email").optional().or(z.literal("")),
  maior_desafio: z.string().trim().max(500).optional().or(z.literal("")),
  source: LeadSourceEnum.default("form"),
  locale: LocaleEnum.default("pt-BR"),
  utm_source: z.string().max(120).optional(),
  utm_medium: z.string().max(120).optional(),
  utm_campaign: z.string().max(120).optional(),
  referrer: z.string().max(500).optional(),
});

export type LeadInput = z.infer<typeof LeadInputSchema>;

export type LeadRow = LeadInput & {
  id: string;
  created_at: string;
  user_agent?: string;
  ip?: string;
};
