import 'server-only'
import Anthropic from '@anthropic-ai/sdk'

/**
 * Retorna um cliente Anthropic configurado com a API Key do ambiente.
 * Use apenas em API Routes e Server Components.
 *
 * Modelos disponíveis:
 * - claude-opus-4-7       → máxima qualidade (mais caro)
 * - claude-sonnet-4-5     → equilíbrio custo/qualidade
 * - claude-haiku-3-5      → rápido e barato, ideal para tarefas simples
 */
export function getAI() {
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })
}
