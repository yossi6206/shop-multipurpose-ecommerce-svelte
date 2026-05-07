<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import category_data from '../../../data/category-data';
	import { formatString } from '$lib';
	import { query } from '../../../store/product-filter-store';

	let categories = category_data;
	let currentCategory = '';

	const params = new URLSearchParams(page.url.search);
	currentCategory = params.get('category') || '';


	function handleCategory(category: string) {
		query.update((currentQuery) => {
			const newQuery = new URLSearchParams(currentQuery); // Create a new instance
			newQuery.set('category', formatString(category));
			if (newQuery.has('category')) {
				currentCategory = formatString(category);
			} else {
				currentCategory = '';
			}
			goto(`?${newQuery.toString()}`);
			return newQuery;
		});
	}
</script>

<div class="tp-shop-widget-content">
	<div class="tp-shop-widget-categories">
		<ul>
			{#each categories as category}
				<li>
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<!-- svelte-ignore a11y_missing_attribute -->
					<a
						class="pointer"
						class:active={currentCategory === formatString(category.parent)}
						onclick={() => handleCategory(category.parent)}
					>
						{category.parent}
						<span>{category.products.length}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
