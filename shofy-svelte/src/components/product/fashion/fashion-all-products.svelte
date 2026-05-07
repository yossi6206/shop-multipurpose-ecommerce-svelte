<script lang="ts">
	import FashionProductItem from './fashion-product-item.svelte';
	import product_data from '../../../data/product-data';
	import { SectionLineTwo } from '../../svg';

	let tabs: string[] = ['All Collection', 'Shoes', 'Clothing', 'Bags'];
	let activeTab: string = tabs[0];

	let fashion_prd = product_data.filter((p) => p.productType === 'fashion');
	let allProducts = fashion_prd;

	function handleActiveTab(tab: string) {
		activeTab = tab;
	}

	// Reactive filtered products based on activeTab
	$: filteredProducts =
		activeTab === 'All Collection'
			? allProducts
			: allProducts.filter((p) => p.category.name === activeTab);
</script>

<section class="tp-product-area pb-90">
	<div class="container">
		<div class="row">
			<div class="col-xl-12">
				<div class="tp-section-title-wrapper-2 text-center mb-35">
					<span class="tp-section-title-pre-2">
						All Product Shop
						<SectionLineTwo />
					</span>
					<h3 class="tp-section-title-2">Customer Favorite Style Product</h3>
				</div>
			</div>
		</div>

		<!-- Tabs -->
		<div class="row">
			<div class="col-xl-12">
				<div class="tp-product-tab-2 tp-tab mb-50 text-center">
					<nav>
						<div class="nav nav-tabs justify-content-center">
							{#each tabs as tab}
								<button
									class={`nav-link ${activeTab === tab ? 'active' : ''}`}
									onclick={() => handleActiveTab(tab)}
								>
									{tab}
									<span class="tp-product-tab-tooltip">
										{tab === 'All Collection'
											? allProducts.length
											: allProducts.filter((p) => p.category.name === tab).length}
									</span>
								</button>
							{/each}
						</div>
					</nav>
				</div>
			</div>
		</div>

		<!-- Product Grid -->
		<div class="row">
			<div class="col-xl-12">
				<div class="row">
					{#each filteredProducts as item (item.id)}
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<FashionProductItem {item} />
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
