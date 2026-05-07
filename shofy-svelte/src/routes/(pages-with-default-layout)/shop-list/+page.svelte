<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbOne from '../../../components/breadcrumb/breadcrumb-one.svelte';
	import ShopArea from '../../../components/shop/shop-area.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Shop List Page - Shofy" />
	<!-- meta title end -->

	<main>
		<!-- breadcrumb area start -->
		<BreadcrumbOne title="Shop List" subtitle="Shop List" />
		<!-- breadcrumb area end -->

		<!-- shop area start -->
		<ShopArea list_style={true}/>
		<!-- shop area end -->
	</main>
</div>
