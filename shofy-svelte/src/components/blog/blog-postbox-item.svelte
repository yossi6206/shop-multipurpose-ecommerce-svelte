<script lang="ts">
  import { onMount } from 'svelte';
  import { register } from 'swiper/element/bundle';
	import type { IBlogType } from '../../types/blog-type';

  // Register Swiper custom elements
  onMount(() => {
    register();
  });

  // Define props
  const {item}:{item:IBlogType} = $props();
</script>

<!-- svelte-ignore a11y_invalid_attribute -->

<article class="tp-postbox-item format-image mb-50 transition-3">
  {#if !item.blockquote && !item.video && !item.audio && !item.slider}
    <div class="tp-postbox-thumb w-img">
      <a href={`/blog-details/${item.id}`}>
        <img src={item.img} alt="blog img" />
      </a>
    </div>
  {/if}

  {#if item.video && item.video_id}
    <div class="tp-postbox-thumb tp-postbox-video w-img p-relative">
      <a href={`/blog-details/${item.id}`}>
        <img src={item.img} alt="blog img" />
      </a>
      <!-- svelte-ignore a11y_missing_attribute -->
      <a class="pointer tp-postbox-video-btn popup-video" aria-label="Play video">
        <i class="fas fa-play"></i>
      </a>
    </div>
  {/if}

  {#if item.audio}
    <div class="tp-postbox-thumb tp-postbox-audio w-img p-relative">
      <iframe title="audio" allow="autoplay" src={item.audio_id}></iframe>
    </div>
  {/if}

  {#if item.slider && item.slider_images}
    <div class="tp-postbox-thumb tp-postbox-slider swiper-container w-img p-relative">
      <swiper-container slides-per-view="1" space-between="0" navigation-next-el=".tp-postbox-slider-button-next" navigation-prev-el=".tp-postbox-slider-button-prev">
        {#each item.slider_images as img, i}
          <swiper-slide key={i} class="tp-postbox-slider-item">
            <img src={img} alt="slider img" />
          </swiper-slide>
        {/each}
      </swiper-container>
      <div class="tp-postbox-nav">
        <button class="tp-postbox-slider-button-next" aria-label="Next">
          <i class="fal fa-arrow-right"></i>
        </button>
        <button class="tp-postbox-slider-button-prev" aria-label="Previous">
          <i class="fal fa-arrow-left"></i>
        </button>
      </div>
    </div>
  {/if}

  {#if !item.blockquote}
    <div class="tp-postbox-content">
      <div class="tp-postbox-meta">
        <span>
          <i class="far fa-calendar-check"></i> {item.date}
        </span>
        <span>
          <a href="#">
            <i class="far fa-user"></i> {item.author}
          </a>
        </span>
        <span>
          <a href="#">
            <i class="fal fa-comments"></i> {item.comments} Comments
          </a>
        </span>
      </div>
      <h3 class="tp-postbox-title">
        <a href={`/blog-details/${item.id}`}>{item.title}</a>
      </h3>
      <div class="tp-postbox-text">
        <p>{item.desc} […]</p>
      </div>
      <div class="tp-postbox-read-more">
        <a href={`/blog-details/${item.id}`} class="tp-btn">Read More</a>
      </div>
    </div>
  {/if}

  {#if item.blockquote}
    <div class="tp-postbox-quote">
      <blockquote>
        <p>{item.title}<cite>{item.author}</cite></p>
      </blockquote>
    </div>
  {/if}
</article>

