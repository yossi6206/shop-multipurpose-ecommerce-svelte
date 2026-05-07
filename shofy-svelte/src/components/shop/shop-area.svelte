<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import ShopSidebarArea from './sidebar/shop-sidebar-area.svelte';
	import { filteredProducts, handleResetFilter } from '../../store/product-filter-store';
	import type { IProduct } from '../../types/product-type';
	import { Grid, List } from '../svg';
	import { products } from '$lib/products-loader';
	import FilterSelect from './sidebar/filter-select.svelte';
	import FashionProductItem from '../product/fashion/fashion-product-item.svelte';
	import ProductListItem from '../product/product-list-item.svelte';
	import Pagination from '../ui/pagination.svelte';

	type IProps = {
		list_style?: boolean;
		full_width?: boolean;
		shop_1600?: boolean;
		shop_right_side?: boolean;
		shop_no_side?: boolean;
	};

	let { list_style, full_width, shop_1600, shop_right_side, shop_no_side }: IProps = $props();

	let activeTab = writable(list_style ? 'list' : 'grid');

	function handleActiveTab(tab: string) {
		activeTab.set(tab);
	}

	const per_page = 9;
	let startIndex = $state(0);
	let endIndex = $state(per_page);
	// Reactive statement to update paginatedData
	let paginatedData: IProduct[] = $state([]);

	// Subscribe to filteredProducts to update paginatedData when products change
	const unsubscribe = filteredProducts.subscribe(($filtered) => {
		paginatedData = $filtered.slice(startIndex, endIndex);
	});

	onDestroy(() => {
		unsubscribe();
		handleResetFilter();
	});


	// Function to handle pagination
	const handlePaginate = (data: IProduct[], newStartIndex: number, newEndIndex: number) => {
		startIndex = newStartIndex;
		endIndex = newEndIndex;
		paginatedData = data.slice(startIndex, endIndex);
	};
</script>

<section class="tp-shop-area pb-120" class:tp-shop-full-width-padding={full_width}>
	<div class={full_width ? 'container-fluid' : shop_1600 ? 'container-shop' : 'container'}>
		<div class="row">
			{#if !shop_right_side && !shop_no_side}
				<div class="col-xl-3 col-lg-4">
					<ShopSidebarArea />
				</div>
			{/if}
			<div class={shop_no_side ? 'col-xl-12' : 'col-xl-9 col-lg-8'}>
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
										<p>Showing 1–{paginatedData.length} of {$products.length} results</p>
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
								{#each paginatedData as item}
									<div class="col-xl-4 col-md-6 col-sm-6 infinite-item">
										<FashionProductItem {item} spacing={true} />
									</div>
								{/each}
							</div>
						{/if}

						{#if $activeTab === 'list'}
							<div class="row">
								<div class="col-xl-12">
									{#each paginatedData as item}
										<ProductListItem {item} />
									{/each}
								</div>
							</div>
						{/if}
					</div>

					<div class="tp-shop-pagination mt-20">
						<div class="tp-pagination">
							<Pagination data={$filteredProducts} itemsPerPage={per_page} {handlePaginate} />
						</div>
					</div>
				</div>
			</div>

			{#if shop_right_side && !shop_no_side}
				<div class="col-xl-3 col-lg-4">
					<ShopSidebarArea />
				</div>
			{/if}
		</div>
	</div>
</section>
