<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import product_data from '../../../data/product-data';
	import productStore from '../../../store/product-store';
	import MetaTitle from '../../../components/meta-title.svelte';
	import type { IProduct } from '../../../types/product-type';
	import RelatedProducts from '../../../components/product/related-products.svelte';
	import ProductDetailsBreadcrumb from '../../../components/product-details/product-details-breadcrumb.svelte';
	import ProductDetailsGalleryArea from '../../../components/product-details/product-details-gallery-area.svelte';

	// Reactive product state
	let product: IProduct | undefined = $state(undefined);

	// Fetch product on mount
	onMount(() => {
		product = product_data[3];

		if (product?.img) {
			productStore.handleImageActive(product.img); // Update active image in store
		}
	});
</script>

<!-- meta title start -->
<MetaTitle title="Product Details with Gallery Page - Shofy" />
<!-- meta title end -->

{#if product}
	<!-- breadcrumb start -->
	<ProductDetailsBreadcrumb {product} />
	<!-- breadcrumb end -->

	<!-- product details area start -->
	<ProductDetailsGalleryArea {product} />
	<!-- product details area end -->

	<!-- related products start -->
	<RelatedProducts productId={product.id} category={product.category.name} />
	<!-- related products end -->
{:else}
	<div class="text-center mt-100">Product not found with ID: {page.params.id}</div>
{/if}
