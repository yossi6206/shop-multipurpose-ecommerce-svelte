<script lang="ts">
	import * as yup from 'yup';
	import { writable } from 'svelte/store';
	import ErrMsg from '../err-msg.svelte';
	import { CloseEye, OpenEye } from '../svg';

	interface FormData {
		email: string;
		password: string;
	}
	let showPass = writable(false);
	let email = writable('');
	let password = writable('');
	let errors = writable<Record<string, string>>({});

	const schema = yup.object({
		email: yup.string().required('Email is required').email('Invalid email'),
		password: yup.string().required('Password is required').min(6, 'Password Min. 6 characters')
	});

	async function onSubmit(event: Event) {
		event.preventDefault();
		let formData: FormData = {
			email: $email,
			password: $password
		};
		try {
			await schema.validate(formData, { abortEarly: false });
			errors.set({});
			alert(JSON.stringify(formData, null, 2));
      // form reset;
      $email = '';
      $password = '';
		} catch (validationErrors: any) {
			let errorObj: Record<string, string> = {};
			validationErrors.inner.forEach((err: any) => {
				errorObj[err.path] = err.message;
			});
			errors.set(errorObj);
		}
	}

	const togglePasswordVisibility = () => {
		showPass.update((v) => !v);
	};
</script>

<form onsubmit={onSubmit}>
	<div class="tp-login-input-wrapper">
		<div class="tp-login-input-box">
			<div class="tp-login-input">
				<input id="email" type="email" placeholder="shofy@mail.com" bind:value={$email} />
			</div>
			<div class="tp-login-input-title">
				<label for="email">Your Email</label>
			</div>
			<ErrMsg msg={$errors.email} />
		</div>

		<div class="tp-login-input-box">
			<div class="p-relative">
				<div class="tp-login-input">
					<input
						id="tp_password"
						type={$showPass ? 'text' : 'password'}
						name="password"
						placeholder="Min. 6 character"
						bind:value={$password}
					/>
				</div>
				<div class="tp-login-input-eye" id="password-show-toggle">
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<span class="open-eye" onclick={togglePasswordVisibility}>
						{#if $showPass}
							<OpenEye />
						{:else}
							<CloseEye />
						{/if}
					</span>
				</div>
				<div class="tp-login-input-title">
					<label for="tp_password">Password</label>
				</div>
			</div>
			<ErrMsg msg={$errors.password} />
		</div>
	</div>

	<div class="tp-login-suggestions d-sm-flex align-items-center justify-content-between mb-20">
		<div class="tp-login-remember">
			<input id="remember" type="checkbox" />
			<label for="remember">Remember me</label>
		</div>
		<div class="tp-login-forgot">
			<a href="/forgot">Forgot Password?</a>
		</div>
	</div>

	<div class="tp-login-bottom">
		<button type="submit" class="tp-login-btn w-100">Login</button>
	</div>
</form>
