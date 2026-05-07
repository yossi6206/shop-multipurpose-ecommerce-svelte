<script lang="ts">
	import { goto } from '$app/navigation';
	import { formatString } from '$lib';
	import category_data from '../../data/category-data';
	import { query } from '../../store/product-filter-store';
	import { SmArrow, SmArrowTwo } from '../svg';

	// Filter the category data
	const category_items = category_data.filter((c) => c.productType === 'beauty');

	// Handle parent category click
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
<section class="tp-category-area pt-95">
	<div class="container">
		<div class="row align-items-end">
			<div class="col-lg-6 col-md-8">
				<div class="tp-section-title-wrapper-3 mb-45">
					<span class="tp-section-title-pre-3">Product Collection</span>
					<h3 class="tp-section-title-3">Discover our products</h3>
				</div>
			</div>
			<div class="col-lg-6 col-md-4">
				<div class="tp-category-more-3 text-md-end mb-55">
					<a href="/shop" class="tp-btn">
						Shop All Products
						<SmArrow />
					</a>
				</div>
			</div>
		</div>
		<div class="row">
			{#each category_items as item (item.id)}
				<div class="col-lg-3 col-sm-6">
					<div class="tp-category-item-3 p-relative black-bg text-center z-index-1 fix mb-30">
						<div
							class="tp-category-thumb-3 include-bg"
							style={`background-image:url(${item.img})`}
						></div>
						<div class="tp-category-content-3 transition-3">
							<h3 class="tp-category-title-3">
								<a onclick={() => handleParentCategory(item.parent)} class="pointer">
									{item.parent}
								</a>
							</h3>
							<span class="tp-categroy-ammount-3">
								{item.products.length} Products
							</span>
							<div class="tp-category-btn-3">
								<a
									onclick={() => handleParentCategory(item.parent)}
									class="tp-link-btn tp-link-btn-2 pointer"
								>
									View Now
									<SmArrowTwo />
								</a>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
