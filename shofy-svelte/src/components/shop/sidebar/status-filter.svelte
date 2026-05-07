<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { formatString } from '$lib';
	import { query } from '../../../store/product-filter-store';

	let statusOptions = ['On sale', 'In Stock'];
	let currentStatus = '';

	const params = new URLSearchParams(page.url.search);
	currentStatus = params.get('status') || '';

	function handleStatus(status: string) {
		query.update((currentQuery) => {
			const newQuery = new URLSearchParams(currentQuery); // Create a new instance
			newQuery.set('status', formatString(status));
			if (newQuery.has('status')) {
				currentStatus = formatString(status);
			} else {
				currentStatus = '';
			}
			goto(`?${newQuery.toString()}`);
			return newQuery;
		});
	}
</script>

<div class="tp-shop-widget-content">
	<div class="tp-shop-widget-checkbox">
		<ul class="filter-items filter-checkbox">
			{#each statusOptions as s, i}
				<li class="filter-item checkbox">
					<input id={formatString(s)} type="checkbox" name={formatString(s)} />
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
					<label
						id={formatString(s)}
						for={formatString(s)}
						class="pointer"
						class:active={currentStatus === formatString(s)}
						onclick={() => handleStatus(s)}
					>
						{s}
					</label>
				</li>
			{/each}
		</ul>
	</div>
</div>
