<script lang="ts">
	import { onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	import { filteredProducts, handleResetFilter } from '../../store/product-filter-store';
	import type { IProduct } from '../../types/product-type';
	import { Filter, Grid, List } from '../svg';
	import { products } from '$lib/products-loader';
	import FilterSelect from './sidebar/filter-select.svelte';
	import FashionProductItem from '../product/fashion/fashion-product-item.svelte';
	import ProductListItem from '../product/product-list-item.svelte';
	import Pagination from '../ui/pagination.svelte';
	import OffcanvasDropdown from '../offcanvas/offcanvas-dropdown.svelte';


	let activeTab = writable('grid');
  let openFilterDropdown = $state(false); 

	function handleActiveTab(tab: string) {
		activeTab.set(tab);
	}

  function handleOpenFilterDropdown () {
    openFilterDropdown = !openFilterDropdown;
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
		console.log(data, 'data');
		startIndex = newStartIndex;
		endIndex = newEndIndex;
		paginatedData = data.slice(startIndex, endIndex);
	};
</script>

<section class="tp-shop-area pb-120">
  <div class="container">
    <div class="row">
      <div class="col-xl-12">
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
                <div class="tp-shop-top-right d-sm-flex align-items-center justify-content-xl-end">
                  <FilterSelect />
                  <div class="tp-shop-top-filter">
                      <button onclick={handleOpenFilterDropdown} type="button" class="tp-filter-btn filter-open-dropdown-btn">
                        <span>
                           <Filter/>
                        </span>
                        Filter
                      </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- offcanvas start -->
            <OffcanvasDropdown {handleOpenFilterDropdown} {openFilterDropdown}/>
            <!-- offcanvas end -->
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
    </div>
  </div>
</section>