<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbOne from '../../../components/breadcrumb/breadcrumb-one.svelte';
	import ShopArea from '../../../components/shop/shop-area.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Shop Page - Shofy" />
	<!-- meta title end -->

	<main>
		<!-- breadcrumb area start -->
		<BreadcrumbOne title="Shop Grid" subtitle="Shop Grid" />
		<!-- breadcrumb area end -->

		<!-- shop area start -->
		<ShopArea/>
		<!-- shop area end -->
	</main>
</div>
