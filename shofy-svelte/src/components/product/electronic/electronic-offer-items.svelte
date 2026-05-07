<script lang="ts">
	import 'swiper/element/bundle';
	import { onMount } from 'svelte';
	import { SectionLine, RightArrow } from '../../svg';
	import product_data from '../../../data/product-data';
	import ProductElectronicItem from './electronic-item.svelte';
	import type { SwiperContainer } from 'swiper/element/bundle';

	// Filter the offer products
	const offer_products = product_data.filter((p) => p.productType === 'electronics' && p.offerDate);

	let swiperEl: SwiperContainer;

	onMount(() => {
		if (swiperEl) {
			Object.assign(swiperEl, {
				breakpoints: {
					1200: { slidesPerView: 3 },
					992: { slidesPerView: 2 },
					768: { slidesPerView: 2 },
					576: { slidesPerView: 1 },
					0: { slidesPerView: 1 }
				}
			});
			swiperEl.initialize();
		}
	});
</script>

<section class="tp-product-offer grey-bg-2 pt-70 pb-80">
	<div class="container">
		<div class="row align-items-end">
			<div class="col-xl-4 col-md-5 col-sm-6">
				<div class="tp-section-title-wrapper mb-40">
					<h3 class="tp-section-title">
						עסקת היום
						<SectionLine />
					</h3>
				</div>
			</div>
			<div class="col-xl-8 col-md-7 col-sm-6">
				<div
					class="tp-product-offer-more-wrapper d-flex justify-content-sm-end p-relative z-index-1"
				>
					<div class="tp-product-offer-more mb-40 text-sm-end grey-bg-2">
						<a href="/shop" class="tp-btn tp-btn-2 tp-btn-blue">
							הצג את כל העסקאות
							<RightArrow />
						</a>
						<span class="tp-product-offer-more-border"></span>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xl-12">
				<div class="tp-product-offer-slider fix">
					<swiper-container
						slides-per-view="3"
						space-between="30"
						loop={false}
						pagination-el=".tp-deals-slider-dot"
						pagination-clickable={true}
						class="tp-product-offer-slider-active swiper-container"
						bind:this={swiperEl}
					>
						{#each offer_products as item}
							<swiper-slide>
								<ProductElectronicItem {item} offer_style={true} />
							</swiper-slide>
						{/each}
					</swiper-container>
					<div class="tp-deals-slider-dot tp-swiper-dot text-center mt-40"></div>
				</div>
			</div>
		</div>
	</div>
</section>
