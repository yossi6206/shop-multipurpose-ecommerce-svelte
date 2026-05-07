// One-time seeder: takes the static `src/data/product-data.ts` array and
// upserts every product into the `public.products` table on the configured
// Supabase project. Uses the SUPABASE_SERVICE_ROLE_KEY env variable so it can
// bypass RLS. Run with:
//
//   PUBLIC_SUPABASE_URL=https://api.yositsupport.co.il \
//   SUPABASE_SERVICE_ROLE_KEY=... \
//   node scripts/seed-static-products.mjs
//
// Existing rows are updated (idempotent).

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const tsPath = resolve(__dirname, '..', 'src', 'data', 'product-data.ts');

const SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL) {
	console.error('Missing PUBLIC_SUPABASE_URL env');
	process.exit(1);
}
if (!SERVICE_ROLE_KEY) {
	console.error('Missing SUPABASE_SERVICE_ROLE_KEY env');
	process.exit(1);
}

// Strip the few TypeScript-only bits so we can `import()` the file as JS.
const tsCode = readFileSync(tsPath, 'utf8');
const jsCode = tsCode
	.replace(/^\s*import[^\n]+;?\s*$/gm, '')
	.replace(/:\s*IProduct\[\]\s*=/, '=')
	.replace(/export default product_data;?/g, 'export { product_data };');

const tmpDir = resolve(tmpdir(), 'shofy-seed');
mkdirSync(tmpDir, { recursive: true });
const tmpFile = resolve(tmpDir, 'product-data.mjs');
writeFileSync(tmpFile, jsCode);

const { product_data } = await import(pathToFileURL(tmpFile).href);
console.log(`Loaded ${product_data.length} products from product-data.ts`);

function toRow(p) {
	return {
		id: p.id,
		sku: p.sku ?? '',
		img: p.img ?? '',
		title: p.title ?? '',
		slug: p.slug ?? '',
		unit: p.unit ?? null,
		image_urls: p.imageURLs ?? [],
		parent: p.parent ?? null,
		children: p.children ?? null,
		price: p.price ?? 0,
		discount: p.discount ?? 0,
		quantity: p.quantity ?? 0,
		brand: p.brand ?? null,
		category: p.category ?? null,
		status: p.status ?? 'in-stock',
		reviews: p.reviews ?? [],
		product_type: p.productType ?? null,
		description: p.description ?? null,
		additional_information: p.additionalInformation ?? [],
		featured: Boolean(p.featured),
		sell_count: p.sellCount ?? 0,
		offer_date: p.offerDate ?? null,
		tags: p.tags ?? [],
		video_id: p.videoId ?? null,
		sizes: p.sizes ?? []
	};
}

const rows = product_data.map(toRow);

// Batch upserts to keep request bodies small.
const BATCH = 10;
let inserted = 0;
for (let i = 0; i < rows.length; i += BATCH) {
	const chunk = rows.slice(i, i + BATCH);
	const res = await fetch(`${SUPABASE_URL}/rest/v1/products?on_conflict=id`, {
		method: 'POST',
		headers: {
			apikey: SERVICE_ROLE_KEY,
			Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
			'Content-Type': 'application/json',
			Prefer: 'resolution=merge-duplicates,return=minimal'
		},
		body: JSON.stringify(chunk)
	});
	if (!res.ok) {
		const text = await res.text();
		console.error(`Batch ${i / BATCH + 1} failed (${res.status}): ${text}`);
		process.exit(1);
	}
	inserted += chunk.length;
	console.log(`✓ upserted ${inserted}/${rows.length}`);
}

console.log(`\nDone. ${inserted} products upserted into public.products`);
