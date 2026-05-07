<script lang="ts">
	import { onMount } from 'svelte';
	import { writable, derived } from 'svelte/store';
	import JewelryProductItem from './jewelry-product-item.svelte';
	import product_data from '../../../data/product-data';

	let activeTab = writable('All Collection');

	// Tab list
	const tabs = ['All Collection', 'Bracelets', 'Necklaces', 'Earrings'];

	// Jewelry Products
	const jewelryProducts = product_data.filter((p) => p.productType === 'jewelry');

	// Filtered Products (Reactive)
	const filteredProducts = derived(activeTab, ($activeTab) => {
		if ($activeTab === 'All Collection') {
			return jewelryProducts.slice(0, 8);
		} else {
			return jewelryProducts.filter((p) => p.category.name === $activeTab);
		}
	});

	// Marker Position
	let marker: HTMLSpanElement | null = null;
	let activeButton: HTMLButtonElement | null = null;

	const handleActiveMarker = (event: MouseEvent, tab: string) => {
		activeTab.set(tab);
		activeButton = event.target as HTMLButtonElement;

		if (marker && activeButton) {
			marker.style.left = `${activeButton.offsetLeft}px`;
			marker.style.width = `${activeButton.offsetWidth}px`;
		}
	};

	onMount(() => {
		const activeButtonEl = document.getElementById('nav_active') as HTMLButtonElement;
		if (marker && activeButtonEl) {
			marker.style.left = `${activeButtonEl.offsetLeft}px`;
			marker.style.width = `${activeButtonEl.offsetWidth}px`;
		}
	});
</script>

<section class="tp-product-area pt-115 pb-80">
	<div class="container">
		<div class="row align-items-end">
			<div class="col-xl-6 col-lg-6">
				<div class="tp-section-title-wrapper-4 mb-40 text-center text-lg-start">
					<span class="tp-section-title-pre-4">Product Collection</span>
					<h3 class="tp-section-title-4">Discover our Products</h3>
				</div>
			</div>

			<div class="col-xl-6 col-lg-6">
				<div class="tp-product-tab-2 tp-product-tab-3 tp-tab mb-45">
					<div
						class="tp-product-tab-inner-3 d-flex align-items-center justify-content-center justify-content-lg-end"
					>
						<nav>
							<div
								class="nav nav-tabs justify-content-center tp-product-tab tp-tab-menu p-relative"
							>
								{#each tabs as tab, i}
									<button
										onclick={(event) => handleActiveMarker(event, tab)}
										bind:this={activeButton}
										class="nav-link {$activeTab === tab ? 'active' : ''}"
										id={$activeTab === tab ? 'nav_active' : ''}
									>
										{tab}
										<span class="tp-product-tab-tooltip">{$filteredProducts.length}</span>
									</button>
								{/each}

								<span bind:this={marker} id="productTabMarker" class="tp-tab-line d-none d-sm-inline-block"></span>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>

		<!-- Product Grid -->
		<div class="row">
			<div class="col-xl-12">
				<div class="row">
					{#each $filteredProducts as item (item.id)}
						<div class="col-xl-3 col-lg-4 col-sm-6">
							<JewelryProductItem {item} />
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
