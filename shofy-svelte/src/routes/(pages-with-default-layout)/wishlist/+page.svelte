<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbFour from '../../../components/breadcrumb/breadcrumb-four.svelte';
	import WishlistArea from '../../../components/wishlist/wishlist-area.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Wishlist Page - Shofy" />
	<!-- meta title end -->

	<main>

		<!-- breadcrumb area start -->
		<BreadcrumbFour title="Wishlist" subtitle="Wishlist" />
		<!-- breadcrumb area end -->

		<!-- wishlist area start -->
		<WishlistArea/>
		<!-- wishlist area end -->
	</main>
</div>
