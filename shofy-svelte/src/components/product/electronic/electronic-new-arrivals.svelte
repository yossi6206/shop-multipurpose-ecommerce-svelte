<script lang="ts">
  import { onMount } from 'svelte';
  import { register, type SwiperContainer } from 'swiper/element/bundle';
  import product_data from '../../../data/product-data';
  import ProductElectronicItem from './electronic-item.svelte';
  import {PrevArrow, NextArrow,SectionLine} from '../../svg';

  // Register Swiper web component
  onMount(() => {
    register();
  });

  // Filter new arrivals
  const new_arrivals = product_data.filter(p => p.productType === 'electronics').slice(-5);
  let swiperEl: SwiperContainer;
  onMount(() => {
		if (swiperEl) {
			Object.assign(swiperEl, {
				breakpoints: {
					1200: { slidesPerView: 4 },
					992: { slidesPerView: 3 },
					768: { slidesPerView: 2 },
					576: { slidesPerView: 2 },
					0: { slidesPerView: 1 }
				}
			});
			swiperEl.initialize();
		}
	});
</script>

<section class="tp-product-arrival-area pb-55">
  <div class="container">
    <div class="row align-items-end">
      <div class="col-xl-5 col-sm-6">
        <div class="tp-section-title-wrapper mb-40">
          <h3 class="tp-section-title">
            הגיעו חדשים
            <SectionLine />
          </h3>
        </div>
      </div>
      <div class="col-xl-7 col-sm-6">
        <div class="tp-product-arrival-more-wrapper d-flex justify-content-end">
          <div class="tp-product-arrival-arrow tp-swiper-arrow mb-40 text-end tp-product-arrival-border">
            <button type="button" class="tp-arrival-slider-button-prev me-2">
              <PrevArrow />
            </button>
            <button type="button" class="tp-arrival-slider-button-next">
              <NextArrow />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">
        <div class="tp-product-arrival-slider fix">
          <swiper-container
            slides-per-view="4"
            space-between="30"
            navigation-next-el=".tp-arrival-slider-button-next"
            navigation-prev-el=".tp-arrival-slider-button-prev"
            bind:this={swiperEl}
          >
            {#each new_arrivals as item, i}
              <swiper-slide key={i}>
                <ProductElectronicItem {item} />
              </swiper-slide>
            {/each}
          </swiper-container>
        </div>
      </div>
    </div>
  </div>
</section>

