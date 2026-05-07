<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbOne from '../../../components/breadcrumb/breadcrumb-one.svelte';
	import ShopArea from '../../../components/shop/shop-area.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Shop No Sidebar Page - Shofy" />
	<!-- meta title end -->

	<main>
		<!-- breadcrumb area start -->
		<BreadcrumbOne title="Shop No Sidebar" subtitle="Shop No Sidebar" />
		<!-- breadcrumb area end -->

		<!-- shop area start -->
		<ShopArea shop_no_side={true}/>
		<!-- shop area end -->
	</main>
</div>
