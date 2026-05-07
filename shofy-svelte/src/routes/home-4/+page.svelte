<script lang="ts">
	import AboutJewelry from '../../components/about/about-jewelry.svelte';
	import BannerJewelry from '../../components/banner/banner-jewelry.svelte';
	import BrandJewelry from '../../components/brand/brand-jewelry.svelte';
	import JewelryCollection from '../../components/collection/jewelry-collection.svelte';
	import FeatureFour from '../../components/feature/feature-four.svelte';
	import FooterTwo from '../../components/footer/footer-two.svelte';
	import HeaderFour from '../../components/header/header-four.svelte';
	import HeroBannerFour from '../../components/hero-banner/hero-banner-four.svelte';
	import InstagramFour from '../../components/instagram/instagram-four.svelte';
	import MetaTitle from '../../components/meta-title.svelte';
	import JewelryPopularItems from '../../components/product/jewelry/jewelry-popular-items.svelte';
	import JewelryProductItems from '../../components/product/jewelry/jewelry-product-items.svelte';
	import JewelryTopSellItems from '../../components/product/jewelry/jewelry-top-sell-items.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Home Jewelry Page - Shofy" />
	<!-- meta title end -->

	<!-- header start -->
	<HeaderFour />
	<!-- header end -->

	<main>
		<!-- hero area start -->
		<HeroBannerFour />
		<!-- hero area end -->

		<!-- feature area start -->
		<FeatureFour />
		<!-- feature area end -->

		<!-- banner area start -->
		<BannerJewelry />
		<!-- banner area end -->

		<!-- about area start -->
		<AboutJewelry />
		<!-- about area end -->

		<!-- popular products area start -->
		<JewelryPopularItems />
		<!-- popular products area end -->

		<!-- jewelry products items start -->
		<JewelryProductItems />
		<!-- jewelry products items end -->

		<!-- collection area start -->
		<JewelryCollection />
		<!-- collection area end -->

		<!-- jewelry top sell items start -->
		<JewelryTopSellItems />
		<!-- jewelry top sell items end -->

		<!-- brand area start -->
		<BrandJewelry />
		<!-- brand area end -->

		<!-- instagram area start -->
		<InstagramFour />
		<!-- instagram area end -->
	</main>

	<!-- footer area start -->
	 <FooterTwo/>
	<!-- footer area end -->
</div>
