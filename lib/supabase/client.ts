import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseKey = supabasePublishableKey ?? supabaseAnonKey;

let browserClient: SupabaseClient | null = null;

export function getSupabaseEnvError(): string | null {
  const missing: string[] = [];

  if (!supabaseUrl) {
    missing.push('NEXT_PUBLIC_SUPABASE_URL');
  }

  if (!supabaseKey) {
    missing.push('NEXT_PUBLIC_SUPABASE_ANON_KEY or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY');
  }

  if (missing.length === 0) {
    return null;
  }

  return `Supabase 환경변수가 없습니다 (${missing.join(', ')}). .env.local에 추가하고 dev 서버를 재시작해 주세요.`;
}

export function getSupabaseBrowserClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  if (!browserClient) {
    browserClient = createClient(supabaseUrl, supabaseKey);
  }

  return browserClient;
}
