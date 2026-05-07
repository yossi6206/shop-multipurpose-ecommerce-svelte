<script lang="ts">
  import { onMount } from 'svelte';
  import {
    translateProductDescription,
    translateProductText
  } from '$lib/hebrew-product';
  import type { IProduct } from '../../types/product-type';
	import ReviewForm from '../form/review-form.svelte';
	import ProductDetailsRatingItem from './product-details-rating-item.svelte';

  let { product }: { product: IProduct } = $props();

  const handleActiveMarker = (event: MouseEvent) => {
    const marker = document.getElementById("productTabMarker");
    if (marker && event.target) {
      marker.style.left = (event.target as HTMLButtonElement).offsetLeft + "px";
      marker.style.width = (event.target as HTMLButtonElement).offsetWidth + "px";
    }
  };

  onMount(() => {
    const nav_active = document.getElementById("nav-addInfo-tab");
    const marker = document.getElementById("productTabMarker");
    if (nav_active?.classList.contains("active") && marker) {
      marker.style.left = nav_active.offsetLeft + "px";
      marker.style.width = nav_active.offsetWidth + "px";
    }
  });
</script>

<div class="tp-product-details-tab-nav tp-tab" dir="rtl">
  <nav>
    <div class="nav nav-tabs justify-content-center p-relative tp-product-tab" id="navPresentationTab" role="tablist">
      <button onclick={handleActiveMarker} class="nav-link" id="nav-description-tab" data-bs-toggle="tab" data-bs-target="#nav-description" type="button" role="tab" aria-controls="nav-description" aria-selected="true">תיאור</button>
      <button onclick={handleActiveMarker} class="nav-link active" id="nav-addInfo-tab" data-bs-toggle="tab" data-bs-target="#nav-addInfo" type="button" role="tab" aria-controls="nav-addInfo" aria-selected="false">מידע נוסף</button>
      <button onclick={handleActiveMarker} class="nav-link" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false">ביקורות ({product.reviews?.length})</button>
      <span id="productTabMarker" class="tp-product-details-tab-line"></span>
    </div>
  </nav>  
  <div class="tab-content" id="navPresentationTabContent">
    <div class="tab-pane fade" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab" tabindex="0">
      <div class="tp-product-details-desc-wrapper pt-80">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="tp-product-details-desc-item pb-105">
              <div class="row">
                <div class="col-lg-12">
                  <div class="tp-product-details-desc-content pt-25">
                    <span>{translateProductText(product.category.name)}</span>
                    <h3 class="tp-product-details-desc-title">{translateProductText(product.title, product)}</h3>
                    <p>{translateProductDescription(product)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade show active" id="nav-addInfo" role="tabpanel" aria-labelledby="nav-addInfo-tab" tabindex="0">
      <div class="tp-product-details-additional-info">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <table>
              <tbody>
                {#each product.additionalInformation as info, i}
                  <tr>
                    <td>{translateProductText(info.key)}</td>
                    <td>{translateProductText(info.value)}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab" tabindex="0">
      <div class="tp-product-details-review-wrapper pt-60">
        <div class="row">
          <div class="col-lg-6">
            <div class="tp-product-details-review-statics">
              <div class="tp-product-details-review-number d-inline-block mb-50">
                <h3 class="tp-product-details-review-number-title">ביקורות לקוחות</h3>
                <div class="tp-product-details-review-summery d-flex align-items-center">
                  <div class="tp-product-details-review-summery-value">
                    <span>4.5</span>
                  </div>
                  <div class="tp-product-details-review-summery-rating d-flex align-items-center">
                    {#each Array(5) as _, index}
                      <span><i class="fa-solid fa-star"></i></span>
                    {/each}
                    <p>({product.reviews?.length} ביקורות)</p>
                  </div>
                </div>
                <div class="tp-product-details-review-rating-list">
                  <ProductDetailsRatingItem star={5} width={82} /> 
                  <ProductDetailsRatingItem star={4} width={30} /> 
                  <ProductDetailsRatingItem star={3} width={15} /> 
                  <ProductDetailsRatingItem star={2} width={6} /> 
                  <ProductDetailsRatingItem star={1} width={10} /> 
                </div>
              </div>
              <div class="tp-product-details-review-list pr-110">
                <h3 class="tp-product-details-review-title">דירוג וביקורת</h3>
                {#if product.reviews && product.reviews.length > 0}
                  {#each product.reviews as item, i}
                    <div class="tp-product-details-review-avater d-flex align-items-start">
                      <div class="tp-product-details-review-avater-thumb">
                        <!-- svelte-ignore a11y_invalid_attribute -->
                        <a href="#">
                          <img src={item.user} alt="user">
                        </a>
                      </div>
                      <div class="tp-product-details-review-avater-content">
                        <div class="tp-product-details-review-avater-rating d-flex align-items-center">
                          {#each Array(5) as _, index}
                            <span><i class="fa-solid fa-star"></i></span>
                          {/each}
                        </div>
                        <h3 class="tp-product-details-review-avater-title">{translateProductText(item.name)}</h3>
                        <span class="tp-product-details-review-avater-meta">{translateProductText(item.date)}</span>
                        <div class="tp-product-details-review-avater-comment">
                          <p>{translateProductText(item.review)}</p>
                        </div>
                      </div>
                    </div>
                  {/each}
                {:else}
                  <h5>לא נמצאו ביקורות</h5>
                {/if}
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="tp-product-details-review-form">
              <h3 class="tp-product-details-review-form-title">כתוב ביקורת על המוצר</h3>
              <p>כתובת האימייל שלך לא תפורסם. שדות חובה מסומנים *</p>
              <ReviewForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
