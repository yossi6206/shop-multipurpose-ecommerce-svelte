<script lang="ts">
	import LoginForm from '../form/login-form.svelte';
	import SocialLogin from './social-login.svelte';
</script>

<section class="tp-login-area pb-140 p-relative z-index-1 fix" dir="rtl" lang="he">
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
						<h3 class="tp-login-title">התחברות ל-Shofy</h3>
						<p>
							אין לך חשבון?
							<span><a href="/register">יצירת חשבון בחינם</a></span>
						</p>
					</div>
					<div class="tp-login-option">
						<!-- social login start -->
						<SocialLogin googleLabel="התחברות עם Google" />
						<!-- social login end -->
						<div class="tp-login-mail text-center mb-40">
							<!-- svelte-ignore a11y_invalid_attribute -->
							<p>או התחברות עם <a href="#">אימייל</a></p>
						</div>
						<!-- form start -->
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
						<!-- form end -->
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
