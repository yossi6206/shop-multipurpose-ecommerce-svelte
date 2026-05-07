<script lang="ts">
  import dayjs from "dayjs";
	import CountdownTimer from "../common/countdown-timer.svelte";
	import type { ICoupon } from "../../types/coupon-type";
	import { InfoIcon } from "../svg";

  const {coupon}:{coupon: ICoupon} = $props();

  let copiedMessage = $state('');
  

  // Copy function
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(coupon.couponCode);
      copiedMessage = "Copied!";
      setTimeout(() => (copiedMessage = ""), 6000);
    } catch (e) {
      console.error("Failed to copy:", e);
    }
  };
</script>

<div class="tp-coupon-item mb-30 p-relative d-md-flex justify-content-between align-items-center">
  <span class="tp-coupon-border"></span>
  <div class="tp-coupon-item-left d-sm-flex align-items-center">
    <div class="tp-coupon-thumb">
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="#">
        <img alt="logo" src={coupon.logo} style="background-color: #f2f3f5" />
      </a>
    </div>
    <div class="tp-coupon-content">
      <h3 class="tp-coupon-title">{coupon.title}</h3>
      <p class="tp-coupon-offer mb-15">
        <span>{coupon.discountPercentage}%</span> Off
      </p>
      <div class="tp-coupon-countdown">
        <div class="tp-coupon-countdown-inner">
          <CountdownTimer endTime={new Date(coupon.endTime)} />
        </div>
      </div>
    </div>
  </div>
  <div class="tp-coupon-item-right pl-20">
    <div class="tp-coupon-status mb-10 d-flex align-items-center">
      <h4>
        Coupon
        <span class={dayjs().isAfter(dayjs(coupon.endTime)) ? 'in-active' : 'active'}>
          {dayjs().isAfter(dayjs(coupon.endTime)) ? "Inactive" : "Active"}
        </span>
      </h4>
      <div class="tp-coupon-info-details">
        <span><InfoIcon/></span>
        <div class="tp-coupon-info-tooltip transition-3">
          <p>
            *This coupon code will apply on
            <span class="text-capitalize">{coupon.productType}</span> and when you shop more than
            <span>${coupon.minimumAmount}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="tp-coupon-date">
      <button onclick={copyToClipboard}>
        <span>{copiedMessage || coupon.couponCode}</span>
      </button>
    </div>
  </div>
</div>

