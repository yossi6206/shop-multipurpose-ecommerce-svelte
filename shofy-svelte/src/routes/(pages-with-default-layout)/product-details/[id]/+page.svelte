<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import type { IProduct } from '../../../../types/product-type';
	import product_data from '../../../../data/product-data';
	import productStore from '../../../../store/product-store';
	import ProductDetailsBreadcrumb from '../../../../components/product-details/product-details-breadcrumb.svelte';
	import ProductDetailsArea from '../../../../components/product-details/product-details-area.svelte';
	import RelatedProducts from '../../../../components/product/related-products.svelte';
	import MetaTitle from '../../../../components/meta-title.svelte';

	// Reactive product state
	let product: IProduct | undefined = $state(undefined);

	// Fetch product on mount
	onMount(() => {
		const productId = page.params.id; // Access route params in SvelteKit
		product = product_data.find((b) => b.id === productId);

		if (product?.img) {
			productStore.handleImageActive(product.img); // Update active image in store
		}
	});
</script>

<!-- meta title start -->
<MetaTitle title="Product Details Page - Shofy" />
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
{:else}
	<div class="text-center mt-100">Product not found with ID: {page.params.id}</div>
{/if}
