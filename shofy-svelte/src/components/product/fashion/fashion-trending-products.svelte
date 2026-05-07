<script lang="ts">
	import { onMount } from 'svelte';
	import 'swiper/element/bundle';
	import product_data from '../../../data/product-data';
	import { RightArrow, SectionLineTwo } from '../../svg';
	import FashionProductItem from './fashion-product-item.svelte';
	import type { SwiperContainer } from 'swiper/element/bundle';

	const product_items = product_data.filter((p) => p.productType === 'fashion').slice(-4);

	let swiperEl: SwiperContainer;

	onMount(() => {
		if (swiperEl) {
			Object.assign(swiperEl, {
				breakpoints: {
					'1200': {slidesPerView: 2},
					'768': {slidesPerView: 2},
					'576': {slidesPerView: 2},
					'0': {slidesPerView: 1}
				}
			});
			swiperEl.initialize();
		}
	});
</script>

<section class="tp-trending-area pt-140 pb-150">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-xl-6 col-lg-6">
				<div class="tp-trending-wrapper">
					<div class="tp-section-title-wrapper-2 mb-50">
						<span class="tp-section-title-pre-2">
							More to Discover
							<SectionLineTwo />
						</span>
						<h3 class="tp-section-title-2">Trending Arrivals</h3>
					</div>

					<!-- Swiper -->
					<div class="tp-trending-slider">
						<swiper-container
							slides-per-view="2"
							space-between="24"
							pagination-clickable="true"
							pagination-el=".tp-trending-slider-dot"
							class="tp-trending-slider-active swiper-container"
							init="false"
							bind:this={swiperEl}
						>
							{#each product_items as item (item.id)}
								<swiper-slide class="tp-trending-item">
									<FashionProductItem {item} spacing={false} />
								</swiper-slide>
							{/each}
						</swiper-container>

						<div class="tp-trending-slider-dot tp-swiper-dot text-center mt-45"></div>
					</div>
				</div>
			</div>

			<div class="col-xl-4 col-lg-5 col-md-8 col-sm-10">
				<div class="tp-trending-banner p-relative ml-35">
					<div
						class="tp-trending-banner-thumb w-img include-bg"
						style="background-image: url('/img/product/trending/banner/trending-banner.jpg')"
					></div>
					<div class="tp-trending-banner-content">
						<h3 class="tp-trending-banner-title">
							<a href="/shop"> Short Sleeve Tunic <br />Tops Casual Swing </a>
						</h3>
						<div class="tp-trending-banner-btn">
							<a
								href="/shop"
								class="tp-btn tp-btn-border tp-btn-border-white tp-btn-border-white-sm"
							>
								Explore More
								<RightArrow />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
