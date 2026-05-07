<script lang="ts">
	import RegisterForm from '../form/register-form.svelte';
	import SocialLogin from './social-login.svelte';
</script>

<section class="tp-login-area pb-140 p-relative z-index-1 fix" dir="rtl">
	<div class="tp-login-shape">
		<img class="tp-login-shape-1" src="/img/login/login-shape-1.png" alt="צורה" />
		<img class="tp-login-shape-2" src="/img/login/login-shape-2.png" alt="צורה" />
		<img class="tp-login-shape-3" src="/img/login/login-shape-3.png" alt="צורה" />
		<img class="tp-login-shape-4" src="/img/login/login-shape-4.png" alt="צורה" />
	</div>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-xl-6 col-lg-8">
				<div class="tp-login-wrapper">
					<div class="tp-login-top text-center mb-30">
						<h3 class="tp-login-title">הרשמה לשופי.</h3>
						<p>
							כבר יש לך חשבון? <span><a href="/login">כניסה</a></span>
						</p>
					</div>
					<div class="tp-login-option">
						<!-- login social start -->
						<SocialLogin googleLabel="הרשמה עם גוגל" />
						<!-- login social end -->
						<div class="tp-login-mail text-center mb-40">
							<!-- svelte-ignore a11y_invalid_attribute -->
							<p>או הירשם עם <a href="#">אימייל</a></p>
						</div>
						<!-- form start -->
						<RegisterForm />
						<!-- form end -->
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
