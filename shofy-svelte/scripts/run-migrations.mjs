// Tiny migration runner for self-hosted Postgres / Supabase setups where
// the upstream `supabase` CLI rejects connections without TLS.
// Usage: DATABASE_URL=... node scripts/run-migrations.mjs [migration-file ...]

import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import pg from 'pg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const migrationsDir = resolve(__dirname, '..', 'supabase', 'migrations');

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
	console.error('Missing DATABASE_URL env variable');
	process.exit(1);
}

const explicitFiles = process.argv.slice(2);

async function listMigrations() {
	if (explicitFiles.length > 0) {
		return explicitFiles.map((f) =>
			f.includes('/') ? resolve(f) : join(migrationsDir, f)
		);
	}
	const all = await readdir(migrationsDir);
	return all
		.filter((f) => f.endsWith('.sql'))
		.sort()
		.map((f) => join(migrationsDir, f));
}

const client = new pg.Client({ connectionString: databaseUrl, ssl: false });
await client.connect();

try {
	await client.query(`
		create table if not exists public.schema_migrations (
			version text primary key,
			applied_at timestamptz not null default now()
		);
	`);

	const files = await listMigrations();
	for (const file of files) {
		const version = file.split('/').pop().replace(/\.sql$/, '');
		const { rows } = await client.query(
			'select 1 from public.schema_migrations where version = $1',
			[version]
		);
		if (rows.length > 0) {
			console.log(`• skip   ${version} (already applied)`);
			continue;
		}
		const sql = await readFile(file, 'utf8');
		console.log(`→ apply  ${version}`);
		await client.query('begin');
		try {
			await client.query(sql);
			await client.query(
				'insert into public.schema_migrations (version) values ($1)',
				[version]
			);
			await client.query('commit');
			console.log(`✓ done   ${version}`);
		} catch (err) {
			await client.query('rollback');
			console.error(`✗ failed ${version}:`, err.message);
			throw err;
		}
	}
	console.log('All migrations applied.');
} finally {
	await client.end();
}
