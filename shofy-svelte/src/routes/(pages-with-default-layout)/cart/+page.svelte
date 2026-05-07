<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbFour from '../../../components/breadcrumb/breadcrumb-four.svelte';
	import CartArea from '../../../components/cart/cart-area.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Cart Page - Shofy" />
	<!-- meta title end -->

	<main>

		<!-- breadcrumb area start -->
		<BreadcrumbFour title="Shopping Cart" subtitle="Shopping Cart" />
		<!-- breadcrumb area end -->

		<!-- cart area start -->
		<CartArea/>
		<!-- cart area end -->
	</main>
</div>
