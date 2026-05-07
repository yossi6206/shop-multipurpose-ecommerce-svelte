<script lang="ts">
	import type { IProduct } from '../../types/product-type';

	let { product }: { product: IProduct } = $props();
</script>

<div class="tp-product-details-thumb-gallery">
	<div class="row">
		{#each product.imageURLs as item}
			<div class="col-lg-6">
				<div class="tp-product-details-thumb-gallery-item mb-25" style="background-color: #f5f6f8">
					<img src={item.img} alt="product-img" />
				</div>
			</div>
		{/each}
	</div>
</div>
