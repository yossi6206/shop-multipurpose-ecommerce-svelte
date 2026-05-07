<script lang="ts">
	import { formatString } from '$lib';
	import { goto } from '$app/navigation';
	import brands_data from '../../../data/brand-data';
	import { query } from '../../../store/product-filter-store';

	let brands = brands_data.slice(0, 8);

	function handleBrand(category: string) {
		query.update((currentQuery) => {
			const newQuery = new URLSearchParams(currentQuery); // Create a new instance
			newQuery.set('brand', formatString(category));
			goto(`?${newQuery.toString()}`);
			return newQuery;
		});
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_missing_attribute -->
<div class="tp-shop-widget-content">
	<div
		class="tp-shop-widget-brand-list d-flex align-items-center justify-content-between flex-wrap"
	>
		{#each brands as item}
			<div class="tp-shop-widget-brand-item">
				{#if item.logo}
					<a onclick={() => handleBrand(item.name)} class="pointer">
						<img src={item.logo} alt="logo" />
					</a>
				{:else}
					<a onclick={() => handleBrand(item.name)} class="pointer">
						{item.name}
					</a>
				{/if}
			</div>
		{/each}
	</div>
</div>
