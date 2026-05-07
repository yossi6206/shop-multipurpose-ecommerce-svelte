<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabase';
	import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

	type Status = 'idle' | 'running' | 'ok' | 'fail';

	let urlPresent = Boolean(PUBLIC_SUPABASE_URL);
	let anonKeyPresent = Boolean(PUBLIC_SUPABASE_ANON_KEY);
	let clientCreated = Boolean(supabase);

	let serverStatus: Status = 'idle';
	let serverResult: unknown = null;
	let serverError = '';

	let browserStatus: Status = 'idle';
	let browserSession: unknown = null;
	let browserError = '';

	async function runServerCheck() {
		serverStatus = 'running';
		serverError = '';
		try {
			const res = await fetch('/api/supabase-status');
			const body = await res.json();
			serverResult = body;
			const allOk =
				res.ok &&
				body?.checks?.authHealth?.ok === true &&
				body?.checks?.authSession?.ok === true;
			serverStatus = allOk ? 'ok' : 'fail';
		} catch (err) {
			serverError = err instanceof Error ? err.message : String(err);
			serverStatus = 'fail';
		}
	}

	async function runBrowserCheck() {
		browserStatus = 'running';
		browserError = '';
		try {
			const { data, error } = await supabase.auth.getSession();
			if (error) throw error;
			browserSession = data;
			browserStatus = 'ok';
		} catch (err) {
			browserError = err instanceof Error ? err.message : String(err);
			browserStatus = 'fail';
		}
	}

	onMount(() => {
		runServerCheck();
		runBrowserCheck();
	});
</script>

<svelte:head>
	<title>Supabase Connection Test</title>
</svelte:head>

<section class="supabase-test-area pt-100 pb-100" dir="rtl">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-xl-9">
				<div class="supabase-test-wrapper p-4 rounded shadow-sm" style="background:#fff;">
					<h2 class="mb-2">בדיקת חיבור ל‑Supabase</h2>
					<p class="text-muted mb-4">
						מסך זה בודק שהפרויקט מחובר כראוי ל‑Supabase: משתני הסביבה נטענו, הלקוח נוצר, ושני
						בדיקות (שרת + דפדפן) מצליחות.
					</p>

					<h5 class="mt-4">משתני סביבה</h5>
					<table class="table table-sm">
						<tbody>
							<tr>
								<th style="width:280px;">PUBLIC_SUPABASE_URL</th>
								<td>
									{#if urlPresent}
										<code>{PUBLIC_SUPABASE_URL}</code>
									{:else}
										<span class="text-danger">חסר</span>
									{/if}
								</td>
							</tr>
							<tr>
								<th>PUBLIC_SUPABASE_ANON_KEY</th>
								<td>
									{#if anonKeyPresent}
										<span class="text-success">קיים ({PUBLIC_SUPABASE_ANON_KEY.length} תווים)</span>
									{:else}
										<span class="text-danger">חסר</span>
									{/if}
								</td>
							</tr>
							<tr>
								<th>נוצר supabase client</th>
								<td>
									{#if clientCreated}
										<span class="text-success">כן</span>
									{:else}
										<span class="text-danger">לא</span>
									{/if}
								</td>
							</tr>
						</tbody>
					</table>

					<h5 class="mt-4">בדיקת שרת (SvelteKit endpoint)</h5>
					<p>
						סטטוס:
						{#if serverStatus === 'idle'}
							<span class="badge bg-secondary">לא רץ</span>
						{:else if serverStatus === 'running'}
							<span class="badge bg-warning text-dark">בודק…</span>
						{:else if serverStatus === 'ok'}
							<span class="badge bg-success">חיבור תקין</span>
						{:else}
							<span class="badge bg-danger">נכשל</span>
						{/if}
						<button class="btn btn-sm btn-outline-primary ms-2" onclick={runServerCheck}>
							הרץ שוב
						</button>
					</p>
					{#if serverError}
						<div class="alert alert-danger">{serverError}</div>
					{/if}
					{#if serverResult}
						<pre class="bg-light p-3 rounded" style="max-height:280px;overflow:auto;direction:ltr;text-align:left;">{JSON.stringify(
								serverResult,
								null,
								2
							)}</pre>
					{/if}

					<h5 class="mt-4">בדיקת דפדפן (Supabase JS client)</h5>
					<p>
						סטטוס:
						{#if browserStatus === 'idle'}
							<span class="badge bg-secondary">לא רץ</span>
						{:else if browserStatus === 'running'}
							<span class="badge bg-warning text-dark">בודק…</span>
						{:else if browserStatus === 'ok'}
							<span class="badge bg-success">תקין</span>
						{:else}
							<span class="badge bg-danger">נכשל</span>
						{/if}
						<button class="btn btn-sm btn-outline-primary ms-2" onclick={runBrowserCheck}>
							הרץ שוב
						</button>
					</p>
					{#if browserError}
						<div class="alert alert-danger">{browserError}</div>
					{/if}
					{#if browserSession}
						<pre class="bg-light p-3 rounded" style="max-height:200px;overflow:auto;direction:ltr;text-align:left;">{JSON.stringify(
								browserSession,
								null,
								2
							)}</pre>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>
