<script lang="ts">
	import { formatPrice } from '$lib';
	import type { IProduct } from '../../../types/product-type';
	import { addCartProduct, isItemInCart } from '../../../store/cart-store';
	import { wishlistStore } from '../../../store/wishlist-store';
	import { CartTwo, CompareTwo, QuickView, Wishlist } from '../../svg';
	import { handleModalProduct } from '../../../store/product-store';
	import { add_compare_product, isItemInCompare } from '../../../store/compare-store';

	interface Props {
		item: IProduct;
		spacing?: boolean;
	}
	const { item, spacing = true }: Props = $props();

	const itemInWishlist = wishlistStore.isItemInWishlist(item);
	const itemInCompare = isItemInCompare(item);
	const itemInCart = isItemInCart(item);
</script>

<div class={`tp-product-item-2 ${spacing ? 'mb-40' : ''}`}>
	<div class="tp-product-thumb-2 p-relative z-index-1 fix w-img" style="background-color: #f2f3f5">
		<a href={`/product-details/${item.id}`}>
			<img src={item.img} alt="product-img" />
		</a>

		<!-- Product Badge -->
		{#if item.status === 'out-of-stock'}
			<div class="tp-product-badge">
				<span class="product-hot">out-of-stock</span>
			</div>
		{/if}

		<!-- Product Actions -->
		<div class="tp-product-action-2 tp-product-action-blackStyle">
			<div class="tp-product-action-item-2 d-flex flex-column">
				{#if !$itemInCart}
					<button
					  onclick={() => addCartProduct(item)}
						type="button"
						class={`tp-product-action-btn-2 tp-product-add-cart-btn ${$itemInCart ? 'active' : ''}`}
					>
						<CartTwo />
						<span class="tp-product-tooltip tp-product-tooltip-right">Add to Cart</span>
					</button>
				{/if}

				{#if $itemInCart}
					<a href="/cart" class="tp-product-action-btn-2 tp-product-add-cart-btn active">
						<CartTwo />
						<span class="tp-product-tooltip tp-product-tooltip-right">View Cart</span>
					</a>
				{/if}

				<button
					type="button"
					class="tp-product-action-btn-2 tp-product-quick-view-btn"
					onclick={() => handleModalProduct(item)}
				>
					<QuickView />
					<span class="tp-product-tooltip tp-product-tooltip-right">Quick View</span>
				</button>

				<button
					onclick={() => wishlistStore.addWishlistProduct(item)}
					type="button"
					class={`tp-product-action-btn-2 tp-product-add-to-wishlist-btn ${$itemInWishlist ? 'active' : ''}`}
				>
					<Wishlist />
					<span class="tp-product-tooltip tp-product-tooltip-right">
						{$itemInWishlist ? 'Remove From Wishlist' : 'Add To Wishlist'}
					</span>
				</button>

				<button onclick={() => add_compare_product(item)} type="button" class={`tp-product-action-btn-2 tp-product-add-to-compare-btn ${$itemInCompare ? 'active' : ''}`}>
					<CompareTwo />
					<span class="tp-product-tooltip tp-product-tooltip-right"> 
						{$itemInCompare ? 'Remove From Compare' : 'Add To Compare' }
					</span>
				</button>
			</div>
		</div>
	</div>

	<div class="tp-product-content-2 pt-15">
		<div class="tp-product-tag-2">
			<!-- svelte-ignore a11y_invalid_attribute -->
			<a href="#">{item.category.name}</a>
		</div>
		<h3 class="tp-product-title-2">
			<a href={`/product-details/${item.id}`}>{item.title}</a>
		</h3>
		<div class="tp-product-rating-icon tp-product-rating-icon-2">
			<span><i class="fa-solid fa-star"></i></span>
			<span><i class="fa-solid fa-star"></i></span>
			<span><i class="fa-solid fa-star"></i></span>
			<span><i class="fa-solid fa-star"></i></span>
			<span><i class="fa-solid fa-star"></i></span>
		</div>
		<div class="tp-product-price-wrapper-2">
			{#if item.discount > 0}
				<span class="tp-product-price-2 new-price">
					{formatPrice(Number(item.price) - (Number(item.price) * Number(item.discount)) / 100)}
				</span>
				<span class="tp-product-price-2 old-price">{formatPrice(item.price, false)}</span>
			{:else}
				<span class="tp-product-price-2 new-price">{formatPrice(item.price)}</span>
			{/if}
		</div>
	</div>
</div>
