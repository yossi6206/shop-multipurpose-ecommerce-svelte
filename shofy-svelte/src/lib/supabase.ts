import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public';

const PUBLIC_SUPABASE_URL = env.PUBLIC_SUPABASE_URL ?? '';
const PUBLIC_SUPABASE_ANON_KEY = env.PUBLIC_SUPABASE_ANON_KEY ?? '';

if (!PUBLIC_SUPABASE_URL) {
	throw new Error('Missing env variable: PUBLIC_SUPABASE_URL');
}

if (!PUBLIC_SUPABASE_ANON_KEY) {
	throw new Error('Missing env variable: PUBLIC_SUPABASE_ANON_KEY');
}

export const supabase: SupabaseClient = createClient(
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY,
	{
		auth: {
			persistSession: true,
			autoRefreshToken: true,
			detectSessionInUrl: true
		}
	}
);

export async function pingSupabase(): Promise<{
	ok: boolean;
	url: string;
	status?: number;
	error?: string;
}> {
	try {
		const res = await fetch(`${PUBLIC_SUPABASE_URL}/auth/v1/health`, {
			headers: {
				apikey: PUBLIC_SUPABASE_ANON_KEY,
				Authorization: `Bearer ${PUBLIC_SUPABASE_ANON_KEY}`
			}
		});
		return { ok: res.ok, url: PUBLIC_SUPABASE_URL, status: res.status };
	} catch (err) {
		return {
			ok: false,
			url: PUBLIC_SUPABASE_URL,
			error: err instanceof Error ? err.message : String(err)
		};
	}
}
