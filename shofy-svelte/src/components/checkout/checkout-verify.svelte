<script lang="ts">;
  import { writable } from 'svelte/store';
	import LoginForm from '../form/login-form.svelte';

  let openLogin = writable<boolean>(false);
  let openCoupon = writable<boolean>(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log("submitted");
  };
</script>

<div class="tp-checkout-verify">
  <div class="tp-checkout-verify-item">
    <p class="tp-checkout-verify-reveal">
      Returning customer?
      <button 
        onclick={() => openLogin.update(n => !n)}
        type="button"
        class="tp-checkout-login-form-reveal-btn"
      >
        Click here to login
      </button>
    </p>

    {#if $openLogin}
      <div id="tpReturnCustomerLoginForm" class="tp-return-customer">
        <LoginForm />
      </div>
    {/if}
  </div>
  <div class="tp-checkout-verify-item">
    <p class="tp-checkout-verify-reveal">
      Have a coupon?
      <button 
        onclick={() => openCoupon.update(n => !n)}
        type="button"
        class="tp-checkout-coupon-form-reveal-btn"
      >
        Click here to enter your code
      </button>
    </p>

    {#if $openCoupon}
      <div id="tpCheckoutCouponForm" class="tp-return-customer">
        <form onsubmit={handleSubmit}>
          <div class="tp-return-customer-input">
            <!-- svelte-ignore a11y_label_has_associated_control -->
            <label>Coupon Code :</label>
            <input type="text" placeholder="Coupon" />
          </div>
          <button type="submit" class="tp-return-customer-btn tp-checkout-btn">
            Apply
          </button>
        </form>
      </div>
    {/if}
  </div>
</div>
