<script lang="ts">
	import { SmArrow } from "../svg";
	import CountdownTimer from "../common/countdown-timer.svelte";
</script>

<section class="tp-collection-area pt-120">
  <div class="container">
    <div class="row gx-2 gy-2 gy-md-0">
      <div class="col-xl-7 col-md-6">
        <div class="tp-collection-item tp-collection-height grey-bg p-relative z-index-1 fix">
          <div class="tp-collection-thumb include-bg include-bg transition-3" style="background-image: url(/img/product/collection/collection-1.jpg);"></div>
          <div class="tp-collection-content">
            <span>Cosmetics Collection</span>
            <h3 class="tp-collection-title">
              <a href="/shop">Foundation and <br /> powder brush</a>
            </h3>
            <div class="tp-collection-btn">
              <a href="/shop" class="tp-btn">Discover Now <SmArrow /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-5 col-md-6">
        <div class="tp-collection-item tp-collection-height grey-bg p-relative z-index-1 fix">
          <div class="tp-collection-thumb has-overlay include-bg transition-3" style="background-image: url(/img/product/collection/collection-2.jpg);"></div>
          <div class="tp-collection-content-1">
            <h3 class="tp-collection-title-1">
              <a href="/shop">Tops <br /> Blouse Shirts</a>
            </h3>
            <div class="tp-collection-btn-1">
              <a href="/shop" class="tp-link-btn-line">Shop Collection</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-3 col-lg-4 col-md-5">
        <div class="tp-collection-offer-wrapper mt-20">
          <p>Discover our Beauty Selection <span>75% Extra Discount</span> for your...</p>
        </div>
      </div>
      <div class="col-xl-3 col-lg-4 col-md-5">
        <div class="tp-collection-countdown d-flex align-items-center justify-content-center justify-content-md-start ml-20 mt-20">
          <div class="tp-product-countdown">
            <div class="tp-product-countdown-inner">
              <CountdownTimer endTime={new Date("2026-02-01T00:00:00")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
