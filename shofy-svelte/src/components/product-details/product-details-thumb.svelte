<script lang="ts">
	import productStore from '../../store/product-store';
	import type { IProduct } from '../../types/product-type';
	import { useVideoPopup } from '../../hooks/use-video-popup';
	const {playVideo} = useVideoPopup();

	let { product }: { product: IProduct } = $props();

	// Update active image
	const handleImageActive = (img: string) => {
		productStore.handleImageActive(img);
	};
</script>

<div class="tp-product-details-thumb-wrapper tp-tab d-sm-flex">
	<nav>
		<div class="nav nav-tabs flex-sm-column" id="productDetailsNavThumb">
			{#each product.imageURLs as item, i}
				<button
					onclick={() => handleImageActive(item.img)}
					class="nav-link"
					class:active={item.img === $productStore.activeImg}
				>
					<img src={item.img} alt="nav-img" />
				</button>
			{/each}
		</div>
	</nav>

	<div class="tab-content m-img" id="productDetailsNavContent">
		<div>
			<div class="tp-product-details-nav-main-thumb" style="background-color: #f5f6f8">
				<img src={$productStore.activeImg} alt="product-img" />
				{#if product.videoId}
					<div class="tp-product-details-thumb-video">
						<!-- svelte-ignore a11y_missing_attribute -->
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<!-- svelte-ignore a11y_no_static_element_interactions -->
						<a
							class="tp-product-details-thumb-video-btn pointer popup-video"
							aria-labelledby="Play video"
							onclick="{() => playVideo(product.videoId!)}"
						>
							<i class="fas fa-play"></i>
						</a>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

