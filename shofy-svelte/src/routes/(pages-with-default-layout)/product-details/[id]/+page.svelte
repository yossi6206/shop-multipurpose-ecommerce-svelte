<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import type { IProduct } from '../../../../types/product-type';
	import { products, loadProducts } from '$lib/products-loader';
	import { translateProductText } from '$lib/hebrew-product';
	import productStore from '../../../../store/product-store';
	import ProductDetailsBreadcrumb from '../../../../components/product-details/product-details-breadcrumb.svelte';
	import ProductDetailsArea from '../../../../components/product-details/product-details-area.svelte';
	import RelatedProducts from '../../../../components/product/related-products.svelte';
	import MetaTitle from '../../../../components/meta-title.svelte';

	// Reactive product state - resolved against the live products store so that
	// items added via Supabase are found just like the static fallback ones.
	let product: IProduct | undefined = $state(undefined);
	let isLoading = $state(true);

	function resolveProduct(list: IProduct[]) {
		const productId = page.params.id;
		return list.find((b) => b.id === productId);
	}

	// Reactively re-resolve whenever the products store updates (e.g. after the
	// initial Supabase hydration completes).
	const unsub = products.subscribe(($products) => {
		const found = resolveProduct($products);
		if (found) {
			product = found;
			if (found.img) {
				productStore.handleImageActive(found.img);
			}
		}
	});

	onMount(() => {
		// Make sure Supabase data is fetched even if this is the entry route.
		loadProducts()
			.catch(() => {
				/* fall back to whatever is already in the store */
			})
			.finally(() => {
				isLoading = false;
			});

		return () => unsub();
	});
</script>

<!-- meta title start -->
<MetaTitle title={product ? `${translateProductText(product.title, product)} - Shofy` : 'פרטי מוצר - Shofy'} />
<!-- meta title end -->

{#if product}
	<!-- breadcrumb start -->
	<ProductDetailsBreadcrumb {product} />
	<!-- breadcrumb end -->

	<!-- product details area start -->
	<ProductDetailsArea {product} />
	<!-- product details area end -->

	<!-- related products start -->
	<RelatedProducts productId={product.id} category={product.category.name} />
	<!-- related products end -->
{:else if isLoading}
	<div class="text-center mt-100 mb-100">
		<div class="spinner-border" role="status">
			<span class="visually-hidden">טוען...</span>
		</div>
	</div>
{:else}
	<div class="text-center mt-100" dir="rtl">לא נמצא מוצר עם מזהה: {page.params.id}</div>
{/if}
