<script lang="ts">
	import { writable } from 'svelte/store';
	import LoginForm from '../form/login-form.svelte';

	let openLogin = writable<boolean>(false);
	let openCoupon = writable<boolean>(false);

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		console.log('submitted');
	};
</script>

<div class="tp-checkout-verify">
	<div class="tp-checkout-verify-item">
		<p class="tp-checkout-verify-reveal">
			לקוח/ה חוזר/ת?
			<button
				onclick={() => openLogin.update((n) => !n)}
				type="button"
				class="tp-checkout-login-form-reveal-btn"
			>
				לחצו כאן להתחברות
			</button>
		</p>

		{#if $openLogin}
			<div id="tpReturnCustomerLoginForm" class="tp-return-customer">
				<LoginForm
					emailLabel="כתובת אימייל"
					passwordLabel="סיסמה"
					passwordPlaceholder="לפחות 6 תווים"
					rememberLabel="זכור אותי"
					forgotPasswordLabel="שכחת סיסמה?"
					submitLabel="התחברות"
					emailRequiredMessage="נדרש אימייל"
					invalidEmailMessage="כתובת אימייל לא תקינה"
					passwordRequiredMessage="נדרשת סיסמה"
					passwordMinMessage="הסיסמה חייבת להכיל לפחות 6 תווים"
				/>
			</div>
		{/if}
	</div>
	<div class="tp-checkout-verify-item">
		<p class="tp-checkout-verify-reveal">
			יש לך קופון?
			<button
				onclick={() => openCoupon.update((n) => !n)}
				type="button"
				class="tp-checkout-coupon-form-reveal-btn"
			>
				לחצו כאן להזנת הקוד
			</button>
		</p>

		{#if $openCoupon}
			<div id="tpCheckoutCouponForm" class="tp-return-customer">
				<form onsubmit={handleSubmit}>
					<div class="tp-return-customer-input">
						<!-- svelte-ignore a11y_label_has_associated_control -->
						<label>קוד קופון:</label>
						<input type="text" placeholder="קופון" />
					</div>
					<button type="submit" class="tp-return-customer-btn tp-checkout-btn"> החלה </button>
				</form>
			</div>
		{/if}
	</div>
</div>
