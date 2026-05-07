<script lang="ts">
	import { formatPrice } from '$lib';
	import { addCartProduct, isItemInCart } from '../../../store/cart-store';
	import type { IProduct } from '../../../types/product-type';

	interface Props {
		item: IProduct;
	}

	let { item }: Props = $props();
	const itemInCart = isItemInCart(item);
</script>

<div class="tp-category-item-2 p-relative z-index-1 text-center">
	<div class="tp-category-thumb-2" style="background-color: #f2f3f5;">
		<!-- svelte-ignore a11y_invalid_attribute -->
		<a href="#">
			<img src={item.img} alt="product-img" class="w-100" />
		</a>
	</div>
	<div class="tp-category-content-2">
		<span>From {formatPrice(item.price)}</span>
		<h3 class="tp-category-title-2">
			<a href={`/product-details/${item.id}`}>{item.title}</a>
		</h3>
		<div class="tp-category-btn-2">
			{#if !$itemInCart}
				<button onclick={() => addCartProduct(item)} type="button" class="tp-btn tp-btn-border">
					Add to Cart
				</button>
			{:else}
				<a href="/cart" class="tp-btn tp-btn-border active"> View Cart </a>
			{/if}
		</div>
	</div>
</div>
