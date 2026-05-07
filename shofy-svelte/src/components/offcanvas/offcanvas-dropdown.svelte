<script lang="ts">
	import CategoryFilter from '../shop/sidebar/category-filter.svelte';
	import PriceFilter from '../shop/sidebar/price-filter.svelte';
	import ResetFilter from '../shop/sidebar/reset-filter.svelte';
	import StatusFilter from '../shop/sidebar/status-filter.svelte';
	import TopRatedProducts from '../shop/sidebar/top-rated-products.svelte';
  
  type Props = {
    openFilterDropdown: boolean;
    handleOpenFilterDropdown: () => void;
  };
  let { handleOpenFilterDropdown,openFilterDropdown }: Props = $props();
</script>

<div
	class="tp-filter-dropdown-wrapper tp-filter-dropdown-area"
	class:filter-dropdown-opened={openFilterDropdown}
>
	<div class="row">
		<div class="col-lg-3">
			<!-- status -->
			<div class="tp-shop-widget mb-50">
				<h3 class="tp-shop-widget-title">Product Status</h3>
				<StatusFilter />
			</div>
		</div>

		<div class="col-lg-3">
			<!-- categories -->
			<div class="tp-shop-widget mb-50">
				<h3 class="tp-shop-widget-title">Categories</h3>
				<CategoryFilter />
			</div>
		</div>

		<div class="col-lg-3">
			<!-- color -->
			<div class="tp-shop-widget mb-50">
				<h3 class="tp-shop-widget-title">Filter by Price</h3>
				<PriceFilter />
			</div>
			<ResetFilter />
		</div>

		<div class="col-lg-3">
			<!-- product rating -->
			<div class="tp-shop-widget mb-50">
				<h3 class="tp-shop-widget-title">Top Rated Products</h3>
				<TopRatedProducts />
			</div>
		</div>
	</div>
</div>
