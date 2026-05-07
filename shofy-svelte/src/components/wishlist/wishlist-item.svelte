<script lang="ts">
  import { calculateDiscountPrice, formatPrice } from '$lib';
	import type { IProduct } from '../../types/product-type';
	import { Remove } from '../svg';
	import { addCartProduct } from '../../store/cart-store';
	import { wishlistStore } from '../../store/wishlist-store';

	let { item }: { item: IProduct } = $props();
</script>

<tr>
  <!-- Image -->
  <td class="tp-cart-img">
    <a href={`/product-details/${item.id}`} style="background-color: #F2F3F5; display: block;">
      <img src={item.img} alt="cart-img" />
    </a>
  </td>

  <!-- Title -->
  <td class="tp-cart-title">
    <a href={`/product-details/${item.id}`}>{item.title}</a>
  </td>

  <!-- Price -->
  <td class="tp-cart-price">
    <span>{formatPrice(calculateDiscountPrice(item.price, item.discount))}</span>
  </td>

  <!-- Add to Cart -->
  <td class="tp-cart-add-to-cart">
    <button onclick={() => addCartProduct(item)} type="button" class="tp-btn tp-btn-2 tp-btn-blue">
      Add To Cart
    </button>
  </td>

  <!-- Remove from Wishlist -->
  <td class="tp-cart-action">
    <button class="tp-cart-action-btn" onclick={() => wishlistStore.removeWishlistProduct(item)}>
      <Remove />
      <span>Remove</span>
    </button>
  </td>
</tr>
