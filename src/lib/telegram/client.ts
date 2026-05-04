/**
 * Telegram Bot — Envio de notificações via API do Telegram.
 *
 * Variáveis necessárias no .env.local:
 * - TELEGRAM_BOT_TOKEN   → token do bot (obtido via @BotFather)
 * - TELEGRAM_CHAT_ID     → ID do chat/grupo que receberá as mensagens
 *
 * Para descobrir o chat_id:
 * 1. Envie uma mensagem para o bot
 * 2. Acesse: https://api.telegram.org/bot<TOKEN>/getUpdates
 * 3. Copie o "id" dentro de "chat"
 *
 * Documentação: https://core.telegram.org/bots/api#sendmessage
 */

interface SendTelegramOptions {
  text: string
  chatId?: string
  parseMode?: 'Markdown' | 'HTML' | 'MarkdownV2'
}

export async function sendTelegram({
  text,
  chatId,
  parseMode = 'Markdown',
}: SendTelegramOptions): Promise<void> {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN
    const targetChatId = chatId ?? process.env.TELEGRAM_CHAT_ID

    if (!token || !targetChatId) {
      console.warn('[Telegram] TELEGRAM_BOT_TOKEN ou TELEGRAM_CHAT_ID não configurados')
      return
    }

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: targetChatId,
        text,
        parse_mode: parseMode,
      }),
    })
  } catch (err) {
    console.error('[Telegram] sendTelegram falhou:', err)
  }
}
