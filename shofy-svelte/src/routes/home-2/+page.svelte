<script lang="ts">
	import MetaTitle from '../../components/meta-title.svelte';
	import HeaderTwo from '../../components/header/header-two.svelte';
	import HeroBannerTwo from '../../components/hero-banner/hero-banner-two.svelte';
	import FashionCategory from '../../components/category/fashion-category.svelte';
	import FashionPopularItems from '../../components/product/fashion/fashion-popular-items.svelte';
	import FashionAllProducts from '../../components/product/fashion/fashion-all-products.svelte';
	import FashionFeaturedItems from '../../components/product/fashion/fashion-featured-items.svelte';
	import FashionTrendingProducts from '../../components/product/fashion/fashion-trending-products.svelte';
	import FashionBestSellItems from '../../components/product/fashion/fashion-best-sell-items.svelte';
	import TestimonialOne from '../../components/testimonial/testimonial-one.svelte';
	import BlogFashion from '../../components/blog/blog-fashion.svelte';
	import FeatureTwo from '../../components/feature/feature-two.svelte';
	import InstagramTwo from '../../components/instagram/instagram-two.svelte';
	import FooterOne from '../../components/footer/footer-one.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Home Fashion Page - Shofy" />
	<!-- meta title end -->

	<!-- header start -->
	<HeaderTwo />
	<!-- header end -->

	<main>
		<!-- hero area start -->
		<HeroBannerTwo />
		<!-- hero area end -->

		<!-- category area start -->
		<FashionCategory />
		<!-- category area end -->

		<!-- popular product area start -->
		<FashionPopularItems />
		<!-- popular product area end -->

		<!-- all product area start -->
		<FashionAllProducts />
		<!-- all product area end -->

		<!-- featured products area start -->
		<FashionFeaturedItems />
		<!-- featured products area end -->

		<!-- trending products area start -->
		<FashionTrendingProducts />
		<!-- trending products area end -->

		<!-- best sell product area start -->
		<FashionBestSellItems />
		<!-- best sell product area end -->

		<!-- testimonial area start -->
		<TestimonialOne />
		<!-- testimonial area end -->

		<!-- blog area start -->
		<BlogFashion />
		<!-- blog area end -->

		<!-- feature area start -->
		<FeatureTwo />
		<!-- feature area end -->

		<!-- instagram area start -->
		<InstagramTwo />
		<!-- instagram area end -->
	</main>

	<!-- footer area start -->
	<FooterOne style_2={true} />
	<!-- footer area end -->
</div>
