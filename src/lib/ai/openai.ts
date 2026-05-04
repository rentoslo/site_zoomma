import 'server-only'
import OpenAI from 'openai'

/**
 * Retorna um cliente OpenAI configurado com a API Key do ambiente.
 * Use apenas em API Routes e Server Components.
 *
 * Modelos disponíveis:
 * - gpt-4o               → máxima qualidade multimodal
 * - gpt-4o-mini          → rápido e barato
 * - o1-mini              → raciocínio complexo
 */
export function getOpenAI() {
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY! })
}
