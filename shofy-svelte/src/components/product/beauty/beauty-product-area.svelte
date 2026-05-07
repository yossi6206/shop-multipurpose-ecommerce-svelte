<script>
	import BeautyProductItem from './beauty-product-item.svelte';
	import product_data from '../../../data/product-data';
	import { SmArrow } from '../../svg';

	let products = [...product_data]
		.filter((p) => p.productType === 'beauty')
		.sort((a, b) => (b.sellCount ?? 0) - (a.sellCount ?? 0))
		.slice(0, 8);
</script>

<section class="tp-product-area grey-bg-8 pt-95 pb-80">
	<div class="container">
		<div class="row align-items-end">
			<div class="col-lg-6 col-md-8">
				<div class="tp-section-title-wrapper-3 mb-55">
					<span class="tp-section-title-pre-3">Shop by Category</span>
					<h3 class="tp-section-title-3">Best sellers in beauty</h3>
				</div>
			</div>
			<div class="col-lg-6 col-md-4">
				<div class="tp-product-more-3 text-md-end mb-65">
					<a href="/shop" class="tp-btn">
						Shop All Products
						<SmArrow />
					</a>
				</div>
			</div>
		</div>
		<div class="row">
			{#each products as item (item.id)}
				<div class="col-lg-3 col-md-4 col-sm-6">
					<BeautyProductItem {item} />
				</div>
			{/each}
		</div>
	</div>
</section>
