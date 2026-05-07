<script lang="ts">
	import { calculateDiscountPrice, formatPrice } from '$lib';
	import type { IProduct } from '../../types/product-type';
	import { Minus, PlusSm, Remove } from '../svg';
	import { addCartProduct, quantityDecrement, removeCartProduct } from '../../store/cart-store';

	let { item }: { item: IProduct } = $props();
  
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<tr>
	<!-- img -->
	<td class="tp-cart-img">
		<a href={`/product-details/${item.id}`} style="background-color: #F2F3F5;display:block">
			<img src={item.img} alt="" />
		</a>
	</td>

	<!-- title -->
	<td class="tp-cart-title">
		<a href={`/product-details/${item.id}`}>{item.title}</a>
	</td>

	<!-- price -->
	<td class="tp-cart-price">
    <span>{formatPrice(calculateDiscountPrice(item.price, item.discount))}</span>
  </td>

	<!-- quantity -->
	<td class="tp-cart-quantity">
		<div class="tp-product-quantity mt-10 mb-10">
			<span class="tp-cart-minus" onclick={() => quantityDecrement(item)}>
				<Minus />
			</span>
			<input class="tp-cart-input" type="text" value={item.orderQuantity} readonly disabled />
			<span class="tp-cart-plus" onclick={() => addCartProduct(item)}>
				<PlusSm />
			</span>
		</div>
	</td>

	<!-- action -->
	<td class="tp-cart-action">
		<button class="tp-cart-action-btn" onclick={() => removeCartProduct(item)}>
			<Remove />
			<span>הסר</span>
		</button>
	</td>
</tr>
