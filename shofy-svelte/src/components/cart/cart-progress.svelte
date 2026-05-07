<script lang="ts">
	import { derived } from 'svelte/store';
	import { totalPriceQuantity } from '../../store/cart-store';

	const progress = derived(
		totalPriceQuantity,
		($totalPriceQuantity) => ($totalPriceQuantity.total / 200) * 100
	);
	const remainingAmount = derived(
		totalPriceQuantity,
		($totalPriceQuantity) => 200 - $totalPriceQuantity.total
	);
</script>

<div>
	{#if $remainingAmount > 0}
		<p>הוסף ${$remainingAmount.toFixed(2)} נוספים לקבלת משלוח חינם</p>
	{:else}
		<p>אתה זכאי למשלוח חינם</p>
	{/if}

	<div class="progress">
		<div
			class="progress-bar progress-bar-striped progress-bar-animated"
			role="progressbar"
			aria-valuemin="0"
			aria-valuemax="100"
			style="width: {$progress}%"
		></div>
	</div>
</div>
