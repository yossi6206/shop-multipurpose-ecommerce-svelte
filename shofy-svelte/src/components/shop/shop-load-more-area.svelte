<script lang="ts">
	import { onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	import type { IProduct } from '../../types/product-type';
	import { Grid, List } from '../svg';
	import { products } from '$lib/products-loader';
	import FilterSelect from './sidebar/filter-select.svelte';
	import FashionProductItem from '../product/fashion/fashion-product-item.svelte';
	import ProductListItem from '../product/product-list-item.svelte';
	import ShopSidebarArea from './sidebar/shop-sidebar-area.svelte';
	import { filteredProducts, handleResetFilter } from '../../store/product-filter-store';
	import { get } from 'svelte/store';

	let activeTab = writable('grid');
	let productItems: IProduct[] = $state([...get(products)]);

	let perView = writable(9);

	function handleActiveTab(tab: string) {
		activeTab.set(tab);
	}

	function handlePerView() {
		perView.update((n) => n + 3);
	}

	const unsubscribe = filteredProducts.subscribe(($filtered) => {
	
	});

	onDestroy(() => {
    unsubscribe();
    handleResetFilter();
  });
</script>

<section class="tp-shop-area pb-120">
	<div class="container">
		<div class="row">
			<div class="col-xl-3 col-lg-4">
				<!-- shop sidebar start -->
				<ShopSidebarArea />
				<!-- shop sidebar end -->
			</div>

			<div class="col-xl-9 col-lg-8">
				<div class="tp-shop-main-wrapper">
					<div class="tp-shop-top mb-45">
						<div class="row">
							<div class="col-xl-6">
								<div class="tp-shop-top-left d-flex align-items-center">
									<div class="tp-shop-top-tab tp-tab">
										<ul class="nav nav-tabs" id="productTab" role="tablist">
											<li class="nav-item" role="presentation">
												<button
													class="nav-link"
													class:active={$activeTab === 'grid'}
													onclick={() => handleActiveTab('grid')}
												>
													<Grid />
												</button>
											</li>
											<li class="nav-item" role="presentation">
												<button
													class="nav-link"
													class:active={$activeTab === 'list'}
													onclick={() => handleActiveTab('list')}
												>
													<List />
												</button>
											</li>
										</ul>
									</div>
									<div class="tp-shop-top-result">
										<p>Showing 1–{productItems.length} of {$products.length} results</p>
									</div>
								</div>
							</div>
							<div class="col-xl-6">
								<FilterSelect />
							</div>
						</div>
					</div>
					<div class="tp-shop-items-wrapper tp-shop-item-primary">
						{#if $activeTab === 'grid'}
							<div class="row infinite-container">
								{#each $filteredProducts.slice(0, $perView) as item}
									<div class="col-xl-4 col-md-6 col-sm-6 infinite-item">
										<FashionProductItem {item} spacing={true} />
									</div>
								{/each}
							</div>
						{/if}

						{#if $activeTab === 'list'}
							<div class="row">
								<div class="col-xl-12">
									{#each $filteredProducts.slice(0, $perView) as item}
										<ProductListItem {item} />
									{/each}
								</div>
							</div>
						{/if}
					</div>
				</div>

				{#if $perView < $filteredProducts.length}
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
</section>
