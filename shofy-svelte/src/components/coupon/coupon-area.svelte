<script lang="ts">
  import coupon_data from "../../data/coupon-data";
  import CouponItem from "./coupon-item.svelte";
</script>

<!-- Breadcrumb Area Start -->
<section class="breadcrumb__area include-bg pt-95 pb-50">
  <div class="container">
    <div class="row">
      <div class="col-xxl-12">
        <div class="breadcrumb__content p-relative z-index-1">
          <h3 class="breadcrumb__title">Grab Best Offer</h3>
          <div class="breadcrumb__list">
            <span><a href="/">Home</a></span>
            <span>Coupon</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Breadcrumb Area End -->

<!-- Coupon Area Start -->
<div class="tp-coupon-area pb-120">
  <div class="container">
    <div class="row">
      {#each coupon_data as item (item.id)}
        <div class="col-xl-6">
          <CouponItem coupon={item} />
        </div>
      {/each}
    </div>
  </div>
</div>
<!-- Coupon Area End -->
