<script lang="ts">
	import MetaTitle from '../components/meta-title.svelte';
	import HeaderOne from '../components/header/header-one.svelte';
	import HeroBannerOne from '../components/hero-banner/hero-banner-one.svelte';
	import ElectronicCategory from '../components/category/electronic-category.svelte';
	import FeatureOne from '../components/feature/feature-one.svelte';
	import ProductElectronicTabItems from '../components/product/electronic/electronic-tab-items.svelte';
	import BannerArea from '../components/banner/banner-area.svelte';
	import OfferItems from '../components/product/electronic/electronic-offer-items.svelte';
	import GadgetsItems from '../components/product/electronic/electronic-gadgets-items.svelte';
	import BannerAreaTwo from '../components/banner/banner-area-two.svelte';
	import NewArrivals from '../components/product/electronic/electronic-new-arrivals.svelte';
	import ElectronicSmItems from '../components/product/electronic/electronic-sm-items.svelte';
	import BlogElectronic from '../components/blog/blog-electronic.svelte';
	import InstagramOne from '../components/instagram/instagram-one.svelte';
	import SubscribeArea from '../components/subscribe/subscribe-area.svelte';
	import FooterOne from '../components/footer/footer-one.svelte';
</script>

<div>

	<!-- meta title start -->
	<MetaTitle title="Home Electronic Page - Shofy" />
	<!-- meta title end -->

	<!-- header start -->
	<HeaderOne />
	<!-- header end -->

	<main>
		<!-- hero area start -->
		<HeroBannerOne />
		<!-- hero area end -->

		<!-- category area start -->
		<ElectronicCategory />
		<!-- category area end -->

		<!-- feature area start -->
		<FeatureOne />
		<!-- feature area end -->

		<!-- product area start -->
		<ProductElectronicTabItems />
		<!-- product area end -->

		<!-- banner area start -->
		<BannerArea />
		<!-- banner area end -->

		<!-- offer product area start -->
		<OfferItems />
		<!-- offer product area end -->

		<!-- gadgets products area start -->
		<GadgetsItems />
		<!-- gadgets products area end -->

		<!-- banner area start -->
		<BannerAreaTwo />
		<!-- banner area end -->

		<!-- new arrivals area start -->
		<NewArrivals />
		<!-- new arrivals area end -->

		<!-- product sm items area start -->
		<ElectronicSmItems />
		<!-- product sm items area end -->

		<!-- blog area start -->
		<BlogElectronic />
		<!-- blog area end -->

		<!-- instagram area start -->
		<InstagramOne />
		<!-- instagram area end -->

		<!-- subscribe area start -->
		<SubscribeArea />
		<!-- subscribe area end -->
	</main>

	<!-- footer area start -->
	<FooterOne />
	<!-- footer area end -->
</div>
