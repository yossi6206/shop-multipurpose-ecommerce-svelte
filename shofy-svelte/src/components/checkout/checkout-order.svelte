<script lang="ts">
  import { writable } from 'svelte/store';
  import { calculateDiscountPrice, formatPrice } from '$lib';
  import { cart_products,totalPriceQuantity } from '../../store/cart-store';

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
  <h3 class="tp-checkout-place-title">Your Order</h3>
  <div class="tp-order-info-list">
    <ul>
      <li class="tp-order-info-list-header">
        <h4>Product</h4>
        <h4>Total</h4>
      </li>
      {#each $cart_products as item (item.id)}
        <li class="tp-order-info-list-desc">
          <p>{item.title} <span> x {item.orderQuantity}</span></p>
          <span>{formatPrice(calculateDiscountPrice(item.price, item.discount))}</span>
        </li>
      {/each}
      <li class="tp-order-info-list-subtotal">
        <span>Subtotal</span>
        <span>{formatPrice($totalPriceQuantity.total)}</span>
      </li>
      <li class="tp-order-info-list-shipping">
        <span>Shipping</span>
        <div class="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
          <span>
            <input id="flat_rate" type="radio" name="shipping" onclick={() => handleShippingCost(20)}>
            <label for="flat_rate">Flat rate: <span>{formatPrice(20)}</span></label>
          </span>
          <span>
            <input id="local_pickup" type="radio" name="shipping" onclick={() => handleShippingCost(25)}>
            <label for="local_pickup">Local pickup: <span>{formatPrice(25)}</span></label>
          </span>
          <span>
            <input id="free_shipping" type="radio" name="shipping" onclick={() => handleShippingCost('free')}>
            <label for="free_shipping">Free shipping</label>
          </span>
        </div>
      </li>
      <li class="tp-order-info-list-total">
        <span>Total</span>
        <span>{formatPrice($totalPriceQuantity.total + $shipCost)}</span>
      </li>
    </ul>
  </div>
  <div class="tp-checkout-payment">
    <div class="tp-checkout-payment-item">
      <input type="radio" id="back_transfer" name="payment" onclick={() => handlePayment('bank')}>
      <label for="back_transfer">Direct Bank Transfer</label>
      {#if $payment_name === 'bank'}
        <div class="tp-checkout-payment-desc direct-bank-transfer">
          <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
        </div>
      {/if}
    </div>
    <div class="tp-checkout-payment-item">
      <input type="radio" id="cheque_payment" name="payment" onclick={() => handlePayment('cheque_payment')}>
      <label for="cheque_payment">Cheque Payment</label>
      {#if $payment_name === 'cheque_payment'}
        <div class="tp-checkout-payment-desc cheque-payment">
          <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
        </div>
      {/if}
    </div>
  </div>
  <div class="tp-checkout-agree">
    <div class="tp-checkout-option">
      <input id="read_all" type="checkbox">
      <label for="read_all">I have read and agree to the website.</label>
    </div>
  </div>
  <div class="tp-checkout-btn-wrapper">
    <button type="submit" class="tp-checkout-btn w-100">Place Order</button>
  </div>
</div>
