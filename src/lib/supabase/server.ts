import 'server-only'
import { createClient } from '@supabase/supabase-js'

/**
 * Cliente Supabase com Service Role — bypassa as RLS policies.
 * ⚠️  Use APENAS em API Routes e Server Components que escrevem dados.
 * ⚠️  NUNCA importe em Client Components.
 */
export function createServiceClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  )
}
