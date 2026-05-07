<script lang="ts">
	import BeautyCategory from '../../components/category/beauty-category.svelte';
	import BeautyCollection from '../../components/collection/beauty-collection.svelte';
	import FeatureThree from '../../components/feature/feature-three.svelte';
	import FeatureTwo from '../../components/feature/feature-two.svelte';
	import FooterOne from '../../components/footer/footer-one.svelte';
	import HeaderThree from '../../components/header/header-three.svelte';
	import HeroBannerThree from '../../components/hero-banner/hero-banner-three.svelte';
	import InstagramThree from '../../components/instagram/instagram-three.svelte';
	import MetaTitle from '../../components/meta-title.svelte';
	import BeautyBestCollection from '../../components/product/beauty/beauty-best-collection.svelte';
	import BeautyProductArea from '../../components/product/beauty/beauty-product-area.svelte';
	import BeautySpecialItems from '../../components/product/beauty/beauty-special-items.svelte';
	import TestimonialTwo from '../../components/testimonial/testimonial-two.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Home Beauty Page - Shofy" />
	<!-- meta title end -->

	<!-- header start -->
	<HeaderThree />
	<!-- header end -->

	<main>
		<!-- hero area start -->
		<HeroBannerThree />
		<!-- hero area end -->

		<!-- category area start -->
		<BeautyCategory />
		<!-- category area end -->

		<!-- feature area start -->
		<FeatureThree />
		<!-- feature area end -->

		<!-- beauty product area start -->
		<BeautyProductArea />
		<!-- beauty product area end -->

		<!-- collection area start -->
		<BeautyCollection />
		<!-- collection area end -->

		<!-- product best collection area start -->
		<BeautyBestCollection />
		<!-- product best collection area end -->

		<!-- product special area start -->
		<BeautySpecialItems />
		<!-- product special area end -->

		<!-- testimonial area start -->
		<TestimonialTwo />
		<!-- testimonial area end -->

		<!-- feature area start -->
		<FeatureTwo />
		<!-- feature area end -->

		<!-- instagram area start -->
		<InstagramThree />
		<!-- instagram area end -->
	</main>

	<!-- footer area start -->
	 <FooterOne style_3={true} />
	<!-- footer area end -->
</div>
