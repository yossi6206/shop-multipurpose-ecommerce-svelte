<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbOne from '../../../components/breadcrumb/breadcrumb-one.svelte';
	import ShopArea from '../../../components/shop/shop-area.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Shop 1600 Page - Shofy" />
	<!-- meta title end -->

	<main>
		<!-- breadcrumb area start -->
		<BreadcrumbOne title="Shop Full Width" subtitle="Shop Full Width" shop_1600={true} />
		<!-- breadcrumb area end -->

		<!-- shop area start -->
		<ShopArea shop_1600={true}/>
		<!-- shop area end -->
	</main>
</div>
