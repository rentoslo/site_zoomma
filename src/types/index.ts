/**
 * Tipos base do projeto.
 * Adicione aqui as interfaces TypeScript compartilhadas entre
 * páginas, componentes e API routes.
 *
 * Exemplos de tipos comuns:
 * - Lead (dados de um lead capturado)
 * - User (perfil do usuário logado)
 * - ApiResponse<T> (wrapper padrão de resposta de API)
 */

// Wrapper padrão para respostas de API
export type ApiResponse<T> =
  | { ok: true; data: T }
  | { ok: false; error: string }
