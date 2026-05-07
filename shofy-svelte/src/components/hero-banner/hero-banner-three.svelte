<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import { Cosmetic, MakeUp, SliderNextTwo, SliderPrevTwo, VeganPrd } from '../svg';

	// Register Swiper custom elements
	onMount(() => {
		register();
	});

	// Slider data type
	type ISlider = {
		id: number;
		bg: string;
		subtitle: string;
		title: string;
	};

	// Slider data
	const slider_data: ISlider[] = [
		{
			id: 1,
			bg: '/img/slider/3/slider-1.jpg',
			subtitle: 'Winter Collection 2023',
			title: 'Be your kind of beauty'
		},
		{
			id: 2,
			bg: '/img/slider/3/slider-2.jpg',
			subtitle: 'Top Brand Collection',
			title: 'Use the best for you.'
		},
		{
			id: 3,
			bg: '/img/slider/3/slider-3.jpg',
			subtitle: 'Awesome Beauty Products',
			title: "Don't Worry for Skincare"
		}
	];
</script>

<section class="tp-slider-area p-relative z-index-1">
	<swiper-container
		slides-per-view="1"
		space-between="30"
		effect="fade"
		navigation-next-el=".tp-slider-3-button-next"
		navigation-prev-el=".tp-slider-3-button-prev"
		class="tp-slider-active-3 swiper-container"
	>
		{#each slider_data as item}
			<swiper-slide
				key={item.id}
				class="tp-slider-item-3 tp-slider-height-3 p-relative swiper-slide black-bg d-flex align-items-center"
			>
				<div class="tp-slider-thumb-3 include-bg" style="background-image: url({item.bg})"></div>
				<div class="container">
					<div class="row align-items-center">
						<div class="col-xl-6 col-lg-6 col-md-8">
							<div class="tp-slider-content-3">
								<span>{item.subtitle}</span>
								<h3 class="tp-slider-title-3">{item.title}</h3>
								<div
									class="tp-slider-feature-3 d-flex flex-wrap align-items-center p-relative z-index-1 mb-15"
								>
									<div class="tp-slider-feature-item-3 d-flex mb-30">
										<div class="tp-slider-feature-icon-3">
											<span>
												<Cosmetic />
											</span>
										</div>
										<div class="tp-slider-feature-content-3">
											<h3 class="tp-slider-feature-title-3">
												High-end <br /> Cosmetics
											</h3>
										</div>
									</div>
									<div class="tp-slider-feature-item-3 d-flex mb-30">
										<div class="tp-slider-feature-icon-3">
											<span>
												<VeganPrd />
											</span>
										</div>
										<div class="tp-slider-feature-content-3">
											<h3 class="tp-slider-feature-title-3">
												Vegan <br /> Product
											</h3>
										</div>
									</div>
									<div class="tp-slider-feature-item-3 d-flex mb-30">
										<div class="tp-slider-feature-icon-3">
											<span>
												<MakeUp />
											</span>
										</div>
										<div class="tp-slider-feature-content-3">
											<h3 class="tp-slider-feature-title-3">
												Express <br /> Make-up
											</h3>
										</div>
									</div>
								</div>
								<div class="tp-slider-btn-3">
									<a href="/shop" class="tp-btn tp-btn-border tp-btn-border-white">
										Discover Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</swiper-slide>
		{/each}

		<!-- Dot style -->
		<div class="tp-swiper-dot tp-slider-3-dot d-sm-none"></div>

		<!-- Arrow style -->
		<div class="tp-slider-arrow-3 d-none d-sm-block">
			<button type="button" class="tp-slider-3-button-prev">
				<SliderPrevTwo />
			</button>
			<button type="button" class="tp-slider-3-button-next">
				<SliderNextTwo />
			</button>
		</div>
	</swiper-container>
</section>
