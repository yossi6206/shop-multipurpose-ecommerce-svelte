<script lang="ts">
  import { formatPrice } from '$lib';
  import { writable } from 'svelte/store';
  import { goto } from '$app/navigation';
	import CartItem from './cart-item.svelte';
  import { cart_products, clear_cart, totalPriceQuantity} from '../../store/cart-store';

  let shipCost = writable<number>(0);
  let couponCode = writable<string>('');

  // Handle coupon submit
  const handleCouponSubmit = () => {
    console.log($couponCode);
  };

  // Handle shipping cost
  const handleShippingCost = (value: number | string) => {
    if (value === 'free') {
      shipCost.set(0);
    } else {
      shipCost.set(value as number);
    }
  };
</script>

<section class="tp-cart-area pb-120 cart-area-rtl" dir="rtl" lang="he">
  <div class="container">
    {#if $cart_products.length === 0}
      <div class="text-center pt-50">
        <h3>עגלת הקניות שלך ריקה</h3>
        <a href="/shop" class="tp-cart-checkout-btn mt-20">להמשך קניות</a>
      </div>
    {:else}
      <div class="row">
        <div class="col-xl-9 col-lg-8">
          <div class="tp-cart-list mb-25 mr-30">
            <table>
              <thead>
                <tr>
                  <th colspan="2" class="tp-cart-header-product">מוצר</th>
                  <th class="tp-cart-header-price">מחיר</th>
                  <th class="tp-cart-header-quantity">כמות</th>
                  <th>פעולה</th>
                </tr>
              </thead>
              <tbody>
                {#each $cart_products as item (item.id)}
                  <CartItem {item} />
                {/each}
              </tbody>
            </table>
          </div>

          <div class="tp-cart-bottom mr-30">
            <div class="row align-items-end">
              <div class="col-xl-6 col-md-8">
                <div class="tp-cart-coupon">
                  <form onsubmit={handleCouponSubmit}>
                    <div class="tp-cart-coupon-input-box">
                      <!-- svelte-ignore a11y_label_has_associated_control -->
                      <label>קוד קופון:</label>
                      <div class="tp-cart-coupon-input d-flex align-items-center">
                        <input type="text" placeholder="הזן קוד קופון" bind:value={$couponCode} />
                        <button type="submit">החל</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-xl-6 col-md-4">
                <div class="tp-cart-update text-md-end">
                  <button onclick={() => clear_cart()} type="button" class="tp-cart-update-btn">
                    ניקוי העגלה
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="tp-cart-checkout-wrapper">
            <div class="tp-cart-checkout-top d-flex align-items-center justify-content-between">
              <span class="tp-cart-checkout-top-title">סכום ביניים</span>
              <span class="tp-cart-checkout-top-price">{formatPrice($totalPriceQuantity.total)}</span>
            </div>

            <div class="tp-cart-checkout-shipping">
              <h4 class="tp-cart-checkout-shipping-title">משלוח</h4>
              <div class="tp-cart-checkout-shipping-option-wrapper">
                <div class="tp-cart-checkout-shipping-option">
                  <input id="flat_rate" type="radio" name="shipping" onchange={() => handleShippingCost(20)} />
                  <label for="flat_rate">משלוח קבוע: <span>{formatPrice(20)}</span></label>
                </div>
                <div class="tp-cart-checkout-shipping-option">
                  <input id="local_pickup" type="radio" name="shipping" onchange={() => handleShippingCost(25)} />
                  <label for="local_pickup">איסוף עצמי: <span>{formatPrice(25)}</span></label>
                </div>
                <div class="tp-cart-checkout-shipping-option">
                  <input id="free_shipping" type="radio" name="shipping" onchange={() => handleShippingCost('free')} />
                  <label for="free_shipping">משלוח חינם</label>
                </div>
              </div>
            </div>

            <div class="tp-cart-checkout-total d-flex align-items-center justify-content-between">
              <span>סה"כ</span>
              <span>{formatPrice($totalPriceQuantity.total + $shipCost)}</span>
            </div>

            <div class="tp-cart-checkout-proceed">
              <button onclick={() => goto('/checkout')} class="tp-cart-checkout-btn w-100">
                מעבר לתשלום
              </button>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  .cart-area-rtl :global(table),
  .cart-area-rtl :global(th),
  .cart-area-rtl :global(td) {
    text-align: right;
  }

  .cart-area-rtl :global(.tp-cart-update.text-md-end) {
    text-align: left !important;
  }

  .cart-area-rtl :global(.tp-cart-coupon-input input) {
    text-align: right;
  }
</style>
