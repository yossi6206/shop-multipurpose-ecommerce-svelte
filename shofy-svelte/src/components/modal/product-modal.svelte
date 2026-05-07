<script lang="ts">
	import productStore, { handleToggleModal } from '../../store/product-store';
	import ProductDetailsThumb from '../product-details/product-details-thumb.svelte';
	import ProductDetailsWrapper from '../product-details/product-details-wrapper.svelte';

	let dialog = $state<HTMLDialogElement | null>(null); // HTMLDialogElement

	$effect(() => {
		if ($productStore.showModal && dialog) dialog.showModal();
	});
</script>

{#if $productStore.modalProduct}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<dialog
		bind:this={dialog}
		onclose={handleToggleModal}
		onclick={(e) => {
			if (e.target === dialog) dialog && dialog.close();
		}}
		class="tp-product-modal"
	>
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="tp-product-modal-content d-lg-flex align-items-start">
					<button
						onclick={handleToggleModal}
						type="button"
						class="tp-product-modal-close-btn"
						aria-label="Close"
					>
						<i class="fa-regular fa-xmark"></i>
					</button>
					<!-- product details thumb start -->
					<ProductDetailsThumb product={$productStore.modalProduct} />
					<!-- product details thumb end -->

					<!-- product details wrapper -->
					<ProductDetailsWrapper
						product={$productStore.modalProduct}
						isShowBottom={false}
						modalPrd={true}
					/>
					<!-- product details wrapper -->
				</div>
			</div>
		</div>
	</dialog>
{/if}

<style>
	.tp-product-modal {
		max-width: 1200px;
		margin: auto;
		border: 0;
		border-radius: 10px;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
