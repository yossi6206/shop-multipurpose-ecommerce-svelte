<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbOne from '../../../components/breadcrumb/breadcrumb-one.svelte';
	import ShopArea from '../../../components/shop/shop-area.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Shop Right Sidebar Page - Shofy" />
	<!-- meta title end -->

	<main>
		<!-- breadcrumb area start -->
		<BreadcrumbOne title="Shop Right Sidebar" subtitle="Shop Right Sidebar" />
		<!-- breadcrumb area end -->

		<!-- shop area start -->
		<ShopArea shop_right_side={true}/>
		<!-- shop area end -->
	</main>
</div>
