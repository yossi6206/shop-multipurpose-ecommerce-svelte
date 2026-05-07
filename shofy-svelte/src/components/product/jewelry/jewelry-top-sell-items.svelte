<script lang="ts">
	import { onMount } from 'svelte';
	import JewelryProductItem from './jewelry-product-item.svelte';
	import product_data from '../../../data/product-data';
	import type { SwiperContainer } from 'swiper/element';

	let swiperEl: SwiperContainer | null = null;

	const jewelryTopSellsItems = product_data
		.filter((p) => p.productType === 'jewelry')
		.slice()
		.sort((a, b) => b.sellCount - a.sellCount)
		.slice(0, 6);

	onMount(() => {
		if (swiperEl) {
			Object.assign(swiperEl, {
				slidesPerView: 4,
				spaceBetween: 24,
				breakpoints: {
					1200: { slidesPerView: 4 },
					992: { slidesPerView: 4 },
					768: { slidesPerView: 2 },
					576: { slidesPerView: 2 },
					0: { slidesPerView: 1 }
				}
			});
			swiperEl.initialize();
		}
	});
</script>

<section class="tp-best-area pt-115">
	<div class="container">
		<div class="row">
			<div class="col-xl-12">
				<div class="tp-section-title-wrapper-4 mb-50 text-center">
					<span class="tp-section-title-pre-4">Best Seller This Week’s</span>
					<h3 class="tp-section-title-4">Top Sellers In Dress for You</h3>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xl-12">
				<div class="tp-best-slider">
					<swiper-container
						bind:this={swiperEl}
            scrollbar-el=".tp-best-swiper-scrollbar"
						scrollbar-draggable="true"
						class="tp-best-slider-active swiper-container mb-10"
					>
						{#each jewelryTopSellsItems as item, i}
							<swiper-slide class="tp-best-item-4">
								<JewelryProductItem {item} />
							</swiper-slide>
						{/each}
					</swiper-container>

					<!-- Scrollbar -->
					<div class="tp-best-swiper-scrollbar tp-swiper-scrollbar"></div>
				</div>
			</div>
		</div>
	</div>
</section>
