<script lang="ts">
  import { formatPrice } from "$lib";
	import type { IProduct } from "../../../types/product-type";
  let { item }:{item: IProduct} = $props();
</script>

<div class="tp-product-sm-item d-flex align-items-center">
  <div class="tp-product-thumb ml-25 fix">
    <a href={`/product-details/${item.id}`}>
      <img src={item.img} alt="product-img" width="140" height="140" />
    </a>
  </div>
  <div class="tp-product-sm-content">
    <div class="tp-product-category">
      <a href={`/product-details/${item.id}`}>{item.category.name}</a>
    </div>
    <h3 class="tp-product-title">
      <a href={`/product-details/${item.id}`}>{item.title}</a>
    </h3>
    <div class="tp-product-rating d-sm-flex align-items-center">
      <div class="tp-product-rating-icon">
        {#each Array(5) as _}
          <span><i class="fa-solid fa-star"></i></span>
        {/each}
      </div>
      <div class="tp-product-rating-text">
        <span>({item.reviews?.length || 0} ביקורות)</span>
      </div>
    </div>
    <div class="tp-product-price-wrapper">
      {#if item.discount > 0}
        <span class="tp-product-price">
          {formatPrice(item.price - (item.price * item.discount) / 100)}
        </span>
      {:else}
        <span class="tp-product-price">{formatPrice(item.price)}</span>
      {/if}
    </div>
  </div>
</div>
