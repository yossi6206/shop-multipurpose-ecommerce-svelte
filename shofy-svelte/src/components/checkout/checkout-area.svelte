<script lang="ts">
	import CheckoutVerify from './checkout-verify.svelte';
	import CheckoutBilling from './checkout-billing.svelte';
	import CheckoutOrder from './checkout-order.svelte';
	import { cart_products } from '../../store/cart-store';
</script>

<section
	class="tp-checkout-area tp-checkout-rtl pb-120"
	dir="rtl"
	style="background-color: #EFF1F5;"
>
	<div class="container">
		{#if $cart_products.length === 0}
			<div class="text-center pt-50">
				<h3 class="py-2">לא נמצאו פריטים בעגלה לתשלום</h3>
				<a href="/shop" class="tp-checkout-btn">חזרה לחנות</a>
			</div>
		{:else}
			<div class="row">
				<div class="col-xl-7 col-lg-7">
					<!-- checkout verify start -->
					<CheckoutVerify />
					<!-- checkout verify end -->
				</div>
				<!-- form start -->
				<form>
					<div class="row">
						<div class="col-lg-7">
							<div class="tp-checkout-bill-area">
								<h3 class="tp-checkout-bill-title">פרטי חיוב</h3>
								<CheckoutBilling />
							</div>
						</div>
						<div class="col-lg-5">
							<!-- checkout place order -->
							<CheckoutOrder />
							<!-- checkout place order -->
						</div>
					</div>
				</form>
				<!-- form end -->
			</div>
		{/if}
	</div>
</section>
