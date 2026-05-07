<script lang="ts">
  import { onMount } from "svelte";
  import ProductBeautyItem from "./beauty-product-item.svelte";
  import product_data from "../../../data/product-data";

  let activeRef: HTMLButtonElement | null = null;
  let activeMarker: HTMLSpanElement | null = null;
  let active_tab = "All Collection";

  const tabs = ["All Collection", "Trending", "Beauty", "Cosmetics"];

  const beauty_prd = product_data.filter((p) => p.productType === "beauty");
  const allProducts = [...beauty_prd];

  const handleActiveMarker = (event: MouseEvent, tab: string) => {
    active_tab = tab;
    activeRef = event.target as HTMLButtonElement;
    const marker = document.getElementById("productTabMarker");
    if (marker && event.target) {
      marker.style.left = `${(event.target as HTMLButtonElement).offsetLeft}px`;
      marker.style.width = `${(event.target as HTMLButtonElement).offsetWidth}px`;
    }
  };

  const filteredProducts = () => {
    if (active_tab === "All Collection") {
      return allProducts.slice(0, 8);
    } else if (active_tab === "Trending") {
      return allProducts.slice(-4);
    } else if (active_tab === "Beauty") {
      return allProducts.filter((p) => p.category.name === "Discover Skincare");
    } else if (active_tab === "Cosmetics") {
      return allProducts.filter((p) => p.category.name === "Awesome Lip Care");
    } else {
      return [...allProducts];
    }
  };

  onMount(() => {
    const nav_active = document.getElementById("nav_active");
    const marker = document.getElementById("productTabMarker");
    if (nav_active?.classList.contains("active") && marker) {
      marker.style.left = `${nav_active.offsetLeft}px`;
      marker.style.width = `${nav_active.offsetWidth}px`;
    }
  });
</script>

<section class="tp-best-area pb-60 pt-130">
  <div class="container">
    <div class="row align-items-end">
      <div class="col-xl-6 col-lg-6">
        <div class="tp-section-title-wrapper-3 mb-45 text-center text-lg-start">
          <span class="tp-section-title-pre-3">Best Seller This Week’s</span>
          <h3 class="tp-section-title-3">Enjoy the best quality</h3>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6">
        <div class="tp-product-tab-2 tp-product-tab-3 tp-tab mb-50 text-center">
          <div class="tp-product-tab-inner-3 d-flex align-items-center justify-content-center justify-content-lg-end">
            <nav>
              <div class="nav nav-tabs justify-content-center tp-product-tab tp-tab-menu p-relative">
                {#each tabs as tab, i}
                  {#if active_tab === tab}
                    <button
                      bind:this={activeRef}
                      onclick={(e) => handleActiveMarker(e, tab)}
                      class="nav-link active"
                      id="nav_active"
                    >
                      {tab}
                      <span class="tp-product-tab-tooltip">{filteredProducts().length}</span>
                    </button>
                  {:else}
                    <button
                      onclick={(e) => handleActiveMarker(e, tab)}
                      class="nav-link"
                    >
                      {tab}
                      <span class="tp-product-tab-tooltip">{filteredProducts().length}</span>
                    </button>
                  {/if}
                {/each}
                <span
                  bind:this={activeMarker}
                  id="productTabMarker"
                  class="tp-tab-line d-none d-sm-inline-block"
                ></span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">
        <div class="row">
          {#each filteredProducts() as item}
            <div class="col-lg-3 col-md-4 col-sm-6">
              <ProductBeautyItem {item} style_2={true} />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>