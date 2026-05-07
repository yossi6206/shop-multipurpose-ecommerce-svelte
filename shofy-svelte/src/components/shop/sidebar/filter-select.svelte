<script lang="ts">
	import { handleSelectFilter } from '../../../store/product-filter-store';
	import NiceSelect from '../../ui/nice-select.svelte';

	function handleSelect(event: { value: string; text: string }) {
		handleSelectFilter(event.value);
	}

	const options = [
		{ value: 'default', text: 'Default Sorting' },
		{ value: 'low', text: 'Low to High' },
		{ value: 'high', text: 'High to Low' },
		{ value: 'new', text: 'New Added' },
		{ value: 'sale', text: 'On Sale' }
	];
</script>

<div class="tp-shop-top-select text-md-end">
	<NiceSelect
		{options}
		name="Select Category"
		defaultCurrent={0}
		onchange={handleSelect}
		placeholder="Select Category"
	/>
</div>
