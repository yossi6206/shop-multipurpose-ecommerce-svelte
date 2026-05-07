<script lang="ts">
	interface Props {
		googleLabel?: string;
	}

	const { googleLabel = 'Sign in with google' }: Props = $props();
</script>

<!-- svelte-ignore a11y_invalid_attribute -->
<div class="tp-login-social mb-10 d-flex flex-wrap align-items-center justify-content-center">
	<div class="tp-login-option-item has-google">
		<a href="#">
			<img src="/img/icon/login/google.svg" alt="" />
			{googleLabel}
		</a>
	</div>
	<div class="tp-login-option-item">
		<a href="#">
			<img src="/img/icon/login/facebook.svg" alt="" />
		</a>
	</div>
	<div class="tp-login-option-item">
		<a href="#">
			<img class="apple" src="/img/icon/login/apple.svg" alt="" />
		</a>
	</div>
</div>
