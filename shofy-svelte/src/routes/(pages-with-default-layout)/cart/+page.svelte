<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbFour from '../../../components/breadcrumb/breadcrumb-four.svelte';
	import CartArea from '../../../components/cart/cart-area.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="עגלת קניות - Shofy" />
	<!-- meta title end -->

	<main>

		<!-- breadcrumb area start -->
		<BreadcrumbFour title="עגלת קניות" subtitle="עגלת קניות" homeLabel="בית" dir="rtl" />
		<!-- breadcrumb area end -->

		<!-- cart area start -->
		<CartArea/>
		<!-- cart area end -->
	</main>
</div>
