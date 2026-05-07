<script lang="ts">
	import { register, type SwiperContainer } from 'swiper/element/bundle';
	import type { IProduct } from '../../types/product-type';
	import { onMount } from 'svelte';
	import { LeftArrow, RightArrow } from '../svg';

	let { product }: { product: IProduct } = $props();

	onMount(() => {
		register();
	});

	let swiperEl: SwiperContainer;
	onMount(() => {
		if (swiperEl) {
			Object.assign(swiperEl, {
				'1200': {slidesPerView: 2},
				'992': {slidesPerView: 2},
				'768': {slidesPerView: 2},
				'576': {slidesPerView: 2},
				'0': {slidesPerView: 1}
			});
			swiperEl.initialize();
		}
	});
</script>

<div class="tp-product-details-thumb-slider p-relative">
	<swiper-container
		class="tp-product-details-thumb-slider-active swiper-container"
		slides-per-view="2"
		space-between="13"
		pagination-el=".tp-product-details-thumb-slider-dot"
		pagination-clickable={true}
		navigation-next-el=".tp-product-details-thumb-slider-5-button-next"
		navigation-prev-el=".tp-product-details-thumb-slider-5-button-prev"
		bind:this={swiperEl}
	>
		{#each product.imageURLs as item}
			<swiper-slide class="tp-prouct-details-thumb-item w-img" style="background-color: #f5f6f8">
				<img src={item.img} alt="product-img" style="height: 660px; object-fit: cover;" />
			</swiper-slide>
		{/each}
	</swiper-container>
	<div class="tp-product-details-thumb-arrow text-center mt-20 d-none d-sm-block">
		<button type="button" class="tp-product-details-thumb-slider-5-button-prev">
			<LeftArrow />
		</button>
		<button type="button" class="tp-product-details-thumb-slider-5-button-next">
			<RightArrow />
		</button>
	</div>
	<div class="tp-product-details-thumb-slider-dot tp-swiper-dot text-center mt-25"></div>
</div>
