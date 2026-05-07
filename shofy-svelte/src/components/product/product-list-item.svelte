<script lang="ts">
	import { formatPrice } from '$lib';
	import { addCartProduct,isItemInCart } from '../../store/cart-store';
	import { wishlistStore } from '../../store/wishlist-store';
	import { Wishlist, QuickView, CompareTwo } from '../svg';
	import type { IProduct } from '../../types/product-type';
	import { add_compare_product, isItemInCompare } from '../../store/compare-store';
	import { handleModalProduct } from '../../store/product-store';

	interface Props {
		item: IProduct;
	}
	let { item }: Props = $props();

	const itemInWishlist = wishlistStore.isItemInWishlist(item);
	const itemInCart = isItemInCart(item);
	const itemInCompare = isItemInCompare(item);
</script>

<div class="tp-product-list-item d-md-flex">
  <div class="tp-product-list-thumb p-relative fix">
    <a href={`/product-details/${item.id}`} style="height: 310px; background-color: #f2f3f5;">
      <img src={item.img} alt="product-img" />
    </a>

    <div class="tp-product-action-2 tp-product-action-blackStyle">
      <div class="tp-product-action-item-2 d-flex flex-column">
        <button onclick={() => handleModalProduct(item)} type="button" class="tp-product-action-btn-2 tp-product-quick-view-btn">
          <QuickView />
          <span class="tp-product-tooltip tp-product-tooltip-right">Quick View</span>
        </button>

        <button onclick={() => wishlistStore.addWishlistProduct(item)} type="button" class="tp-product-action-btn-2 tp-product-add-to-wishlist-btn" class:active={$itemInWishlist}>
          <Wishlist />
          <span class="tp-product-tooltip tp-product-tooltip-right">
            {$itemInWishlist ? 'Remove From Wishlist' : 'Add To Wishlist'}
          </span>
        </button>

        <button onclick={() => add_compare_product(item)} type="button" class="tp-product-action-btn-2 tp-product-add-to-compare-btn" class:active={$itemInCompare}>
          <CompareTwo />
          <span class="tp-product-tooltip tp-product-tooltip-right">
            {$itemInCompare ? 'Remove From Compare' : 'Add To Compare'}
          </span>
        </button>
      </div>
    </div>
  </div>

  <div class="tp-product-list-content">
    <div class="tp-product-content-2 pt-15">
      <div class="tp-product-tag-2">
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a href="#">{item.category.name}</a>
      </div>
      <h3 class="tp-product-title-2">
        <a href={`/product-details/${item.id}`}>{item.title}</a>
      </h3>
      <div class="tp-product-rating-icon tp-product-rating-icon-2">
        {#each Array(5) as _, i}
          <span><i class="fa-solid fa-star"></i></span>
        {/each}
      </div>

      <div class="tp-product-price-wrapper-2">
        {#if item.discount > 0}
          <span class="tp-product-price-2 new-price">
            {formatPrice(Number(item.price) - (Number(item.price) * Number(item.discount)) / 100)}
          </span>
          <span class="tp-product-price-2 old-price">
            {formatPrice(item.price, false)}
          </span>
        {:else}
          <span class="tp-product-price-2 new-price">{formatPrice(item.price)}</span>
        {/if}
      </div>

      <p>{item.description.slice(0, 100)}</p>
      <div class="tp-product-list-add-to-cart">
        {#if !$itemInCart}
          <button onclick={() => addCartProduct(item)} class="tp-product-list-add-to-cart-btn">
            Add To Cart
          </button>
        {:else}
          <a href="/cart" class="tp-product-list-add-to-cart-btn">View Cart</a>
        {/if}
      </div>
    </div>
  </div>
</div>
