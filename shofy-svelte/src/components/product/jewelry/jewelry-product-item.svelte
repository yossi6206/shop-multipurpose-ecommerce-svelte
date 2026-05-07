<script lang="ts">
	import type { IProduct } from '../../../types/product-type';
	import { formatPrice } from '$lib';
	import { addCartProduct, isItemInCart } from '../../../store/cart-store';
	import { wishlistStore } from '../../../store/wishlist-store';
	import { Wishlist, QuickView, CartBag, CartFour } from '../../svg';
	import { handleModalProduct } from '../../../store/product-store';

	interface Props {
		item: IProduct;
	}
	let { item }: Props = $props();
	const itemInWishlist = wishlistStore.isItemInWishlist(item);
	const itemInCart = isItemInCart(item);
</script>

<div class="tp-product-item-4 p-relative mb-40">
	<div class="tp-product-thumb-4 w-img fix" style="background-color: #f6f6f6">
		<a href={`/product-details/${item.id}`}>
			<img src={item.img} alt="product-img" />
		</a>

		<!-- Product Action -->
		<div class="tp-product-action-3 tp-product-action-4 has-shadow tp-product-action-blackStyle tp-product-action-brownStyle">
			<div class="tp-product-action-item-3 d-flex flex-column">
				{#if !$itemInCart}
					<button type="button" onclick={() => addCartProduct(item)} class="tp-product-action-btn-3 tp-product-add-cart-btn">
						<CartBag />
						<span class="tp-product-tooltip">Add to Cart</span>
					</button>
				{:else}
					<a
						href="/cart"
						class="tp-product-action-btn-3 d-inline-block tp-product-add-cart-btn active"
					>
						<CartBag />
						<span class="tp-product-tooltip">View Cart</span>
					</a>
				{/if}

				<!-- Quick View Button -->
				<button
					type="button"
					class="tp-product-action-btn-3 tp-product-quick-view-btn"
					onclick={() => handleModalProduct(item)}
				>
					<QuickView />
					<span class="tp-product-tooltip">Quick View</span>
				</button>

				<!-- Wishlist Button -->
				<button
					type="button"
					onclick={() => wishlistStore.addWishlistProduct(item)}
					class="tp-product-action-btn-3 tp-product-add-to-wishlist-btn {$itemInWishlist ? 'active': ''}"
				>
					<Wishlist />
					<span class="tp-product-tooltip">
						{$itemInWishlist ? 'Remove From Wishlist' : 'Add To Wishlist'}
					</span>
				</button>
			</div>
		</div>
	</div>

	<!-- Product Content -->
	<div class="tp-product-content-4">
		<h3 class="tp-product-title-4">
			<a href={`/product-details/${item.id}`}>{item.title}</a>
		</h3>

		<div class="tp-product-info-4">
			<p>{item.category.name}</p>
		</div>

		<div class="tp-product-price-inner-4">
			<div class="tp-product-price-wrapper-4">
				<span class="tp-product-price-4">{formatPrice(item.price)}</span>
			</div>

			<div class="tp-product-price-add-to-cart">
				{#if !$itemInCart}
					<button type="button" onclick={() => addCartProduct(item)} class="tp-product-add-to-cart-4">
						<CartFour />
						Add to Cart
					</button>
				{:else}
					<a href="/cart" class="tp-product-add-to-cart-4">
						<CartFour />
						View cart
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
