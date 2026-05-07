<script lang="ts">
  import { onMount } from "svelte";
  import "swiper/element/bundle"; // Import Swiper Web Components
	import { register } from "swiper/element/bundle";
	import { PauseIcon, VideoPlay } from "../svg";

  let mainSwiper: HTMLElement | null = null;
  let thumbSwiper: HTMLElement | null = null;
  let play = false;

  // Handle setting the thumbs Swiper instance
  const handleThumbsSwiper = (event: CustomEvent) => {
    thumbSwiper = event.detail[0] as HTMLElement; // Type assertion
  };

  // Handle video play/pause
  const handleVideoPlay = () => {
    const videos: NodeListOf<HTMLVideoElement> = document.querySelectorAll(".tp-slider-video video");
    play = !play;
    videos.forEach(video => {
      play ? video.play() : video.pause();
    });
  };

  // Type definitions for data
  type SliderItem = {
    subtitle: string;
    title: string;
    img: string;
    videoSrc?: string;
  };

  type NavItem = {
    icon: string;
    title: string;
  };

  // Slider data
  const slider_data: SliderItem[] = [
    { subtitle: "The original", title: "Shine bright", img: "/img/slider/4/slider-1.png", videoSrc: "https://html.hixstudio.net/videos/shofy/jewellery-1.mp4" },
    { subtitle: "The original", title: "Creative Design", img: "/img/slider/4/slider-2.png", videoSrc: "https://html.hixstudio.net/videos/shofy/jewellery-1.mp4" },
    { subtitle: "The original", title: "Gold Plated", img: "/img/slider/4/slider-3.png", videoSrc: "https://html.hixstudio.net/videos/shofy/jewellery-1.mp4" },
    { subtitle: "The original", title: "Unique shapes", img: "/img/slider/4/slider-4.png", videoSrc: "https://html.hixstudio.net/videos/shofy/jewellery-1.mp4" },
  ];

  // Slider navigation data
  const slider_nav_data: NavItem[] = [
    { icon: "/img/slider/4/nav/icon-1.png", title: "Ring <br />& Earring" },
    { icon: "/img/slider/4/nav/icon-2.png", title: "Bangles & <br />Bracelets" },
    { icon: "/img/slider/4/nav/icon-3.png", title: "Drop <br /> Necklaces" },
    { icon: "/img/slider/4/nav/icon-4.png", title: "Diamond <br /> Necklaces" },
  ];

  onMount(() => {
    register();
  });
</script>

<section class="tp-slider-area p-relative z-index-1 fix">
  <!-- Main Swiper -->
  <swiper-container
    bind:this={mainSwiper}
    slides-per-view="1"
    space-between="0"
    effect="fade"
    thumbs-swiper=".tp-slider-nav-active"
    class="tp-slider-active-4 khaki-bg text-start"
  >
    {#each slider_data as item, i}
      <swiper-slide class="tp-slider-item-4 tp-slider-height-4 p-relative khaki-bg d-flex align-items-center">
        <div class="tp-slider-thumb-4">
          <img src={item.img} alt="slider-img" />
          <div class="tp-slider-thumb-4-shape">
            <span class="tp-slider-thumb-4-shape-1"></span>
            <span class="tp-slider-thumb-4-shape-2"></span>
          </div>
        </div>

        <div class="tp-slider-video-wrapper">
          <!-- Video -->
          <div class="tp-slider-video transition-3 {play ? 'full-width' : ''}">
            <!-- svelte-ignore a11y_media_has_caption -->
            <video loop>
              <source type="video/mp4" src={item.videoSrc} />
            </video>
          </div>
          <!-- Video Play Button -->
          <div class="tp-slider-play">
            <button
              type="button"
              class="tp-slider-play-btn tp-slider-video-move-btn tp-video-toggle-btn {play ? 'hide' : ''}"
              onclick={handleVideoPlay}
            >
              <img class="text-shape" src="/img/slider/4/shape/rounded-test.png" alt="shape" />
              <span class="play-icon"><VideoPlay/></span>
              <span class="pause-icon"><PauseIcon/></span>
            </button>
          </div>
        </div>

        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-8">
              <div class="tp-slider-content-4 p-relative z-index-1">
                <span>{item.subtitle}</span>
                <h3 class="tp-slider-title-4">{item.title}</h3>

                <div class="tp-slider-btn-4">
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
  </swiper-container>

  <!-- Navigation Swiper -->
  <div class="tp-slider-nav">
    <swiper-container
      class="tp-slider-nav-active"
      bind:this={thumbSwiper}
      slides-per-view="3"
      space-between="10"
      free-mode="true"
      watch-slides-progress="true"
      direction="vertical"
    >
      {#each slider_nav_data as item, i}
        <swiper-slide class="tp-slider-nav-item d-flex align-items-center mb-0">
          <div class="tp-slider-nav-icon">
            <span><img src={item.icon} alt="icon" /></span>
          </div>
          <div class="tp-slider-nav-content">
            <h3 class="tp-slider-nav-title">{@html item.title}</h3>
          </div>
        </swiper-slide>
      {/each}
    </swiper-container>
  </div>
</section>
