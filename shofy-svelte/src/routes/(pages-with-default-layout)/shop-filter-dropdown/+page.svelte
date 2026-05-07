<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbOne from '../../../components/breadcrumb/breadcrumb-one.svelte';
	import ShopFilterDropdownArea from '../../../components/shop/shop-filter-dropdown-area.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Shop Filter Dropdown Page - Shofy" />
	<!-- meta title end -->

	<main>
		<!-- breadcrumb area start -->
		<BreadcrumbOne title="Shop Filter Dropdown" subtitle="Shop Filter Dropdown" />
		<!-- breadcrumb area end -->

		<!-- shop area start -->
		<ShopFilterDropdownArea/>
		<!-- shop area end -->
	</main>
</div>
