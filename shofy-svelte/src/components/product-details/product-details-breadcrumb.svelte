<script lang="ts">
  import { translateProductText } from '$lib/hebrew-product';
  import { Dot } from '../svg';
	import type { IProduct } from '../../types/product-type';
  let { product }:{ product: IProduct} = $props();
</script>

<section class="breadcrumb__area breadcrumb__style-2 include-bg pt-50 pb-20" dir="rtl">
  <div class="container">
    <div class="row">
      <div class="col-xxl-12">
        <div class="breadcrumb__content p-relative z-index-1">
          <div class="breadcrumb__list has-icon">
            <span class="breadcrumb-icon me-1">
              <Dot />
            </span>
            <span><a href="/">בית</a></span>
            {#if product.parent}
              <span><a href="/shop">{translateProductText(product.parent)}</a></span>
            {/if}
            {#if product.children}
              <span><a href="/shop">{translateProductText(product.children)}</a></span>
            {/if}
            <span>{translateProductText(product.title, product)}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
