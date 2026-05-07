<script lang="ts">
	import { writable } from 'svelte/store';
	import { calculateDiscountPrice, formatPrice } from '$lib';
	import { cart_products, totalPriceQuantity } from '../../store/cart-store';

	let shipCost = writable<number>(0);
	let payment_name = writable<string>('');

	const handleShippingCost = (value: number | string) => {
		shipCost.set(value === 'free' ? 0 : (value as number));
	};

	const handlePayment = (value: string) => {
		payment_name.set(value);
	};
</script>

<div class="tp-checkout-place white-bg">
	<h3 class="tp-checkout-place-title">ההזמנה שלך</h3>
	<div class="tp-order-info-list">
		<ul>
			<li class="tp-order-info-list-header">
				<h4>מוצר</h4>
				<h4>סה״כ</h4>
			</li>
			{#each $cart_products as item (item.id)}
				<li class="tp-order-info-list-desc">
					<p>{item.title} <span> × {item.orderQuantity}</span></p>
					<span>{formatPrice(calculateDiscountPrice(item.price, item.discount))}</span>
				</li>
			{/each}
			<li class="tp-order-info-list-subtotal">
				<span>סכום ביניים</span>
				<span>{formatPrice($totalPriceQuantity.total)}</span>
			</li>
			<li class="tp-order-info-list-shipping">
				<span>משלוח</span>
				<div class="tp-order-info-list-shipping-item d-flex flex-column align-items-start">
					<span>
						<input
							id="flat_rate"
							type="radio"
							name="shipping"
							onclick={() => handleShippingCost(20)}
						/>
						<label for="flat_rate">משלוח רגיל: <span>{formatPrice(20)}</span></label>
					</span>
					<span>
						<input
							id="local_pickup"
							type="radio"
							name="shipping"
							onclick={() => handleShippingCost(25)}
						/>
						<label for="local_pickup">איסוף עצמי: <span>{formatPrice(25)}</span></label>
					</span>
					<span>
						<input
							id="free_shipping"
							type="radio"
							name="shipping"
							onclick={() => handleShippingCost('free')}
						/>
						<label for="free_shipping">משלוח חינם</label>
					</span>
				</div>
			</li>
			<li class="tp-order-info-list-total">
				<span>סה״כ</span>
				<span>{formatPrice($totalPriceQuantity.total + $shipCost)}</span>
			</li>
		</ul>
	</div>
	<div class="tp-checkout-payment">
		<div class="tp-checkout-payment-item">
			<input type="radio" id="back_transfer" name="payment" onclick={() => handlePayment('bank')} />
			<label for="back_transfer">העברה בנקאית ישירה</label>
			{#if $payment_name === 'bank'}
				<div class="tp-checkout-payment-desc direct-bank-transfer">
					<p>
						בצעו את התשלום ישירות לחשבון הבנק שלנו. נא לציין את מספר ההזמנה כאסמכתא לתשלום. ההזמנה
						תישלח לאחר אישור קבלת התשלום.
					</p>
				</div>
			{/if}
		</div>
		<div class="tp-checkout-payment-item">
			<input
				type="radio"
				id="cheque_payment"
				name="payment"
				onclick={() => handlePayment('cheque_payment')}
			/>
			<label for="cheque_payment">תשלום בצ׳ק</label>
			{#if $payment_name === 'cheque_payment'}
				<div class="tp-checkout-payment-desc cheque-payment">
					<p>
						בצעו את התשלום ישירות לחשבון הבנק שלנו. נא לציין את מספר ההזמנה כאסמכתא לתשלום. ההזמנה
						תישלח לאחר אישור קבלת התשלום.
					</p>
				</div>
			{/if}
		</div>
	</div>
	<div class="tp-checkout-agree">
		<div class="tp-checkout-option">
			<input id="read_all" type="checkbox" />
			<label for="read_all">קראתי ואני מסכים/ה לתנאי האתר.</label>
		</div>
	</div>
	<div class="tp-checkout-btn-wrapper">
		<button type="submit" class="tp-checkout-btn w-100">ביצוע הזמנה</button>
	</div>
</div>
