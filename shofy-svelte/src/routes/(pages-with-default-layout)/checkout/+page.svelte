<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbFour from '../../../components/breadcrumb/breadcrumb-four.svelte';
	import CheckoutArea from '../../../components/checkout/checkout-area.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="עמוד תשלום - Shofy" />
	<!-- meta title end -->

	<main>
		<!-- breadcrumb area start -->
		<BreadcrumbFour title="תשלום" subtitle="תשלום" homeLabel="בית" bg_clr={true} dir="rtl" />
		<!-- breadcrumb area end -->

		<!-- checkout area start -->
		<CheckoutArea />
		<!-- checkout area end -->
	</main>
</div>
