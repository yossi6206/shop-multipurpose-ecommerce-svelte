<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element';
	import product_data from '../../../data/product-data';
	import { NextArrow, Plus, PrevArrow } from '../../svg';
	import BeautyProductItem from './beauty-product-item.svelte';

	let products = product_data.filter((p) => p.productType === 'beauty').slice(-4);

	onMount(() => {
		register();
	});
</script>

<section class="tp-special-area fix">
	<div class="container">
		<div class="row gx-2">
			<div class="col-xl-5 col-md-6">
				<div class="tp-special-slider-thumb">
					<div class="tp-special-thumb">
						<img src="/img/product/special/big/special-big-1.jpg" alt="special-big-img" />
						<div class="tp-special-hotspot-item tp-special-hotspot-1">
							<span class="tp-hotspot tp-pulse-border">
								<Plus />
							</span>
							<div class="tp-special-hotspot-content">
								<h3 class="tp-special-hotspot-title">Skincare Product</h3>
								<p>Lorem ipsum dolor sit amet consectetur.</p>
							</div>
						</div>
						<div class="tp-special-hotspot-item tp-special-hotspot-2">
							<span class="tp-hotspot tp-pulse-border">
								<Plus />
							</span>
							<div class="tp-special-hotspot-content">
								<h3 class="tp-special-hotspot-title">Skincare Product</h3>
								<p>Lorem ipsum dolor sit amet consectetur.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-7 col-md-6">
				<div class="tp-special-wrapper grey-bg-9 pt-85 pb-35">
					<div class="tp-section-title-wrapper-3 mb-40 text-center">
						<span class="tp-section-title-pre-3">Trending This Week’s</span>
						<h3 class="tp-section-title-3">Special products</h3>
					</div>
					<div class="tp-special-slider">
						<div class="row gx-0 justify-content-center">
							<div class="col-xl-5 col-lg-7 col-md-9 col-sm-7">
								<div class="tp-special-slider-inner p-relative">
									<swiper-container
										slides-per-view="1"
										space-between="0"
										effect="fade"
										navigation-next-el=".tp-special-slider-button-next"
										navigation-prev-el=".tp-special-slider-button-prev"
										class="tp-special-slider-active"
									>
										{#each products as item}
											<swiper-slide class="tp-special-item grey-bg-9">
												<BeautyProductItem {item} isCenter={true} />
											</swiper-slide>
										{/each}
									</swiper-container>
									<div class="tp-special-arrow d-none d-sm-block">
										<button class="tp-special-slider-button-prev">
											<PrevArrow />
										</button>
										<button class="tp-special-slider-button-next">
											<NextArrow />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
