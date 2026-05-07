<script lang="ts">
	import { onMount } from 'svelte';
	import { register, type SwiperContainer } from 'swiper/element/bundle';
	import product_data from '../../../data/product-data';
	import { SectionLineTwo } from '../../svg';
	import FashionPopularSliderItem from './fashion-popular-slider-item.svelte';

	// Register Swiper web components
	onMount(() => {
		register();
	});
	// Filter popular products
	const popular_prd = product_data.filter((p) => p.productType === 'fashion').slice(0, 8);

	let swiperEl: SwiperContainer;

	onMount(() => {
		if (swiperEl) {
			Object.assign(swiperEl, {
				breakpoints: {
					1200: { slidesPerView: 5 },
					992: { slidesPerView: 4 },
					768: { slidesPerView: 3 },
					576: { slidesPerView: 2 },
					0: { slidesPerView: 1 }
				}
			});
			swiperEl.initialize();
		}
	});
</script>

<section class="tp-category-area pb-95 pt-95">
	<div class="container">
		<div class="row">
			<div class="col-xl-12">
				<div class="tp-section-title-wrapper-2 text-center mb-50">
					<span class="tp-section-title-pre-2">
						Shop by Category
						<SectionLineTwo />
					</span>
					<h3 class="tp-section-title-2">Popular on the Shofy store.</h3>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xl-12">
				<div class="tp-category-slider-2 position-relative">
					<swiper-container
						slides-per-view="5"
						space-between="20"
						class="tp-category-slider-active-2 swiper-container pb-50"
						scrollbar-el=".swiper-scrollbar-el"
						scrollbar-draggable="true"
						bind:this={swiperEl}
					>
						{#each popular_prd as item}
							<swiper-slide>
								<FashionPopularSliderItem item={item} />
							</swiper-slide>
						{/each}
					</swiper-container>
					<div
						class="swiper-scrollbar-el tp-swiper-scrollbar tp-swiper-scrollbar-drag"
					></div>
				</div>
			</div>
		</div>
	</div>
</section>



