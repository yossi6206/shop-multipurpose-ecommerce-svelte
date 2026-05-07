<script lang="ts">
  import product_data from '../../../data/product-data';
  import ProductElectronicsItem from './electronic-item.svelte';
  import {SectionLine,ActiveLine} from '../../svg';

  let active_tab: string = 'חדש';
  const tabs: string[] = ["חדש", "מומלץ", "נמכרים ביותר"];

  const electronic_prd = product_data.filter(p => p.productType === 'electronics');
  const allProducts = electronic_prd;

  const handleActiveTab = (tab: string) => {
    active_tab = tab;
  };

  $: filteredProducts = (() => {
    if (active_tab === 'חדש') {
      return allProducts.slice(0, 8);
    } else if (active_tab === 'מומלץ') {
      return allProducts.filter((product) => product.featured);
    } else if (active_tab === 'נמכרים ביותר') {
      return allProducts.slice().sort((a, b) => (b.sellCount ?? 0) - (a.sellCount ?? 0)).slice(0, 8);
    } else {
      return [];
    }
  })();
</script>

<section class="tp-product-area pb-55">
  <div class="container">
    <div class="row align-items-end">
      <div class="col-xl-5 col-lg-6 col-md-5">
        <div class="tp-section-title-wrapper mb-40">
          <h3 class="tp-section-title">
            מוצרים פופולריים
            <SectionLine />
          </h3>
        </div>
      </div>
      <div class="col-xl-7 col-lg-6 col-md-7">
        <div class="tp-product-tab tp-product-tab-border mb-45 tp-tab d-flex justify-content-md-end">
          <ul class="nav nav-tabs justify-content-sm-end" id="productTab">
            {#each tabs as tab, i}
              <li class="nav-item">
                <button
                  onclick={() => handleActiveTab(tab)}
                  class="nav-link {active_tab === tab ? 'active' : ''}"
                >
                  {tab}
                  <span class="tp-product-tab-line">
                    <ActiveLine />
                  </span>
                </button>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">
        <div class="tp-product-tab-content">
          <div class="row">
            {#each filteredProducts as item, i}
              <div class="col-xl-3 col-lg-3 col-sm-6">
                <ProductElectronicsItem {item} />
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
