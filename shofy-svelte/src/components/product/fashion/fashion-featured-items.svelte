<script lang="ts">
	import { onMount } from 'svelte';
	import { register, type SwiperContainer } from 'swiper/element/bundle';
	import product_data from '../../../data/product-data';
	import { formatPrice } from '$lib';
	import { SectionLineTwo, RightArrow, SliderNext, SliderPrev } from '../../svg'; // Replace with your SVG components

	// Register Swiper web components
	onMount(() => {
		register();
	});

	// Filter fashion products
	const fashion_prd = product_data.filter((p) => p.productType === 'fashion' && p.featured);

	let swiperEl: SwiperContainer;

	onMount(() => {
		if (swiperEl) {
			Object.assign(swiperEl, {
				breakpoints: {
					'1200': { slidesPerView: 3 },
					'992': { slidesPerView: 3 },
					'768': { slidesPerView: 2 },
					'576': { slidesPerView: 1 },
					'0': { slidesPerView: 1 }
				}
			});
			swiperEl.initialize();
		}
	});
</script>

<section class="tp-featured-slider-area grey-bg-6 fix pt-95 pb-120">
	<div class="container">
		<div class="row">
			<div class="col-xl-12">
				<div class="tp-section-title-wrapper-2 mb-50">
					<span class="tp-section-title-pre-2">
						Shop by Category
						<SectionLineTwo />
					</span>
					<h3 class="tp-section-title-2">This Week's Featured</h3>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xl-12">
				<div class="tp-featured-slider">
					<swiper-container
						slides-per-view="3"
						space-between="10"
            navigation-next-el=".tp-featured-slider-button-next"
            navigation-prev-el=".tp-featured-slider-button-prev"
						class="tp-featured-slider-active swiper-container"
						bind:this={swiperEl}
					>
						{#each fashion_prd as item}
							<swiper-slide key={item.id} class="tp-featured-item white-bg p-relative z-index-1">
								<div
									class="tp-featured-thumb include-bg"
									style="background-image: url({item.img})"
								></div>
								<div class="tp-featured-content">
									<h3 class="tp-featured-title">
										<a href={`/product-details/${item.id}`}>{item.title}</a>
									</h3>
									<div class="tp-featured-price-wrapper">
										{#if item.discount > 0}
											<span class="tp-featured-price old-price">
												{formatPrice(item.price, false)}
											</span>
											<span class="tp-featured-price new-price">
												{formatPrice(
													Number(item.price) - (Number(item.price) * Number(item.discount)) / 100
												)}
											</span>
										{:else}
											<span class="tp-featured-price new-price">
												{formatPrice(item.price)}
											</span>
										{/if}
									</div>
									<div class="tp-product-rating-icon tp-product-rating-icon-2">
										{#each Array(5) as _, i}
											<span><i class="fa-solid fa-star"></i></span>
										{/each}
									</div>
									<div class="tp-featured-btn">
										<a
											href={`/product-details/${item.id}`}
											class="tp-btn tp-btn-border tp-btn-border-sm"
										>
											Shop Now <RightArrow />
										</a>
									</div>
								</div>
							</swiper-slide>
						{/each}
					</swiper-container>
					<div class="tp-featured-slider-arrow mt-45">
						<button class="tp-featured-slider-button-prev">
							<SliderPrev />
						</button>
						<button class="tp-featured-slider-button-next">
							<SliderNext />
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
