<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbFour from '../../../components/breadcrumb/breadcrumb-four.svelte';
	import CheckoutArea from '../../../components/checkout/checkout-area.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Checkout Page- Shofy" />
	<!-- meta title end -->

	<main>
		<!-- breadcrumb area start -->
		<BreadcrumbFour title="Checkout" subtitle="Checkout" bg_clr={true} />
		<!-- breadcrumb area end -->

		<!-- checkout area start -->
		<CheckoutArea />
		<!-- checkout area end -->
	</main>
</div>
