<script lang="ts">
  export const ssr = false;
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import Slider from "svelte-range-slider-pips";
  import { goto } from "$app/navigation";
	import { maxProductPrice, priceValues, query } from "../../../store/product-filter-store";

  let values = $state(get(priceValues)); // Initialize with store values
  // Handle price change
  function handlePriceChange(value: number[]) {
    priceValues.set(value);
  }

  // Get query params and update price values on mount
  onMount(() => {
    query.subscribe(($query) => {
      if ($query.has('minPrice') && $query.has('maxPrice')) {
        const minPrice = Number($query.get('minPrice')) || 0;
        const maxPrice = Number($query.get('maxPrice')) || get(maxProductPrice);
        priceValues.set([minPrice, maxPrice]);
      }
    });
  });

function handlePrice() {
		query.update((currentQuery) => {
			const newQuery = new URLSearchParams(currentQuery);
      newQuery.set("minPrice", values[0].toString());
      newQuery.set("maxPrice", values[1].toString());
      goto(`?${newQuery.toString()}`);
			return newQuery;
		});
	}
</script>


<div class="slider-container">
  <div class="tp-shop-widget-filter price__slider">
    <div id="slider-range" class="mb-10">
      <Slider min={0} max={$maxProductPrice} on:change={(e) => handlePriceChange(e.detail.values)} bind:values />
    </div>
    <div class="tp-shop-widget-filter-info d-flex align-items-center justify-content-between">
      <span class="input-range">
        ${$priceValues[0]} - ${$priceValues[1]}
      </span>
      <button onclick={handlePrice} class="tp-shop-widget-filter-btn">
        Filter
      </button>
    </div>
  </div>
</div>
