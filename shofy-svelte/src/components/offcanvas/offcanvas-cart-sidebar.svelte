<script lang="ts">
	import { formatPrice } from "$lib";
	import { cart_products, removeCartProduct,totalPriceQuantity } from "../../store/cart-store";
	import CartProgress from "../cart/cart-progress.svelte";

  type IProps = {
    cartOffcanvas: boolean;
    handleCartOffcanvas: () => void;
  };
  let { cartOffcanvas, handleCartOffcanvas }: IProps = $props();
</script>

<div class={`cartmini__area tp-all-font-roboto`} class:cartmini-opened={cartOffcanvas} dir="rtl" lang="he">
  <div class="cartmini__wrapper d-flex justify-content-between flex-column">
    <div class="cartmini__top-wrapper">
      <div class="cartmini__top p-relative">
        <div class="cartmini__top-title">
          <h4>עגלת קניות</h4>
        </div>
        <div class="cartmini__close">
          <button onclick={handleCartOffcanvas} type="button" class="cartmini__close-btn cartmini-close-btn" aria-label="סגירה">
            <i class="fal fa-times"></i>
          </button>
        </div>
      </div>
      <div class="cartmini__shipping">
        <CartProgress />
      </div>
      {#if $cart_products.length > 0}
        <div class="cartmini__widget">
          {#each $cart_products as item}
            <div class="cartmini__widget-item">
              <div class="cartmini__thumb">
                <a href={`/product-details/${item.id}`}>
                  <img src={item.img} alt="cart-img" width="70" height="60" />
                </a>
              </div>
              <div class="cartmini__content">
                <h5 class="cartmini__title">
                  <a href={`/product-details/${item.id}`}>{item.title}</a>
                </h5>
                <div class="cartmini__price-wrapper">
                  {#if item.discount > 0 && item.orderQuantity}
                    <span class="cartmini__price">
                      {formatPrice((Number(item.price) - (Number(item.price) * Number(item.discount)) / 100) * item.orderQuantity)}
                    </span>
                  {:else}
                    <span class="cartmini__price">
                      {formatPrice(item.price * (item.orderQuantity ?? 0))}
                    </span>
                  {/if}
                  <span class="cartmini__quantity"> x{item.orderQuantity}</span>
                </div>
              </div>
              <!-- svelte-ignore a11y_click_events_have_key_events -->
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <!-- svelte-ignore a11y_missing_attribute -->
              <a onclick={() => removeCartProduct(item)} class="cartmini__del pointer" aria-label="מחיקה">
                <i class="fa-regular fa-xmark"></i>
              </a>
            </div>
          {/each}
        </div>
      {:else}
        <div class="cartmini__empty text-center">
          <img src="/img/product/cartmini/empty-cart.png" alt="empty-cart-img" />
          <p>עגלת הקניות שלך ריקה</p>
          <a href="/shop" class="tp-btn">לחנות</a>
        </div>
      {/if}
    </div>
    {#if $cart_products.length > 0}
      <div class="cartmini__checkout">
        <div class="cartmini__checkout-title mb-30">
          <h4>סה"כ:</h4>
          <span>{formatPrice($totalPriceQuantity.total)}</span>
        </div>
        <div class="cartmini__checkout-btn">
          <a href="/cart" onclick={handleCartOffcanvas} class="tp-btn mb-10 w-100">הצג עגלה</a>
          <a href="/checkout" onclick={handleCartOffcanvas} class="tp-btn tp-btn-border w-100">לתשלום</a>
        </div>
      </div>
    {/if}
  </div>
</div>

<!-- Overlay Start -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div onclick={handleCartOffcanvas} class={`body-overlay ${cartOffcanvas ? 'opened' : ''}`}></div>
<!-- Overlay End -->
