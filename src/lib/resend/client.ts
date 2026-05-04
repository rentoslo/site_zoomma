import { Resend } from 'resend'

/**
 * Envia um email via Resend.
 *
 * Variáveis necessárias no .env.local:
 * - RESEND_API_KEY        → chave da API
 * - RESEND_FROM_EMAIL     → remetente (ex: noreply@seudominio.com.br)
 * - RESEND_TO_EMAIL       → destinatário padrão (notificações internas)
 *
 * Documentação: https://resend.com/docs/api-reference/emails/send-email
 */

interface SendEmailOptions {
  to?: string | string[]
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: SendEmailOptions): Promise<void> {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: to ?? [process.env.RESEND_TO_EMAIL!],
      subject,
      html,
    })
  } catch (err) {
    console.error('[Resend] sendEmail falhou:', err)
  }
}
