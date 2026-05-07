<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbOne from '../../../components/breadcrumb/breadcrumb-one.svelte';
	import ShopArea from '../../../components/shop/shop-area.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Shop Full Width Page - Shofy" />
	<!-- meta title end -->

	<main>
		<!-- breadcrumb area start -->
		<BreadcrumbOne title="Shop Full Width" subtitle="Shop Full Width" full_width={true} />
		<!-- breadcrumb area end -->

		<!-- shop area start -->
		<ShopArea full_width={true}/>
		<!-- shop area end -->
	</main>
</div>
