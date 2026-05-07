<script lang="ts">
	import { onMount } from 'svelte';
	import { register, type SwiperContainer } from 'swiper/element/bundle';
	import product_data from '../../../data/product-data';
	import JewelrySliderItem from './jewelry-slider-item.svelte';

	// Register Swiper custom elements
	onMount(() => {
		register();
	});

	// Filter jewelry items
	const jewelryPopularItem = product_data.filter((p) => p.productType === 'jewelry').slice(0, 6);

	let swiperEl: SwiperContainer;

	onMount(() => {
		if (swiperEl) {
			Object.assign(swiperEl, {
				breakpoints: {
					'1400': { slidesPerView: 5 },
					'1200': { slidesPerView: 4 },
					'992': { slidesPerView: 3 },
					'768': { slidesPerView: 2 },
					'576': { slidesPerView: 2 },
					'0': { slidesPerView: 1 }
				}
			});
			swiperEl.initialize();
		}
	});
</script>

<section
	class="tp-category-area pt-115 pb-105 tp-category-plr-85"
	style="background-color: #EFF1F5;"
>
	<div class="container-fluid">
		<div class="row">
			<div class="col-xl-12">
				<div class="tp-section-title-wrapper-4 mb-60 text-center">
					<span class="tp-section-title-pre-4">Shop by Category</span>
					<h3 class="tp-section-title-4">Popular on the Shofy store.</h3>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xl-12">
				<div class="tp-category-slider-4">
					<swiper-container
						slides-per-view="5"
						space-between="25"
					  scrollbar-el=".tp-category-swiper-scrollbar"
						scrollbar-draggable="true"
						class="tp-category-slider-active-4 swiper-container mb-70"
						bind:this={swiperEl}
					>
						{#each jewelryPopularItem as item, i}
							<swiper-slide key={i}>
								<JewelrySliderItem {item} />
							</swiper-slide>
						{/each}
					</swiper-container>
					<div class="tp-category-swiper-scrollbar tp-swiper-scrollbar"></div>
				</div>
			</div>
		</div>
	</div>
</section>
