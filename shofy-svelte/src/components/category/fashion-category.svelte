<script lang="ts">
	import { goto } from '$app/navigation';
	import category_data from '../../data/category-data.js';
	import { formatString } from '$lib';
	import { RightArrow } from '../svg';
	import { query } from '../../store/product-filter-store.js';

	const categoryItems = category_data.filter((c) => c.productType === 'fashion');

	// Handle category click
	const handleParentCategory = (value: string) => {
		query.update((currentQuery) => {
			const newQuery = new URLSearchParams(currentQuery); // Create a new instance
			newQuery.set('category', formatString(value));
			goto(`/shop?${newQuery.toString()}`);
			return newQuery;
		});
	};
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_missing_attribute -->

<section class="tp-banner-area mt-20">
	<div class="container-fluid tp-gx-40">
		<div class="row tp-gx-20">
			{#each categoryItems as item (item.id)}
				<div class="col-xxl-4 col-lg-6">
					<div class="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix">
						<div
							class="tp-banner-thumb-2 include-bg transition-3"
							style="background-image: url({item.img})"
						></div>
						<h3 class="tp-banner-title-2">
							<a onclick={() => handleParentCategory(item.parent)} class="pointer">
								{item.parent}
							</a>
						</h3>
						<div class="tp-banner-btn-2">
							<a
								onclick={() => handleParentCategory(item.parent)}
								class="tp-btn tp-btn-border tp-btn-border-sm pointer"
							>
								Shop Now
								<RightArrow />
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
