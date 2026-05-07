import { writable, get } from 'svelte/store';
import { supabase } from './supabase';
import type { IProduct } from '../types/product-type';
import staticProducts from '../data/product-data';

// Reactive store of all products. Initialized with the static dataset so that
// SSR / first paint renders the exact same layout as before, then re-hydrated
// from Supabase on the client.
export const products = writable<IProduct[]>(staticProducts);

let _loadingPromise: Promise<IProduct[]> | null = null;
let _loaded = false;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapRowToProduct(row: any): IProduct {
	return {
		id: row.id,
		sku: row.sku,
		img: row.img,
		title: row.title,
		slug: row.slug,
		unit: row.unit ?? '',
		imageURLs: Array.isArray(row.image_urls) ? row.image_urls : [],
		parent: row.parent ?? '',
		children: row.children ?? '',
		price: Number(row.price ?? 0),
		discount: Number(row.discount ?? 0),
		quantity: Number(row.quantity ?? 0),
		brand: row.brand ?? { name: '' },
		category: row.category ?? { name: '' },
		status: row.status ?? 'in-stock',
		reviews: Array.isArray(row.reviews) ? row.reviews : [],
		productType: row.product_type ?? '',
		description: row.description ?? '',
		additionalInformation: Array.isArray(row.additional_information)
			? row.additional_information
			: [],
		featured: Boolean(row.featured),
		sellCount: Number(row.sell_count ?? 0),
		offerDate: row.offer_date ?? undefined,
		tags: Array.isArray(row.tags) ? row.tags : [],
		videoId: row.video_id ?? undefined,
		sizes: Array.isArray(row.sizes) ? row.sizes : []
	};
}

export async function loadProducts(force = false): Promise<IProduct[]> {
	if (_loaded && !force) return get(products);
	if (_loadingPromise && !force) return _loadingPromise;

	_loadingPromise = (async () => {
		const { data, error } = await supabase
			.from('products')
			.select('*')
			.order('created_at', { ascending: true });

		if (error) {
			console.error('[products] load failed:', error.message);
			return get(products);
		}
		if (!data || data.length === 0) {
			console.warn('[products] supabase returned empty result; keeping fallback');
			return get(products);
		}

		const mapped = data.map(mapRowToProduct);
		products.set(mapped);
		_loaded = true;
		return mapped;
	})();

	return _loadingPromise;
}

export function getProducts(): IProduct[] {
	return get(products);
}
