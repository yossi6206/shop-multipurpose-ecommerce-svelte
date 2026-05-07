<script lang="ts">
	import { onMount } from 'svelte';

	type IProps = {
		options: { value: string; text: string }[];
		defaultCurrent: number;
		placeholder?: string;
		className?: string;
		name: string;
		onchange: (event: { value: string; text: string }) => void;
	};

	let { options, defaultCurrent, placeholder, className, onchange }: IProps = $props();

	// Reactive variables
	let open = $state(false);
	let current = $state(options[defaultCurrent]);

	// Function to handle option selection
	const currentHandler = (item: { value: string; text: string }, index: number) => {
		current = options[index];
		onchange(item);
		 // Delay closing dropdown to allow click event to finish
		 setTimeout(() => {
        onClose();
    }, 0);
	};

	// Function to close the dropdown
	const onClose = () => {
		open = false;
	};

	// Close dropdown when clicking outside
	onMount(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (!target.closest('.nice-select')) {
				onClose();
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	class={`nice-select ${className} ${open ? 'open' : ''}`}
	tabindex="0"
	onclick={() => (open = !open)}
	role="button"
>
	<span class="current">{current?.text || placeholder}</span>
	<ul class="list" role="menubar">
		{#each options as item, index}
			<li
				class={`option ${item.value === current.value ? 'selected focus' : ''}`}
				onclick={() => currentHandler(item, index)}
				role="menuitem"
			>
				{item.text}
			</li>
		{/each}
	</ul>
</div>
