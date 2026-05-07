<script lang="ts">
  import { formatPrice } from '$lib';
  import {
    translateProductDescription,
    translateProductList,
    translateProductText
  } from '$lib/hebrew-product';
  import productStore from '../../store/product-store';
	import type { IProduct } from '../../types/product-type';
	import { AskQuestion, CompareThree, Minus, PlusSm, WishlistThree } from '../svg';
	import { addCartProduct, decrement, increment, orderQuantity } from '../../store/cart-store';
	import ProductDetailsCountdown from './product-details-countdown.svelte';
	import { add_compare_product } from '../../store/compare-store';
	import { wishlistStore } from '../../store/wishlist-store';

  type IProps = {
    product: IProduct;
    isShowBottom?: boolean;
    modalPrd?: boolean;
  }
  let { product,isShowBottom,modalPrd=false }: IProps = $props();

  // Reactive state
  let textMore = $state(false);

  // Computed properties
  const hasColorData = $state(product.imageURLs.some(item => item?.color && item?.color?.name))
  const translatedDescription = $derived(translateProductDescription(product));
</script>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_invalid_attribute -->

<div class="tp-product-details-wrapper has-sticky">
  <div class="tp-product-details-category">
    <span>{translateProductText(product.parent)}</span>
  </div>
  <h3 class="tp-product-details-title">{translateProductText(product.title, product)}</h3>

  <!-- inventory details -->
  <div class="tp-product-details-inventory d-flex align-items-center mb-10">
    <div class="tp-product-details-stock mb-10">
      <span>{product.status === 'in-stock' ? 'במלאי' : product.status === 'out-of-stock' ? 'אזל מהמלאי' : product.status}</span>
    </div>
    <div class="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
      <div class="tp-product-details-rating">
        {#each Array(5) as _, i}
          <span><i class="fa-solid fa-star"></i></span>
        {/each}
      </div>
      <div class="tp-product-details-reviews">
        <span>({product.reviews?.length || 0} ביקורות)</span>
      </div>
    </div>
  </div>
  <p>
    {textMore ? translatedDescription : `${translatedDescription.substring(0, 100)}...`}
    <span onclick={() => (textMore = !textMore)}>{textMore ? 'קרא פחות' : 'קרא עוד'}</span>
  </p>

  <!-- price -->
  <div class="tp-product-details-price-wrapper mb-20">
    {#if product.discount > 0}
      <div>
        <span class="tp-product-details-price old-price">{formatPrice(product.price, false)}</span>
        <span class="tp-product-details-price new-price">
          {formatPrice(Number(product.price) - (Number(product.price) * Number(product.discount)) / 100)}
        </span>
      </div>
    {:else}
      <span class="tp-product-details-price old-price">{formatPrice(product.price)}</span>
    {/if}
  </div>

  <!-- variations -->
  {#if hasColorData}
    <div class="tp-product-details-variation">
      <div class="tp-product-details-variation-item">
        <h4 class="tp-product-details-variation-title">צבע :</h4>
        <div class="tp-product-details-variation-list">
          {#each product.imageURLs as item}
            <button
              type="button"
              class="color tp-color-variation-btn {item.img === $productStore.activeImg ? 'active' : ''}"
              style="margin-right:5px"
              onclick={() => productStore.handleImageActive(item.img)}
            >
              <span data-bg-color={item.color?.clrCode} style={`background-color:${item.color?.clrCode}`}></span>
              {#if item.color && item.color.name}
                <span class="tp-color-variation-tootltip">{translateProductText(item.color.name)}</span>
              {/if}
            </button>
          {/each}
        </div>
      </div>
    </div>
  {/if}

  <!-- product countdown start -->
  {#if product.offerDate?.endDate}
    <div>
      <ProductDetailsCountdown {product} />
    </div>
  {/if}
  <!-- product countdown end -->

  <!-- actions -->
  <div class="tp-product-details-action-wrapper">
    <h3 class="tp-product-details-action-title">כמות</h3>
    <div class="tp-product-details-action-item-wrapper d-flex align-items-center">
      <div class="tp-product-details-quantity">
        <div class="tp-product-quantity mb-15 mr-15">
          <span class="tp-cart-minus" onclick={decrement}>
            <Minus />
          </span>
          <input class="tp-cart-input" type="text" value={$orderQuantity} disabled />
          <span class="tp-cart-plus" onclick={increment}>
            <PlusSm />
          </span>
        </div>
      </div>
      <div class="tp-product-details-add-to-cart mb-15 w-100">
        <button class="tp-product-details-add-to-cart-btn w-100" onclick={() => addCartProduct(product)}>
          הוסף לסל
        </button>
      </div>
    </div>
    {#if !modalPrd}
      <a href={`/product-details/${product.id}`} class="tp-product-details-buy-now-btn w-100 text-center">
        קנה עכשיו
      </a>
    {/if}
  </div>
  <div class="tp-product-details-action-sm">
    <button onclick="{() => add_compare_product(product)}" type="button" class="tp-product-details-action-sm-btn">
      <CompareThree />
      השוואה
    </button>
    <button onclick="{() => wishlistStore.addWishlistProduct(product)}" type="button" class="tp-product-details-action-sm-btn">
      <WishlistThree/>
      הוסף למועדפים
    </button>
    <button type="button" class="tp-product-details-action-sm-btn">
      <AskQuestion />
      שאל שאלה
    </button>
  </div>

  {#if isShowBottom}
    <div>
      <div class="tp-product-details-query">
        <div class="tp-product-details-query-item d-flex align-items-center">
          <span>מק״ט: </span>
          <p>{product.sku}</p>
        </div>
        <div class="tp-product-details-query-item d-flex align-items-center">
          <span>קטגוריה: </span>
          <p>{translateProductText(product.parent)}</p>
        </div>
        {#if product.tags && product.tags.length > 0}
          <div class="tp-product-details-query-item d-flex align-items-center">
            <span>תגיות: </span>
            <p>{translateProductList(product.tags)}</p>
          </div>
        {/if}
      </div>
      <div class="tp-product-details-social">
        <span>שיתוף: </span>
        <a href="#" aria-label="fb"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#" aria-label="twitter"><i class="fa-brands fa-twitter"></i></a>
        <a href="#" aria-label="linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="#" aria-label="vimeo"><i class="fa-brands fa-vimeo-v"></i></a>
      </div>
      <div class="tp-product-details-msg mb-15">
        <ul>
          <li>30 ימי החזרה ללא תשלום</li>
          <li>הזמנות עד 14:30 - משלוח באותו היום</li>
        </ul>
      </div>
      <div class="tp-product-details-payment d-flex align-items-center flex-wrap justify-content-between">
        <p>תשלום בטוח <br> ומאובטח</p>
        <img src="/img/product/icons/payment-option.png" alt="" />
      </div>
    </div>
  {/if}
</div>