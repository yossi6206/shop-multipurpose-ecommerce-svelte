<script lang="ts">
	import { goto } from '$app/navigation';
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbFour from '../../../components/breadcrumb/breadcrumb-four.svelte';

  import category_data from '../../../data/category-data';// Adjust path as needed
	import { formatString } from '$lib';

  const handleCategory = (parent: string) => {
    goto(`/shop?category=${formatString(parent)}`);
  };
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Shop Categories Page - Shofy" />
	<!-- meta title end -->

	<main>
		<!-- breadcrumb area start -->
		<BreadcrumbFour title="Shop Categories" subtitle="Shop Categories" />
		<!-- breadcrumb area end -->

		<!-- category area start -->
		<section class="tp-category-area pb-120">
			<div class="container">
				<div class="row">
					{#each category_data as item (item.id)}
						<div class="col-lg-3 col-sm-6">
							<div class="tp-category-main-box mb-25 p-relative fix" style="background-color: #f3f5f7">
								<div class="tp-category-main-content">
									<h3 class="tp-category-main-title pb-1">
										<!-- svelte-ignore a11y_click_events_have_key_events -->
										<!-- svelte-ignore a11y_no_static_element_interactions -->
										<!-- svelte-ignore a11y_missing_attribute -->
										<a onclick={() => handleCategory(item.parent)} class="pointer">
											{item.parent}
										</a>
									</h3>
									<span class="tp-category-main-item">
										{item.products.length} Products
									</span>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		<!-- category area end -->
	</main>
</div>
