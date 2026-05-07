<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbFour from '../../../components/breadcrumb/breadcrumb-four.svelte';
	import WishlistArea from '../../../components/wishlist/wishlist-area.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="רשימת המשאלות - Shofy" />
	<!-- meta title end -->

	<main dir="rtl" lang="he">

		<!-- breadcrumb area start -->
		<BreadcrumbFour title="רשימת המשאלות" subtitle="רשימת המשאלות" homeLabel="בית" />
		<!-- breadcrumb area end -->

		<!-- wishlist area start -->
		<WishlistArea/>
		<!-- wishlist area end -->
	</main>
</div>
