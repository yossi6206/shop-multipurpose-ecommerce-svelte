<script lang="ts">
	import { page } from '$app/state';
	import { onDestroy } from 'svelte';
	import { derived, writable } from 'svelte/store';
	import { products } from '$lib/products-loader';
	import MetaTitle from '../../../components/meta-title.svelte';
	import FilterSelect from '../../../components/shop/sidebar/filter-select.svelte';
	import BreadcrumbOne from '../../../components/breadcrumb/breadcrumb-one.svelte';
	import { selectVal } from '../../../store/product-filter-store';
	import FashionProductItem from '../../../components/product/fashion/fashion-product-item.svelte';

	const searchFilteredItems = derived([products, selectVal], ([$products, $selectVal]) => {
		let filtered = [...$products];

		const query = page.url.searchParams;
		const searchText = query.get('searchText')?.toLowerCase() || '';
		const productType = query.get('productType')?.toLowerCase() || '';

		if (searchText && !productType) {
			filtered = filtered.filter((p) => p.title.toLowerCase().includes(searchText));
		} else if (!searchText && productType) {
			filtered = filtered.filter((p) => p.productType.toLowerCase() === productType);
		} else if (searchText && productType) {
			filtered = filtered
				.filter((p) => p.productType.toLowerCase() === productType)
				.filter((p) => p.title.toLowerCase().includes(searchText));
		}

		// Sorting
		switch ($selectVal) {
			case 'low':
				filtered = filtered.sort((a, b) => a.price - b.price);
				break;
			case 'high':
				filtered = filtered.sort((a, b) => b.price - a.price);
				break;
			case 'new':
				filtered = filtered.slice(-6);
				break;
			case 'sale':
				filtered = filtered.filter((p) => p.discount > 0);
				break;
		}

		return filtered;
	});

	let perView = writable(9);

	function handlePerView() {
		perView.update((n) => n + 3);
	}

	const unsubscribe = searchFilteredItems.subscribe(($filtered) => {});
	onDestroy(() => {
		unsubscribe();
	});
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Search Page - Shofy" />
	<!-- meta title end -->

	<main>
		<!-- breadcrumb area start -->
		<BreadcrumbOne title="Search Products" subtitle="Search Products" />
		<!-- breadcrumb area end -->

		<!-- search shop area start -->
		<section class="tp-shop-area pb-120">
			<div class="container">
				<div class="row">
					<div class="col-xl-12 col-lg-12">
						<div class="tp-shop-main-wrapper">
							<div class="tp-shop-top mb-45">
								<div class="row">
									<div class="col-xl-6">
										<div class="tp-shop-top-left d-flex align-items-center">
											<div class="tp-shop-top-result">
												<p>
													Showing 1–{$searchFilteredItems.length} of {$products.length} results
												</p>
											</div>
										</div>
									</div>
									<div class="col-xl-6">
										<FilterSelect />
									</div>
								</div>
							</div>
							<div class="tp-shop-items-wrapper tp-shop-item-primary">
								<div>
									<div class="row infinite-container">
										{#each $searchFilteredItems.slice(0, $perView) as item}
											<div class="col-xl-4 col-md-6 col-sm-6 infinite-item">
												<FashionProductItem {item} spacing={true} />
											</div>
										{/each}
									</div>
								</div>
							</div>
						</div>

						<div class="text-center">
							{#if $perView < $searchFilteredItems.length}
								<button
									onclick={handlePerView}
									type="button"
									class="btn-loadmore tp-btn tp-btn-border tp-btn-border-primary"
								>
									Load More Products
								</button>
							{:else}
								<p class="btn-loadmore-text">End Of Products</p>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- search shop area end -->
	</main>
</div>
