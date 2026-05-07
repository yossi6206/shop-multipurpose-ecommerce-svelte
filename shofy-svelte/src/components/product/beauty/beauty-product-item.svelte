<script lang="ts">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import type { IProduct } from '../../../types/product-type';
	import { addCartProduct, cart_products, isItemInCart } from '../../../store/cart-store';
	import { wishlistStore } from '../../../store/wishlist-store';
	import { QuickView, Wishlist } from '../../svg';
	import { formatPrice } from '$lib';
	import CartThree from '../../svg/cart/cart-three.svelte';
	import { handleModalProduct } from '../../../store/product-store';

	interface Props {
		item: IProduct;
		style_2?: boolean;
		isCenter?: boolean;
		primary_style?: boolean;
	}

	let { item, isCenter, style_2, primary_style }: Props = $props();

	const itemInWishlist = wishlistStore.isItemInWishlist(item);
	const itemInCart = isItemInCart(item);
</script>

<div class={`tp-product-item-3 ${primary_style ? 'tp-product-style-primary' : ''} mb-50 ${isCenter ? 'text-center' : ''}`}>
	<div
		class="tp-product-thumb-3 mb-15 fix p-relative z-index-1"
		style="background-color: {style_2 ? '#f6f6f6' : '#fff'};"
	>
		<a href={`/product-details/${item.id}`}>
			<img src={item.img} alt="product-img" />
		</a>

		<div class="tp-product-action-3 tp-product-action-blackStyle">
			<div class="tp-product-action-item-3 d-flex flex-column">
				{#if !$itemInCart}
					<button onclick={() => addCartProduct(item)} type="button" class="tp-product-action-btn-3 tp-product-add-cart-btn">
						<CartThree />
						<span class="tp-product-tooltip">Add to Cart</span>
					</button>
				{/if}
				{#if $itemInCart}
					<a
						href="/cart"
						class="tp-product-action-btn-3 tp-product-add-cart-btn text-center active"
					>
						<CartThree />
						<span class="tp-product-tooltip">View Cart</span>
					</a>
				{/if}

				<button
					type="button"
					class="tp-product-action-btn-3 tp-product-quick-view-btn"
					onclick={() => handleModalProduct(item)}
				>
					<QuickView />
					<span class="tp-product-tooltip">Quick View</span>
				</button>

				<button
					type="button"
					onclick={() => wishlistStore.addWishlistProduct(item)}
					class={`tp-product-action-btn-3 tp-product-add-to-wishlist-btn ${$itemInWishlist ? 'active' : ''}`}
				>
					<Wishlist />
					<span class="tp-product-tooltip">
            {$itemInWishlist ? 'Remove From Wishlist' : 'Add To Wishlist'}
          </span>
				</button>
			</div>
		</div>

		<div class="tp-product-add-cart-btn-large-wrapper">
			{#if !$itemInCart}
				<button
					onclick={() => addCartProduct(item)}
					type="button"
					class="tp-product-add-cart-btn-large"
				>
					Add To Cart
				</button>
			{/if}
			{#if $itemInCart}
				<a href="/cart" class="tp-product-add-cart-btn-large text-center"> View Cart </a>
			{/if}
		</div>
	</div>
	<div class="tp-product-content-3">
		<div class="tp-product-tag-3">
			<span>{item.category.name}</span>
		</div>
		<h3 class="tp-product-title-3">
			<a href={`/product-details/${item.id}`}>{item.title}</a>
		</h3>
		<div class="tp-product-price-wrapper-3">
			{#if item.discount > 0}
				<span class="tp-product-price-3">
					{formatPrice(Number(item.price) - (Number(item.price) * Number(item.discount)) / 100)}
				</span>
			{:else}
				<span class="tp-product-price-3">{formatPrice(item.price)}</span>
			{/if}
		</div>
	</div>
</div>
