<script lang="ts">
	import type { IProduct } from '../../types/product-type';

	let { product }: { product: IProduct } = $props();
</script>

<div class="tp-product-details-thumb-list">
	{#each product.imageURLs as item}
		<div
			class="tp-product-details-thumb-list-item mb-25 d-flex align-items-center justify-content-center"
			style="background-color: #f5f6f8"
		>
			<img src={item.img} alt="product-img" />
		</div>
	{/each}
</div>
