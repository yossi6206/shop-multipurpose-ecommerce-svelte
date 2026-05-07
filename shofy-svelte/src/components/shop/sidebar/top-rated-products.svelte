<script lang="ts">
  import { formatPrice } from "$lib";
	import { Rating } from "../../svg";
  import productData from "../../../data/product-data";
	import type { IProduct } from "../../../types/product-type";
  

  // Compute top-rated products
  let topRatedProducts = productData
    .map((product: IProduct) => {
      if (product.reviews && product.reviews.length > 0) {
        const totalRating = product.reviews.reduce((sum, review) => sum + review.rating, 0);
        const averageRating = totalRating / product.reviews.length;

        return { product, rating: parseFloat(averageRating.toFixed(1)) };
      }
      return undefined;
    })
    .filter((product): product is { product: IProduct; rating: number } => product !== undefined)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
</script>

<div class="tp-shop-widget-content">
  <div class="tp-shop-widget-product">
    {#each topRatedProducts as { product, rating }}
      <div class="tp-shop-widget-product-item d-flex align-items-center">
        <div class="tp-shop-widget-product-thumb">
          <a href={`/product-details/${product.id}`}>
            <img src={product.img} alt="product-img" />
          </a>
        </div>
        <div class="tp-shop-widget-product-content">
          <div class="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
            <div class="tp-shop-widget-product-rating">
              {#each Array(5) as _, i}
                <Rating clr="#ffb21d" />
              {/each}
            </div>
            <div class="tp-shop-widget-product-rating-number">
              <span>({rating})</span>
            </div>
          </div>
          <h4 class="tp-shop-widget-product-title">
            <a href={`/product-details/${product.id}`}>{product.title}</a>
          </h4>
          <div class="tp-shop-widget-product-price-wrapper">
            <span class="tp-shop-widget-product-price">{formatPrice(product.price)}</span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
