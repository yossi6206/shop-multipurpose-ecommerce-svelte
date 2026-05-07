<script lang="ts">
	import type { IProduct } from '../../types/product-type';
	import CountdownTimer from '../common/countdown-timer.svelte';

	let { product }: { product: IProduct } = $props();
</script>

<div
	class="tp-product-details-countdown d-flex align-items-center justify-content-between flex-wrap mt-25 mb-25"
>
	<h4 class="tp-product-details-countdown-title">
		<i class="fa-solid fa-fire-flame-curved"></i> Flash Sale end in:
	</h4>
	<div class="tp-product-details-countdown-time">
		<CountdownTimer endTime={new Date(product.offerDate?.endDate!)} />
	</div>
</div>
