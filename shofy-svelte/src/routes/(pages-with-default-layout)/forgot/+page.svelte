<script lang="ts">
	import * as yup from 'yup';
	import { writable } from 'svelte/store';
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbFour from '../../../components/breadcrumb/breadcrumb-four.svelte';
	import ErrMsg from '../../../components/err-msg.svelte';

	interface FormData {
		email: string;
	}
	let email = writable('');
	let errors = writable<Record<string, string>>({});

	const schema = yup.object({
		email: yup.string().required('Email is required').email('Invalid email')
	});

	async function onSubmit(event: Event) {
		event.preventDefault();
		let formData: FormData = {
			email: $email
		};
		try {
			await schema.validate(formData, { abortEarly: false });
			errors.set({});
			alert(JSON.stringify(formData, null, 2));
			$email = '';
		} catch (validationErrors: any) {
			let errorObj: Record<string, string> = {};
			validationErrors.inner.forEach((err: any) => {
				errorObj[err.path] = err.message;
			});
			errors.set(errorObj);
		}
	}
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Forgot Page - Shofy" />
	<!-- meta title end -->

	<main>
		<!-- breadcrumb area start -->
		<BreadcrumbFour title="Forgot Password" subtitle="Reset Password" center={true} />
		<!-- breadcrumb area end -->

		<!-- forgot area start -->
		<section class="tp-login-area pb-140 p-relative z-index-1 fix">
			<div class="tp-login-shape">
				<img class="tp-login-shape-1" src="/img/login/login-shape-1.png" alt="shape" />
				<img class="tp-login-shape-2" src="/img/login/login-shape-2.png" alt="shape" />
				<img class="tp-login-shape-3" src="/img/login/login-shape-3.png" alt="shape" />
				<img class="tp-login-shape-4" src="/img/login/login-shape-4.png" alt="shape" />
			</div>
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-6 col-lg-8">
						<div class="tp-login-wrapper">
							<div class="tp-login-top text-center mb-30">
								<h3 class="tp-login-title">Reset Password</h3>
								<p>Enter your email address to request password reset.</p>
							</div>
							<div class="tp-login-option">
								<form onsubmit={onSubmit}>
									<div class="tp-login-input-wrapper">
										<div class="tp-login-input-box">
											<div class="tp-login-input">
												<input
													id="email"
													type="email"
													placeholder="shofy@mail.com"
													bind:value={$email}
												/>
											</div>
											<div class="tp-login-input-title">
												<label for="email">Your Email</label>
											</div>
											<ErrMsg msg={$errors.email} />
										</div>
									</div>
									<div class="tp-login-bottom mb-15">
										<button type="submit" class="tp-login-btn w-100">Send Mail</button>
									</div>
									<div class="tp-login-suggetions d-sm-flex align-items-center justify-content-center">
										<div class="tp-login-forgot">
											<span>Remember Password? <a href="/login"> Login</a></span>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- forgot area end -->
	</main>
</div>
