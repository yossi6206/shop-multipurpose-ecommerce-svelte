<script lang="ts">
	import { onMount } from 'svelte';
	import { products } from '$lib/products-loader';
	import type { IProduct } from '../../types/product-type';
	import type { SwiperContainer } from 'swiper/element';
	import BeautyProductItem from './beauty/beauty-product-item.svelte';

	type IProps = {
		productId: string;
		category: string;
	};

	let { productId, category }: IProps = $props();

	// Related products - reactive on the live products store so newly added
	// items also surface here.
	let related_products: IProduct[] = $state([]);

	const unsub = products.subscribe(($products) => {
		related_products = $products.filter(
			(p) => p.category.name.toLowerCase() === category.toLowerCase() && p.id !== productId
		);
	});

	// Swiper settings
	let slider_setting = {
		slidesPerView: 4,
		spaceBetween: 24,
		breakpoints: {
			1200: {
				slidesPerView: 4
			},
			992: {
				slidesPerView: 3
			},
			768: {
				slidesPerView: 2
			},
			576: {
				slidesPerView: 2
			},
			0: {
				slidesPerView: 1
			}
		}
	};

	let swiperEl: SwiperContainer;
	onMount(() => {
		if (swiperEl) {
			Object.assign(swiperEl, slider_setting);
		}
		return () => unsub();
	});
</script>

<section class="tp-related-product pt-95 pb-120" dir="rtl">
	<div class="container">
		<div class="row">
			<div class="tp-section-title-wrapper-6 text-center mb-40">
				<span class="tp-section-title-pre-6">מומלצים נוספים</span>
				<h3 class="tp-section-title-6">מוצרים דומים</h3>
			</div>
		</div>
		<div class="row">
			<div class="tp-product-related-slider">
				<swiper-container
					scrollbar-el=".tp-related-swiper-scrollbar"
					scrollbar-draggable="true"
					class="tp-product-related-slider-active swiper-container mb-10"
					bind:this={swiperEl}
				>
					{#each related_products as item, i}
						<swiper-slide key={i}>
							<BeautyProductItem {item} primary_style={true} style_2={true} />
						</swiper-slide>
					{/each}
				</swiper-container>
				<div class="tp-related-swiper-scrollbar tp-swiper-scrollbar"></div>
			</div>
		</div>
	</div>
</section>
