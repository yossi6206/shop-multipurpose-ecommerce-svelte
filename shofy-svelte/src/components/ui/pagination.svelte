<script lang="ts">
	import { onMount } from 'svelte';
	import { PaginationNext, PaginationPrev } from '../svg';
	type IProps = {
		data: unknown[];
		itemsPerPage: number;
		handlePaginate: (data: any[], startIndex: number, endIndex: number) => void;
	}
	let { data, itemsPerPage, handlePaginate }: IProps = $props();

	let currentPage: number = $state(1);
	let totalPages: number = $state(Math.ceil(data.length / itemsPerPage));

	let startIndex = (): number => (currentPage - 1) * itemsPerPage;
	let endIndex = (): number => startIndex() + itemsPerPage;

	const setPage = (idx: number): void => {
		if (idx <= 0 || idx > totalPages) return;
		window.scrollTo(0, 0);
		currentPage = idx;
		handlePaginate(data, startIndex(), endIndex());
	};

	onMount(() => {
		handlePaginate(data, startIndex(), endIndex());
	});

	$effect(() => {
    totalPages = Math.ceil(data.length / itemsPerPage);

    if (currentPage > totalPages) {
        currentPage = 1;
    }

    handlePaginate(data, startIndex(), endIndex());
});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_missing_attribute -->
<nav>
	<ul>
		<li onclick={() => setPage(currentPage - 1)} class:disable={currentPage === 1}>
			<a class="tp-pagination-prev prev page-numbers pointer" aria-label="Previous">
				<PaginationPrev />
			</a>
		</li>

		{#each Array(totalPages)
			.fill(0)
			.map((_, n) => n + 1) as n}
			<li onclick={() => setPage(n)}>
				<a class="pointer {currentPage === n ? 'current' : ''}" aria-label="page">
					{n}
				</a>
			</li>
		{/each}

		<li onclick={() => setPage(currentPage + 1)} class:disable={currentPage === totalPages}>
			<a class="next page-numbers pointer" aria-label="Next">
				<PaginationNext />
			</a>
		</li>
	</ul>
</nav>

