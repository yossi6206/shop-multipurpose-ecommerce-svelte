<script lang="ts">
	import { UserThree, Email } from '../svg';
	import { authStore } from '$lib/auth-store';
	import { supabase } from '$lib/supabase';
	import { successToast, errorToast } from '$lib/toast';

	$: user = $authStore.user;

	let fullName = '';
	let emailVal = '';
	let saving = false;

	// Sync fields when user loads
	$: if (user) {
		fullName = user.user_metadata?.full_name || user.user_metadata?.name || '';
		emailVal = user.email ?? '';
	}

	async function handleSave(e: Event) {
		e.preventDefault();
		if (!user) return;
		saving = true;

		// Update user_metadata in Supabase Auth
		const { error: authError } = await supabase.auth.updateUser({
			data: { full_name: fullName }
		});

		// Update public.profiles table
		const { error: dbError } = await supabase
			.from('profiles')
			.update({ full_name: fullName, email: emailVal, updated_at: new Date().toISOString() })
			.eq('user_id', user.id);

		saving = false;

		if (authError || dbError) {
			errorToast((authError || dbError)?.message ?? 'שגיאה בשמירה');
		} else {
			successToast('הפרופיל עודכן בהצלחה!');
		}
	}
</script>

<div class="profile__info">
	<h3 class="profile__info-title">פרטים אישיים</h3>
	<div class="profile__info-content">
		<form onsubmit={handleSave}>
			<div class="row">
				<div class="col-xxl-6 col-md-6">
					<div class="profile__input-box">
						<div class="profile__input">
							<input
								type="text"
								placeholder="שם מלא"
								bind:value={fullName}
							/>
							<span><UserThree /></span>
						</div>
					</div>
				</div>

				<div class="col-xxl-6 col-md-6">
					<div class="profile__input-box">
						<div class="profile__input">
							<input
								type="email"
								placeholder="כתובת אימייל"
								value={emailVal}
								disabled
								style="opacity:0.6;cursor:not-allowed;"
							/>
							<span><Email /></span>
						</div>
					</div>
				</div>

				<div class="col-xxl-12">
					<div class="profile__btn">
						<button type="submit" class="tp-btn" disabled={saving}>
							{saving ? 'שומר...' : 'עדכן פרופיל'}
						</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
