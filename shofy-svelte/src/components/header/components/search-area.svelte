<script lang="ts">
	import { goto } from '$app/navigation'; // SvelteKit's navigation
	import { formatString } from '$lib';
	import { query } from '../../../store/product-filter-store';
	import Search from '../../svg/search.svelte';
	import NiceSelect from '../../ui/nice-select.svelte';

	// Reactive variables
	let searchText: string = '';
	let productType: string = '';

	// Handle category change
	const changeHandler = (event: { value: string; text: string }) => {
		productType = event.value;
	};

	// Handle form submission
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

<div class="tp-header-search pl-70">
	<form onsubmit={handleSubmit}>
		<div class="tp-header-search-wrapper d-flex align-items-center" dir="rtl">
			<!-- Category Dropdown -->
			<div class="tp-header-search-category">
				<NiceSelect
					options={[
						{ value: 'select-category', text: 'בחר קטגוריה' },
						{ value: 'electronics', text: 'אלקטרוניקה' },
						{ value: 'fashion', text: 'אופנה' },
						{ value: 'beauty', text: 'יופי' },
						{ value: 'jewelry', text: 'תכשיטים' }
					]}
					name="בחר קטגוריה"
					defaultCurrent={0}
					onchange={changeHandler}
					placeholder="בחר קטגוריה"
				/>
			</div>

			<!-- Search Input -->
			<div class="tp-header-search-box">
				<input type="text" placeholder="חפש מוצרים..." bind:value={searchText} />
			</div>

			<!-- Search Button -->
			<div class="tp-header-search-btn">
				<button type="submit">
					<!-- <SvgSearch /> -->
					<Search />
				</button>
			</div>
		</div>
	</form>
</div>
