<script lang="ts">
	import { writable } from 'svelte/store';
	let { min_price, max_price }: { min_price: number; max_price: number } = $props();
	let min = writable(min_price);
	let max = writable(max_price);
	let minValue = $state(min_price);
	let maxValue = $state(max_price);

	function updateMin(event: Event) {
		const target = event.target as HTMLInputElement;
		minValue = Math.min(Number(target.value), maxValue - 1);
		min.set(minValue);
	}

	function updateMax(event: Event) {
		const target = event.target as HTMLInputElement;
		maxValue = Math.max(Number(target.value), minValue + 1);
		max.set(maxValue);
	}

  function submit() {
    console.log(`min: ${$min}, max: ${$max}`);
  }
</script>

<div class="slider">
	<input type="range" min="0" max={max_price} bind:value={minValue} oninput={updateMin} />
	<input type="range" min="0" max={max_price} bind:value={maxValue} oninput={updateMax} />
</div>

<button onclick={submit}>submit</button>

<style>
	.slider {
		width: 100%;
		position: relative;
		height: 20px;
	}

	input[type='range'] {
		position: absolute;
		width: 100%;
		background: transparent;
		pointer-events: none;
	}

	input[type='range']::-webkit-slider-runnable-track {
		height: 5px;
		background: #ccc;
		border-radius: 3px;
	}

	/* Ensure both thumbs are above the track */
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		pointer-events: auto;
		width: 16px;
		height: 16px;
		background: blue;
		border-radius: 50%;
		position: relative;
		z-index: 2;
		margin-top: -6px;
	}
</style>
