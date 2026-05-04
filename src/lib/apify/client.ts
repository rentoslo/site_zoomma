/**
 * Apify — Cliente genérico para scraping via REST API.
 *
 * Actors mais usados no ecossistema Zoomma:
 * - apify~instagram-profile-scraper  → perfis do Instagram
 * - apify~google-maps-scraper        → empresas no Google Maps
 * - apify~website-content-crawler    → crawling de sites
 *
 * Documentação: https://docs.apify.com/api/v2
 */

const APIFY_BASE = 'https://api.apify.com/v2/acts'

/**
 * Executa um Actor do Apify de forma síncrona e retorna os resultados.
 * @param actor  ex: "apify~instagram-profile-scraper"
 * @param input  objeto com os parâmetros do actor
 * @param timeoutSecs tempo máximo de espera (padrão: 60s)
 */
export async function runApifyActor<T = unknown>(
  actor: string,
  input: Record<string, unknown>,
  timeoutSecs = 60
): Promise<T[]> {
  const token = process.env.APIFY_API_TOKEN
  if (!token) throw new Error('APIFY_API_TOKEN não está configurado')

  const url = `${APIFY_BASE}/${actor}/run-sync-get-dataset-items?token=${token}&timeout=${timeoutSecs}`

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
    signal: AbortSignal.timeout((timeoutSecs + 5) * 1000),
  })

  if (!response.ok) {
    throw new Error(`Apify retornou HTTP ${response.status} para o actor "${actor}"`)
  }

  const data = await response.json()

  if (!Array.isArray(data)) {
    throw new Error('Resposta do Apify não é um array válido')
  }

  return data as T[]
}
