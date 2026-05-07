<script lang="ts">
  import { goto } from "$app/navigation";
	import { handleResetFilter } from "../../../store/product-filter-store";

  function handleReset() {
    handleResetFilter();
    goto("/shop");
  }
</script>

<div class="tp-shop-widget mb-50">
  <h3 class="tp-shop-widget-title">Reset Filter</h3>
  <button onclick={handleReset} class="tp-btn">
    Reset Filter
  </button>
</div>
