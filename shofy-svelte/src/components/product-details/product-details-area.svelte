<script lang="ts">
	import type { IProduct } from '../../types/product-type';
	import ProductDetailsTabNav from './product-details-tab-nav.svelte';
	import ProductDetailsThumb from './product-details-thumb.svelte';
	import ProductDetailsWrapper from './product-details-wrapper.svelte';
	let { product }: { product: IProduct } = $props();
</script>

<section class="tp-product-details-area" dir="rtl">
	<div class="tp-product-details-top pb-115">
		<div class="container">
			<div class="row">
				<div class="col-xl-7 col-lg-6">
					<!-- product details thumb start -->
					<ProductDetailsThumb {product} />
					<!-- product details thumb end -->
				</div>
				<!-- col end -->
				<div class="col-xl-5 col-lg-6">
					<!-- product details wrapper -->
					<ProductDetailsWrapper {product} isShowBottom={true} />
					<!-- product details wrapper -->
				</div>
			</div>
		</div>
	</div>
	<div class="tp-product-details-bottom pb-140">
		<div class="container">
			<div class="row">
				<div class="col-xl-12">
					<!-- product details tab nav -->
					<ProductDetailsTabNav {product} />
					<!-- product details tab nav -->
				</div>
			</div>
		</div>
	</div>
</section>
