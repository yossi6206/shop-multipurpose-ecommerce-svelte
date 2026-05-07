// Generates a single SQL file with INSERT ... ON CONFLICT for every product
// in src/data/product-data.ts. The file is printed to stdout so it can be
// piped into psql remotely.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const tsPath = resolve(__dirname, '..', 'src', 'data', 'product-data.ts');

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

function sqlEscape(value) {
	if (value === null || value === undefined) return 'NULL';
	if (typeof value === 'number') return String(value);
	if (typeof value === 'boolean') return value ? 'true' : 'false';
	if (typeof value === 'string') return `'${value.replace(/'/g, "''")}'`;
	// arrays / objects → JSONB literal
	const json = JSON.stringify(value);
	return `'${json.replace(/'/g, "''")}'::jsonb`;
}

function sqlTextArray(arr) {
	if (!Array.isArray(arr) || arr.length === 0) return `'{}'::text[]`;
	// Inside the Postgres array literal we use double quotes around each item
	// and escape only `"` and `\`. Then we wrap in a SQL string and double up `'`.
	const items = arr
		.map((s) => `"${String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`)
		.join(',');
	const arrayLiteral = `{${items}}`;
	return `'${arrayLiteral.replace(/'/g, "''")}'::text[]`;
}

const lines = [];
lines.push('BEGIN;');
for (const p of product_data) {
	lines.push(`INSERT INTO public.products (
  id, sku, img, title, slug, unit, image_urls, parent, children,
  price, discount, quantity, brand, category, status, reviews,
  product_type, description, additional_information, featured,
  sell_count, offer_date, tags, video_id, sizes
) VALUES (
  ${sqlEscape(p.id)}, ${sqlEscape(p.sku ?? '')}, ${sqlEscape(p.img ?? '')},
  ${sqlEscape(p.title ?? '')}, ${sqlEscape(p.slug ?? '')}, ${sqlEscape(p.unit ?? null)},
  ${sqlEscape(p.imageURLs ?? [])}, ${sqlEscape(p.parent ?? null)}, ${sqlEscape(p.children ?? null)},
  ${Number(p.price ?? 0)}, ${Number(p.discount ?? 0)}, ${Number(p.quantity ?? 0)},
  ${sqlEscape(p.brand ?? null)}, ${sqlEscape(p.category ?? null)}, ${sqlEscape(p.status ?? 'in-stock')},
  ${sqlEscape(p.reviews ?? [])}, ${sqlEscape(p.productType ?? null)}, ${sqlEscape(p.description ?? null)},
  ${sqlEscape(p.additionalInformation ?? [])}, ${Boolean(p.featured)},
  ${Number(p.sellCount ?? 0)}, ${sqlEscape(p.offerDate ?? null)},
  ${sqlTextArray(p.tags)}, ${sqlEscape(p.videoId ?? null)}, ${sqlTextArray(p.sizes)}
)
ON CONFLICT (id) DO UPDATE SET
  sku = EXCLUDED.sku,
  img = EXCLUDED.img,
  title = EXCLUDED.title,
  slug = EXCLUDED.slug,
  unit = EXCLUDED.unit,
  image_urls = EXCLUDED.image_urls,
  parent = EXCLUDED.parent,
  children = EXCLUDED.children,
  price = EXCLUDED.price,
  discount = EXCLUDED.discount,
  quantity = EXCLUDED.quantity,
  brand = EXCLUDED.brand,
  category = EXCLUDED.category,
  status = EXCLUDED.status,
  reviews = EXCLUDED.reviews,
  product_type = EXCLUDED.product_type,
  description = EXCLUDED.description,
  additional_information = EXCLUDED.additional_information,
  featured = EXCLUDED.featured,
  sell_count = EXCLUDED.sell_count,
  offer_date = EXCLUDED.offer_date,
  tags = EXCLUDED.tags,
  video_id = EXCLUDED.video_id,
  sizes = EXCLUDED.sizes;`);
}
lines.push('COMMIT;');
lines.push(`SELECT count(*) AS total_products FROM public.products;`);

process.stdout.write(lines.join('\n\n') + '\n');
