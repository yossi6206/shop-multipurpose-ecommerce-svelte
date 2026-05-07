<script lang="ts">
  import { onMount } from 'svelte';
  import { register } from 'swiper/element/bundle';

  // Register Swiper web components
  onMount(() => {
    register();
  });

  // Slider data type
  type ISliderData = {
    id: number;
    subtitle: string;
    title: string;
    img: string;
  };

  // Slider data
  const slider_data: ISliderData[] = [
    {
      id: 1,
      subtitle: "New Arrivals 2023",
      title: "The Clothing Collection",
      img: "/img/slider/2/slider-1.png",
    },
    {
      id: 2,
      subtitle: "Best Selling 2023",
      title: "The Summer Collection",
      img: "/img/slider/2/slider-2.png",
    },
    {
      id: 3,
      subtitle: "Winter Has Arrived",
      title: "Amazing New designs",
      img: "/img/slider/2/slider-3.png",
    },
  ];
</script>

<section class="tp-slider-area p-relative z-index-1">
  <swiper-container
    slides-per-view="1"
    space-between="30"
    navigation-next-el=".tp-slider-2-button-next"
    navigation-prev-el=".tp-slider-2-button-prev"
    pagination-el=".tp-slider-2-dot"
    pagination-clickable="true"
    effect="fade"
    class="tp-slider-active-2 swiper-container"
  >
    {#each slider_data as item}
      <swiper-slide
        key={item.id}
        class="tp-slider-item-2 tp-slider-height-2 p-relative grey-bg-5 d-flex align-items-end"
      >
        <div class="tp-slider-2-shape">
          <img
            class="tp-slider-2-shape-1"
            src="/img/slider/2/shape/shape-1.png"
            alt="shape"
          />
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="tp-slider-content-2">
                <span>{item.subtitle}</span>
                <h3 class="tp-slider-title-2">{item.title}</h3>
                <div class="tp-slider-btn-2">
                  <a href="/shop" class="tp-btn tp-btn-border">Shop Collection</a>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="tp-slider-thumb-2-wrapper p-relative">
                <div class="tp-slider-thumb-2-shape">
                  <img
                    class="tp-slider-thumb-2-shape-1"
                    src="/img/slider/2/shape/shape-2.png"
                    alt="shape"
                  />
                  <img
                    class="tp-slider-thumb-2-shape-2"
                    src="/img/slider/2/shape/shape-3.png"
                    alt="shape"
                  />
                </div>
                <div class="tp-slider-thumb-2 text-end">
                  <span class="tp-slider-thumb-2-gradient"></span>
                  <img src={item.img} alt="main-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    {/each}
    <div class="tp-swiper-dot tp-slider-2-dot"></div>
  </swiper-container>
</section>

