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

<div class="tp-category-item-4 p-relative z-index-1 text-center">
	<!-- Product Image -->
	<div
		class="tp-category-thumb-4 include-bg"
		style="background-image:url({item.img});background-color:#fff;background-position: 0px -80px;"
	></div>

	<!-- Product Action -->
	<div
		class="tp-product-action-3 tp-product-action-4 tp-product-action-blackStyle tp-product-action-brownStyle"
	>
		<div class="tp-product-action-item-3 d-flex flex-column">
			{#if !$itemInCart}
				<button onclick={() => addCartProduct(item)} type="button" class="tp-product-action-btn-3 tp-product-add-cart-btn">
					<CartBag />
					<span class="tp-product-tooltip">Add to Cart</span>
				</button>
			{:else}
				<a href="/cart" class="tp-product-action-btn-3 tp-product-add-cart-btn active">
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
				class="tp-product-action-btn-3 tp-product-add-to-wishlist-btn {$itemInWishlist
					? 'active'
					: ''}"
			>
				<Wishlist />
				<span class="tp-product-tooltip">
					{$itemInWishlist ? 'Remove From Wishlist' : 'Add To Wishlist'}
				</span>
			</button>
		</div>
	</div>

	<!-- Product Content -->
	<div class="tp-category-content-4">
		<h3 class="tp-category-title-4">
			<a href={`/product-details/${item.id}`}>{item.title}</a>
		</h3>

		<div class="tp-category-price-wrapper-4">
			{#if item.discount > 0}
				<span class="tp-category-price-4">
					{formatPrice(Number(item.price) - (Number(item.price) * Number(item.discount)) / 100)}
				</span>
			{:else}
				<span class="tp-category-price-4">
					{formatPrice(item.price)}
				</span>
			{/if}

			<div class="tp-category-add-to-cart">
				{#if !$itemInCart}
					<button onclick={() => addCartProduct(item)} class="tp-category-add-to-cart-4">
						<CartFour />
						Add to Cart
					</button>
				{:else}
					<a href="/cart" class="tp-category-add-to-cart-4">
						<CartFour />
						View cart
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
