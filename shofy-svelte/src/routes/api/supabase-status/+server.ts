import { json } from '@sveltejs/kit';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { supabase } from '$lib/supabase';

export async function GET() {
	const result: Record<string, unknown> = {
		url: PUBLIC_SUPABASE_URL,
		anonKeyPresent: Boolean(PUBLIC_SUPABASE_ANON_KEY),
		clientCreated: Boolean(supabase),
		checks: {} as Record<string, unknown>
	};

	try {
		const healthRes = await fetch(`${PUBLIC_SUPABASE_URL}/auth/v1/health`, {
			headers: {
				apikey: PUBLIC_SUPABASE_ANON_KEY,
				Authorization: `Bearer ${PUBLIC_SUPABASE_ANON_KEY}`
			}
		});
		const healthBody = await healthRes.text();
		(result.checks as Record<string, unknown>).authHealth = {
			ok: healthRes.ok,
			status: healthRes.status,
			body: healthBody.slice(0, 500)
		};
	} catch (err) {
		(result.checks as Record<string, unknown>).authHealth = {
			ok: false,
			error: err instanceof Error ? err.message : String(err)
		};
	}

	try {
		const restRes = await fetch(`${PUBLIC_SUPABASE_URL}/rest/v1/`, {
			headers: {
				apikey: PUBLIC_SUPABASE_ANON_KEY,
				Authorization: `Bearer ${PUBLIC_SUPABASE_ANON_KEY}`
			}
		});
		(result.checks as Record<string, unknown>).restRoot = {
			ok: restRes.ok,
			status: restRes.status
		};
	} catch (err) {
		(result.checks as Record<string, unknown>).restRoot = {
			ok: false,
			error: err instanceof Error ? err.message : String(err)
		};
	}

	try {
		const { data, error } = await supabase.auth.getSession();
		(result.checks as Record<string, unknown>).authSession = {
			ok: !error,
			hasSession: Boolean(data?.session),
			error: error?.message
		};
	} catch (err) {
		(result.checks as Record<string, unknown>).authSession = {
			ok: false,
			error: err instanceof Error ? err.message : String(err)
		};
	}

	return json(result);
}
