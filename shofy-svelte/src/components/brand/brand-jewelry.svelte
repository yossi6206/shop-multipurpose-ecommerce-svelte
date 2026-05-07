<script lang="ts">
	import { onMount } from 'svelte';
	import { NextArrow, PrevArrow } from '../svg';
	import type { SwiperContainer } from 'swiper/element';

	let swiperEl: SwiperContainer | null = null;

	const brandData = [
		'/img/brand/logo_01.png',
		'/img/brand/logo_02.png',
		'/img/brand/logo_03.png',
		'/img/brand/logo_04.png',
		'/img/brand/logo_05.png',
		'/img/brand/logo_02.png',
		'/img/brand/logo_04.png'
	];

	onMount(() => {
		if (swiperEl) {
			Object.assign(swiperEl, {
				slidesPerView: 5,
				spaceBetween: 0,
				breakpoints: {
					992: { slidesPerView: 5 },
					768: { slidesPerView: 4 },
					576: { slidesPerView: 3 },
					0: { slidesPerView: 1 }
				}
			});
			swiperEl.initialize();
		}
	});
</script>

<section class="tp-brand-area pt-120">
	<div class="container">
		<div class="row">
			<div class="col-xl-12">
				<div class="tp-brand-slider p-relative">
					<swiper-container bind:this={swiperEl} navigation-next-el=".tp-brand-slider-button-next" navigation-prev-el=".tp-brand-slider-button-prev" class="tp-brand-slider-active swiper-container">
						{#each brandData as brand, i}
							<swiper-slide class="tp-brand-item text-center">
								<!-- svelte-ignore a11y_invalid_attribute -->
								<a href="#">
									<img src={brand} alt="brand" />
								</a>
							</swiper-slide>
						{/each}
					</swiper-container>

					<!-- Navigation Buttons -->
					<div class="tp-brand-slider-arrow">
						<button class="tp-brand-slider-button-prev">
							<PrevArrow />
						</button>
						<button class="tp-brand-slider-button-next">
							<NextArrow />
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
