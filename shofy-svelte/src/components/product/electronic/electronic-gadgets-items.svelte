<script lang="ts">
	import { onMount } from 'svelte';
	import { RightArrowTwo } from '../../svg';
	import product_data from '../../../data/product-data';
	import ProductElectronicItem from './electronic-item.svelte';
	import type { SwiperContainer } from 'swiper/element';

	const bannerData = [
		{
			bg: '/img/product/gadget/gadget-banner-home.png',
			title: 'מוצרי חידוש <br /> נבחרים',
			price: 99
		},
		{
			bg: '/img/product/gadget/gadget-banner-home-2.png',
			title: 'מוצרים <br /> מדורגים עליונים',
			price: 55
		}
	];

	let swiperEl: SwiperContainer;

	const formatHebrewPrice = (price: number) =>
		new Intl.NumberFormat('he-IL', {
			style: 'currency',
			currency: 'ILS',
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		}).format(price);

	onMount(() => {
		if (swiperEl) {
			Object.assign(swiperEl, {
				slidesPerView: 1,
				spaceBetween: 0,
				loop: false,
        effect: 'fade',
			});
			swiperEl.initialize();
		}
	});
</script>

<section class="tp-product-gadget-area pt-80 pb-75" dir="rtl">
	<div class="container">
		<div class="row">
			<div class="col-xl-4 col-lg-5">
				<div class="tp-product-gadget-sidebar mb-40">
					<div class="tp-product-gadget-categories p-relative fix mb-10">
						<div class="tp-product-gadget-thumb">
							<img src="/img/product/gadget/gadget-girl.png" alt="Gadget Girl" />
						</div>
						<h3 class="tp-product-gadget-categories-title">
							גאדג'טים <br />
							אלקטרוניים
						</h3>

						<div class="tp-product-gadget-categories-list">
							<ul>
								<li><a href="/shop">מיקרוסקופ</a></li>
								<li><a href="/shop">שלט רחוק</a></li>
								<li><a href="/shop">מסך</a></li>
								<li><a href="/shop">מדחום</a></li>
								<li><a href="/shop">תיק גב</a></li>
								<li><a href="/shop">אוזניות</a></li>
							</ul>
						</div>

						<div class="tp-product-gadget-btn">
							<a href="/shop" class="tp-link-btn">
								מוצרים נוספים
								<RightArrowTwo />
							</a>
						</div>
					</div>

					<div class="tp-product-gadget-banner p-relative">
						<swiper-container
              pagination-el=".tp-product-gadget-banner-slider-dot"
              pagination-clickable={true}
							class="tp-product-gadget-banner-slider-active swiper-container"
							bind:this={swiperEl}
						>
							{#each bannerData as item}
								<swiper-slide
									class="tp-product-gadget-banner-item include-bg"
									style="background-image: url({item.bg})"
								>
									<div class="tp-product-gadget-banner-content">
										<span class="tp-product-gadget-banner-price">
											רק {formatHebrewPrice(item.price)}
										</span>
										<h3 class="tp-product-gadget-banner-title">
											<a href="/shop">{@html item.title}</a>
										</h3>
									</div>
								</swiper-slide>
							{/each}
						</swiper-container>
						<div class="tp-product-gadget-banner-slider-dot tp-swiper-dot"></div>
					</div>
				</div>
			</div>

			<div class="col-xl-8 col-lg-7">
				<div class="tp-product-gadget-wrapper">
					<div class="row">
						{#each product_data.slice(0, 6) as item}
							<div class="col-xl-4 col-sm-6">
								<ProductElectronicItem {item} />
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
