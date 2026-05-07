<script lang="ts">
	import product_data from "../../../data/product-data";
	import { SectionLineTwo } from "../../svg";
  import FashionProductItem from "./fashion-product-item.svelte";

  let products = [...product_data]
    .filter((p) => p.productType === "fashion")
    .sort((a, b) => b.sellCount - a.sellCount)
    .slice(0, 4);
</script>

<section class="tp-seller-area pb-140">
  <div class="container">
    <div class="row">
      <div class="col-xl-12">
        <div class="tp-section-title-wrapper-2 mb-50">
          <span class="tp-section-title-pre-2">
            Best Seller This Week’s
            <SectionLineTwo />
          </span>
          <h3 class="tp-section-title-2">This Week's Featured</h3>
        </div>
      </div>
    </div>

    <div class="row">
      {#each products as item (item.id)}
        <div class="col-xl-3 col-lg-4 col-sm-6">
          <FashionProductItem {item} />
        </div>
      {/each}
    </div>

    <div class="row">
      <div class="col-xl-12">
        <div class="tp-seller-more text-center mt-10">
          <a href="/shop" class="tp-btn tp-btn-border tp-btn-border-sm">
            Shop All Product
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
