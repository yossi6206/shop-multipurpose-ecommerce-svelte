<script lang="ts">
	import 'swiper/element/bundle';
  import { formatPrice } from '$lib';

  // Data
  const bannerProducts = [
    {
      id: 1,
      banner_bg_txt: "טאבלט",
      subtitle: "אוסף טאבלטים 2023",
      title: "Galaxy Tab S6 Lite טאבלט אנדרואיד",
      oldPrice: 320,
      newPrice: 288,
      img: "/img/banner/banner-slider-1.png",
    },
    {
      id: 2,
      banner_bg_txt: "טאבלט",
      subtitle: "אוסף טאבלטים 2023",
      title: "Galaxy Tab S6 Lite טאבלט אנדרואיד",
      oldPrice: 320,
      newPrice: 288,
      img: "/img/banner/banner-slider-2.png",
    },
    {
      id: 3,
      banner_bg_txt: "טאבלט",
      subtitle: "אוסף טאבלטים 2023",
      title: "Galaxy Tab S6 Lite טאבלט אנדרואיד",
      oldPrice: 320,
      newPrice: 288,
      img: "/img/banner/banner-slider-3.png",
    },
  ];

</script>

<div class="tp-product-banner-area pb-90">
  <div class="container">
    <div class="tp-product-banner-slider fix">
      <swiper-container
        slides-per-view="1"
        space-between="0"
        effect="fade"
        pagination-el=".tp-product-banner-slider-dot"
        pagination-clickable={true}
        class="tp-product-banner-slider-active swiper-container"
      >
        {#each bannerProducts as item, i}
          <swiper-slide
            class="tp-product-banner-inner theme-bg p-relative z-index-1 fix"
          >
            <h4 class="tp-product-banner-bg-text">{item.banner_bg_txt}</h4>
            <div class="row align-items-center">
              <div class="col-xl-6 col-lg-6">
                <div class="tp-product-banner-content p-relative z-index-1">
                  <span class="tp-product-banner-subtitle">
                    {item.subtitle}
                  </span>
                  <h3 class="tp-product-banner-title">
                    {item.title}
                  </h3>
                  <div class="tp-product-banner-price mb-40">
                    <span class="old-price">{formatPrice(item.oldPrice)}</span>
                    <p class="new-price">{formatPrice(item.newPrice)}</p>
                  </div>
                  <div class="tp-product-banner-btn">
                    <a href="/shop" class="tp-btn tp-btn-2">לקנייה</a>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="tp-product-banner-thumb-wrapper p-relative">
                  <div class="tp-product-banner-thumb-shape">
                    <span class="tp-product-banner-thumb-gradient"></span>
                    <img
                      class="tp-offer-shape"
                      src="/img/banner/banner-slider-offer.png"
                      alt="offer-shape"
                    />
                  </div>

                  <div
                    class="tp-product-banner-thumb text-end p-relative z-index-1"
                  >
                    <img src={item.img} alt="slider-img" />
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        {/each}
        <div class="tp-product-banner-slider-dot tp-swiper-dot"></div>
      </swiper-container>
    </div>
  </div>
</div>
