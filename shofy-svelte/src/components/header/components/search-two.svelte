<script lang="ts">
	import { goto } from "$app/navigation";
	import { formatString } from "$lib";
	import { query } from "../../../store/product-filter-store";

	type IProps = {
		openSearch: boolean;
		handleOpenSearch: () => void;
	};

	let { openSearch, handleOpenSearch }: IProps = $props();

	let searchText = $state('');
	let productType = $state('');

	const categories = ['electronics', 'fashion', 'beauty', 'jewelry'];
	const categoryLabels: Record<string, string> = {
		electronics: 'אלקטרוניקה',
		fashion: 'אופנה',
		beauty: 'יופי',
		jewelry: 'תכשיטים'
	};

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		query.update((currentQuery) => {
			const newQuery = new URLSearchParams(currentQuery); // Create a new instance
			newQuery.set('searchText', formatString(searchText));
			newQuery.set('productType', formatString(productType));
			goto(`/search?${newQuery.toString()}`);
			return newQuery;
		});
	};
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<section class="tp-search-area tp-search-style-brown" class:opened={openSearch}>
	<div class="container">
		<div class="row">
			<div class="col-xl-12">
				<div class="tp-search-form">
					<div class="tp-search-close text-center mb-20">
						<button class="tp-search-close-btn" onclick={handleOpenSearch} aria-label="close"></button>
					</div>
					<form onsubmit={handleSubmit}>
						<div class="tp-search-input mb-10" dir="rtl">
							<input type="text" placeholder="חפש מוצר..." bind:value={searchText} />
							<button type="submit" aria-label="search">
								<i class="flaticon-search-1"></i>
							</button>
						</div>
						<div class="tp-search-category">
							<span>חיפוש לפי: </span>
							{#each categories as c, i}
								<!-- svelte-ignore a11y_click_events_have_key_events -->
								<!-- svelte-ignore a11y_no_static_element_interactions -->
								<!-- svelte-ignore a11y_missing_attribute -->
								<a onclick={() => (productType = c)} class="pointer text-capitalize">
									{categoryLabels[c]}{#if i < categories.length - 1},
									{/if}
								</a>
							{/each}
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="body-overlay" class:opened={openSearch} onclick={handleOpenSearch}></div>
