<script lang="ts">
	import BrandFilter from './brand-filter.svelte';
	import CategoryFilter from './category-filter.svelte';
	import PriceFilter from './price-filter.svelte';
	import ResetFilter from './reset-filter.svelte';
	import StatusFilter from './status-filter.svelte';
	import TopRatedProducts from './top-rated-products.svelte';
</script>

<div class="tp-shop-sidebar mr-10">
	<!-- filter -->
	<div class="tp-shop-widget mb-35">
		<h3 class="tp-shop-widget-title no-border">Price Filter</h3>
		<!-- price filter start -->
		<PriceFilter />
		<!-- price filter end -->
	</div>
	<!-- status -->
	<div class="tp-shop-widget mb-50">
		<h3 class="tp-shop-widget-title">Product Status</h3>
		<!-- filter status start -->
		<StatusFilter />
		<!-- filter status end -->
	</div>
	<!-- categories -->
	<div class="tp-shop-widget mb-50">
		<h3 class="tp-shop-widget-title">Categories</h3>
		<!-- filter categories start -->
		<CategoryFilter />
		<!-- filter categories end -->
	</div>
	<!-- product rating -->
	<div class="tp-shop-widget mb-50">
		<h3 class="tp-shop-widget-title">Top Rated Products</h3>
		<!-- filter top-product start -->
		<TopRatedProducts />
		<!-- filter top-product end -->
	</div>
	<!-- brand -->
	<div class="tp-shop-widget mb-50">
		<h3 class="tp-shop-widget-title">Popular Brands</h3>
		<!-- filter brand start -->
		<BrandFilter />
		<!-- filter brand end -->
	</div>
	<!-- reset filter start -->
	<ResetFilter />
	<!-- reset filter end -->
</div>
