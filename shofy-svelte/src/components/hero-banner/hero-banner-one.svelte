<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import SvgOfferLine from '../svg/offer-line.svelte';
	import SvgRightArrow from '../svg/arrow/right-arrow.svelte';
	import SvgPrevArrow from '../svg/arrow/prev-arrow.svelte';
	import SvgNextArrow from '../svg/arrow/next-arrow.svelte';
	import { formatPrice } from '$lib';

	// Slider data
	const sliderData = [
		{
			id: 1,
			pre_title: { text: 'החל מ-', price: 274 },
			title: 'אוסף הטאבלטים הטוב ביותר 2023',
			subtitle: {
				text_1: 'מבצע בלעדי ',
				percent: 35,
				text_2: 'הנחה השבוע'
			},
			img: '/img/slider/slider-img-1-new.png',
			green_bg: true
		},
		{
			id: 2,
			pre_title: { text: 'החל מ-', price: 999 },
			title: 'אוסף המחשבים הניידים הטוב ביותר 2023',
			subtitle: {
				text_1: 'מבצע בלעדי ',
				percent: 10,
				text_2: 'הנחה השבוע'
			},
			img: '/img/slider/slider-img-2-new.png',
			green_bg: true
		},
		{
			id: 3,
			pre_title: { text: 'החל מ-', price: 999 },
			title: 'אוסף המחשבים הניידים הטוב ביותר 2023',
			subtitle: {
				text_1: 'מבצע בלעדי ',
				percent: 10,
				text_2: 'הנחה השבוע'
			},
			img: '/img/slider/slider-img-3-new.png',
			is_light: true
		}
	];

	// Reactive variable for active state
	let isActive = $state(false);

	// Function to handle active index change
	const handleActiveIndex = (index: number) => {
		if (index === 2) {
			isActive = true;
		} else {
			isActive = false;
		}
	};

	let swiperEl: any;

	onMount(() => {
		register();
		if (swiperEl) {
			swiperEl?.swiper?.on('slideChange', () => {
				console.log(swiperEl.swiper.activeIndex,'activeIndex');
				handleActiveIndex(swiperEl.swiper?.activeIndex);
			});
		}
	});
</script>

<section class="tp-slider-area p-relative z-index-1">
	<swiper-container
		slides-per-view="1"
		space-between="30"
		loop="false"
		navigation-next-el=".tp-slider-button-next"
		navigation-prev-el=".tp-slider-button-prev"
		pagination-el=".tp-slider-dot"
		pagination-clickable="true"
		effect="fade"
		class="tp-slider-active tp-slider-variation swiper-container {isActive ? 'is-light' : ''}"
		bind:this={swiperEl}
	>
		{#each sliderData as item, i}
			<swiper-slide
				class="tp-slider-item tp-slider-height d-flex align-items-center {item?.green_bg
					? 'green-dark-bg'
					: item?.is_light
						? 'is-light'
						: ''}"
				style={item.is_light && 'background-color: #E3EDF6'}
			>
				<div class="tp-slider-shape">
					<img
						class="tp-slider-shape-1"
						src="/img/slider/shape/slider-shape-1.png"
						alt="slider-shape"
					/>
					<img
						class="tp-slider-shape-2"
						src="/img/slider/shape/slider-shape-2.png"
						alt="slider-shape"
					/>
					<img
						class="tp-slider-shape-3"
						src="/img/slider/shape/slider-shape-3.png"
						alt="slider-shape"
					/>
					<img
						class="tp-slider-shape-4"
						src="/img/slider/shape/slider-shape-4.png"
						alt="slider-shape"
					/>
				</div>
				<div class="container">
					<div class="row align-items-center">
						<div class="col-xl-5 col-lg-6 col-md-6">
							<div class="tp-slider-content p-relative z-index-1">
								<span>
									{item.pre_title.text} <b>{formatPrice(item.pre_title.price)}</b>
								</span>
								<h3 class="tp-slider-title">{item.title}</h3>
								<p>
									{item.subtitle.text_1}
									<span>-{item.subtitle.percent}% <SvgOfferLine /></span>
									{item.subtitle.text_2}
								</p>
								<div class="tp-slider-btn">
									<a href="/shop" class="tp-btn tp-btn-2 tp-btn-white">
										לקנייה <SvgRightArrow />
									</a>
								</div>
							</div>
						</div>
						<div class="col-xl-7 col-lg-6 col-md-6">
							<div class="tp-slider-thumb text-end">
								<img src={item.img} alt="slider-img" />
							</div>
						</div>
					</div>
				</div>
			</swiper-slide>
		{/each}
		<div class="tp-slider-arrow tp-swiper-arrow d-none d-lg-block">
			<button type="button" class="tp-slider-button-prev">
				<SvgPrevArrow />
			</button>
			<button type="button" class="tp-slider-button-next">
				<SvgNextArrow />
			</button>
		</div>
		<div class="tp-slider-dot tp-swiper-dot"></div>
	</swiper-container>
</section>
