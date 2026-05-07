<script lang="ts">
	import { supabase } from '$lib/supabase';
	import { errorToast } from '$lib/toast';

	interface Props {
		googleLabel?: string;
	}

	const { googleLabel = 'Sign in with google' }: Props = $props();

	async function signInWithGoogle() {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: `${window.location.origin}/`
			}
		});
		if (error) {
			errorToast(error.message);
		}
	}
</script>

<!-- svelte-ignore a11y_invalid_attribute -->
<div class="tp-login-social mb-10 d-flex flex-wrap align-items-center justify-content-center">
	<div class="tp-login-option-item has-google">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<a href="#" onclick={(e) => { e.preventDefault(); signInWithGoogle(); }}>
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
