<script lang="ts">
  let { star, width }:{ star: number; width: number} = $props();
</script>

<div class="tp-product-details-review-rating-item d-flex align-items-center">
  <span>{star} כוכבים</span>
  <div class="tp-product-details-review-rating-bar">
    <span
      class="tp-product-details-review-rating-bar-inner"
      data-width="{width}%"
      style="width: {width}%;"
    ></span>
  </div>
  <div class="tp-product-details-review-rating-percent">
    <span>{width}%</span>
  </div>
</div>
