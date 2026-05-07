<script lang="ts">
	import BrandFilter from '../shop/sidebar/brand-filter.svelte';
	import CategoryFilter from '../shop/sidebar/category-filter.svelte';
	import PriceFilter from '../shop/sidebar/price-filter.svelte';
	import ResetFilter from '../shop/sidebar/reset-filter.svelte';
	import StatusFilter from '../shop/sidebar/status-filter.svelte';
	import TopRatedProducts from '../shop/sidebar/top-rated-products.svelte';

	type Props = {
		openOffcanvas: boolean;
		handleOpenOffcanvas: () => void;
	};
	let { handleOpenOffcanvas, openOffcanvas }: Props = $props();
</script>

<div>
	<div class="tp-filter-offcanvas-area" class:offcanvas-opened={openOffcanvas}>
		<div class="tp-filter-offcanvas-wrapper">
			<div class="tp-filter-offcanvas-close">
				<button
					onclick={handleOpenOffcanvas}
					type="button"
					class="tp-filter-offcanvas-close-btn filter-close-btn"
				>
					<i class="fa-solid fa-xmark"></i>
					Close
				</button>
			</div>
			<div class="tp-shop-sidebar">
				<!-- filter -->
				<div class="tp-shop-widget mb-35">
					<h3 class="tp-shop-widget-title no-border">Price Filter</h3>

					<PriceFilter />
				</div>
				<!-- status -->
				<div class="tp-shop-widget mb-50">
					<h3 class="tp-shop-widget-title">Product Status</h3>

					<StatusFilter />
				</div>
				<!-- categories -->
				<div class="tp-shop-widget mb-50">
					<h3 class="tp-shop-widget-title">Categories</h3>

					<CategoryFilter />
				</div>

				<!-- product rating -->
				<div class="tp-shop-widget mb-50">
					<h3 class="tp-shop-widget-title">Top Rated Products</h3>
					<TopRatedProducts />
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
		</div>
	</div>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div onclick={handleOpenOffcanvas} class="body-overlay" class:opened={openOffcanvas}></div>
</div>
