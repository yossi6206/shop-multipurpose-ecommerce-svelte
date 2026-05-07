<script lang="ts">
	import product_data from '../../../data/product-data';
	import type { IProduct } from '../../../types/product-type';
  import ElectronicSmItem from './electronic-sm-item.svelte';


  export let all_products: IProduct[] = [...product_data];

  const discount_products = all_products
    .filter((p) => p.productType === 'electronics' && p.discount > 0)
    .slice(0, 3);

  const featured_products = all_products
    .filter((p) => p.productType === 'electronics' && p.featured)
    .slice(0, 3);

  const selling_products = [...all_products]
    .filter((p) => p.productType === 'electronics')
    .sort((a, b) => b.sellCount - a.sellCount)
    .slice(0, 3);
</script>

<section class="tp-product-sm-area">
  <div class="container">
    <div class="row">
      <!-- Discount Products -->
      <div class="col-xl-4 col-md-6">
        <div class="tp-product-sm-list mb-50">
          <div class="tp-section-title-wrapper mb-40">
            <h3 class="tp-section-title tp-section-title-sm">
              מוצרים במבצע
            </h3>
          </div>
          <div class="tp-product-sm-wrapper mr-20">
            {#each discount_products as item (item.id)}
              <ElectronicSmItem {item} />
            {/each}
          </div>
        </div>
      </div>

      <!-- Featured Products -->
      <div class="col-xl-4 col-md-6">
        <div class="tp-product-sm-list mb-50">
          <div class="tp-section-title-wrapper mb-40">
            <h3 class="tp-section-title tp-section-title-sm">
              מוצרים מומלצים
            </h3>
          </div>
          <div class="tp-product-sm-wrapper mr-20">
            {#each featured_products as item (item.id)}
              <ElectronicSmItem {item} />
            {/each}
          </div>
        </div>
      </div>

      <!-- Selling Products -->
      <div class="col-xl-4 col-md-6">
        <div class="tp-product-sm-list mb-50">
          <div class="tp-section-title-wrapper mb-40">
            <h3 class="tp-section-title tp-section-title-sm">
              מוצרים נמכרים
            </h3>
          </div>
          <div class="tp-product-sm-wrapper mr-20">
            {#each selling_products as item (item.id)}
              <ElectronicSmItem {item} />
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
