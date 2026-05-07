<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import SvgDropdown from '../../svg/dropdown.svelte';
	import category_data from '../../../data/category-data';
	import type { ICategory } from '../../../types/category-type';
	import { query } from '../../../store/product-filter-store';
	import { formatString } from '$lib';

	let isActive = false;
	let actionButtonRef: HTMLDivElement;

	const category_items = category_data.filter((c: ICategory) => c.productType === 'electronics');

	// Hebrew translations for category names
	const categoryTranslations: Record<string, string> = {
		'Headphones': 'אוזניות',
		'Mobile Tablets': 'טאבלטים ניידים',
		'CPU Heat Pipes': 'צינורות קירור מעבד',
		'Smart Watch': 'שעון חכם',
		'Bluetooth': 'בלוטות\'',
		'Kids Headphones': 'אוזניות לילדים',
		'Bluetooth Headphones': 'אוזניות בלוטות\'',
		'On-Ear Headphones': 'אוזניות על האוזן',
		'Samsung': 'סמסונג',
		'Apple': 'אפל',
		'CPU Cooler': 'מקרר מעבד',
		'Air CPU Cooler': 'מקרר אוויר למעבד',
		'Sports Smart Watch': 'שעון חכם לספורט',
		'Apple Watch': 'Apple Watch',
		'Fitness Smart Watch': 'שעון חכם לכושר',
		'Wireless Bluetooth': 'בלוטות\' אלחוטי',
		'Sports Bluetooth': 'בלוטות\' לספורט',
	};

	// Handle menu toggle
	const handleActive = () => {
		isActive = !isActive;
	};

	// Handle parent category navigation
	const handleParentCategory = (value: string) => {
		query.update((currentQuery) => {
			const newQuery = new URLSearchParams(currentQuery); // Create a new instance
			newQuery.set('category', formatString(value));
			goto(`/shop?${newQuery.toString()}`);
			return newQuery;
		});
	};

	// Handle subcategory navigation
	const handleSubCategory = (value: string) => {
		query.update((currentQuery) => {
			const newQuery = new URLSearchParams(currentQuery); // Create a new instance
			newQuery.set('subCategory', formatString(value));
			goto(`/shop?${newQuery.toString()}`);
			return newQuery;
		});
	};

	// Close dropdown when clicking outside
	const handleClickOutside = (event: MouseEvent) => {
		if (actionButtonRef && !actionButtonRef.contains(event.target as Node)) {
			isActive = false;
		}
	};

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_missing_attribute -->
<div
	class="tp-header-category tp-category-menu tp-header-category-toggle"
	bind:this={actionButtonRef}
>
	<button onclick={handleActive} class="tp-category-menu-btn tp-category-menu-toggle">
		<span><SvgDropdown /></span>
		כל הקטגוריות
	</button>

	{#if isActive}
		<nav class="tp-category-menu-content" class:active={isActive} transition:fade>
			<ul>
				{#each category_items as item, i}
					<li class="has-dropdown">
						<a class="pointer" onclick={() => handleParentCategory(item.parent)}>
							{#if item.img}
								<span>
									<img src={item.img} alt="cate img"/>
								</span>
							{/if}
							{categoryTranslations[item.parent] || item.parent}
						</a>

						{#if item.children}
							<ul class="tp-submenu">
								{#each item.children as child, j}
									<li>
										<a class="pointer" onclick={() => handleSubCategory(child)}>{categoryTranslations[child] || child}</a>
									</li>
								{/each}
							</ul>
						{/if}
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</div>
