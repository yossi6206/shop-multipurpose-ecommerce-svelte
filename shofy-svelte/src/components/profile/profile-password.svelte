<script lang="ts">
	import { supabase } from '$lib/supabase';
	import { successToast, errorToast } from '$lib/toast';

	let newPassword = '';
	let confirmPassword = '';
	let saving = false;

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (newPassword.length < 6) {
			errorToast('הסיסמה חייבת להכיל לפחות 6 תווים');
			return;
		}
		if (newPassword !== confirmPassword) {
			errorToast('הסיסמאות אינן תואמות');
			return;
		}
		saving = true;
		const { error } = await supabase.auth.updateUser({ password: newPassword });
		saving = false;
		if (error) {
			errorToast(error.message);
		} else {
			successToast('הסיסמה עודכנה בהצלחה!');
			newPassword = '';
			confirmPassword = '';
		}
	}
</script>

<div class="profile__password">
	<form onsubmit={handleSubmit}>
		<div class="row">
			<div class="col-xxl-6 col-md-6">
				<div class="tp-profile-input-box">
					<div class="tp-profile-input">
						<input
							name="new_pass"
							id="new_pass"
							type="password"
							placeholder="לפחות 6 תווים"
							bind:value={newPassword}
						/>
					</div>
					<div class="tp-profile-input-title">
						<label for="new_pass">סיסמה חדשה</label>
					</div>
				</div>
			</div>
			<div class="col-xxl-6 col-md-6">
				<div class="tp-profile-input-box">
					<div class="tp-profile-input">
						<input
							name="con_new_pass"
							id="con_new_pass"
							type="password"
							placeholder="חזור על הסיסמה"
							bind:value={confirmPassword}
						/>
					</div>
					<div class="tp-profile-input-title">
						<label for="con_new_pass">אימות סיסמה</label>
					</div>
				</div>
			</div>
			<div class="col-xxl-6 col-md-6">
				<div class="profile__btn">
					<button type="submit" class="tp-btn" disabled={saving}>
						{saving ? 'מעדכן...' : 'עדכן'}
					</button>
				</div>
			</div>
		</div>
	</form>
</div>
