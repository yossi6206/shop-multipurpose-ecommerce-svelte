<script lang="ts">
	import { UserThree, Email, PhoneTwo, Address } from '../svg';
	import NiceSelect from '../ui/nice-select.svelte';
	const changeHandler = (event:{value: string; text: string }) => {
    console.log(event.value);
  };
</script>

<div class="profile__info">
	<h3 class="profile__info-title">פרטים אישיים</h3>
	<div class="profile__info-content">
		<!-- form start -->
		<form>
			<div class="row">
				<div class="col-xxl-6 col-md-6">
					<div class="profile__input-box">
						<div class="profile__input">
							<input type="text" placeholder="הכנס שם משתמש" value="Shahnewaz Sakil" />
							<span>
								<UserThree />
							</span>
						</div>
					</div>
				</div>

				<div class="col-xxl-6 col-md-6">
					<div class="profile__input-box">
						<div class="profile__input">
							<input type="email" placeholder="הכנס כתובת אימייל" value="example@mail.com" />
							<span>
								<Email />
							</span>
						</div>
					</div>
				</div>
				<div class="col-xxl-6 col-md-6">
					<div class="profile__input-box">
						<div class="profile__input">
							<input type="text" placeholder="הכנס שם משתמש פייסבוק" value="shahnewzname" />
							<span>
								<i class="fa-brands fa-facebook-f"></i>
							</span>
						</div>
					</div>
				</div>
				<div class="col-xxl-6 col-md-6">
					<div class="profile__input-box">
						<div class="profile__input">
							<input type="text" placeholder="הכנס שם משתמש טוויטר" value="shahnewzname" />
							<span><i class="fa-brands fa-twitter"></i></span>
						</div>
					</div>
				</div>
				<div class="col-xxl-6 col-md-6">
					<div class="profile__input-box">
						<div class="profile__input">
							<input type="text" placeholder="הכנס מספר טלפון" value="0123 456 7889" />
							<span>
								<PhoneTwo />
							</span>
						</div>
					</div>
				</div>
				<div class="col-xxl-6 col-md-6">
					<div class="profile__input-box">
						<div class="profile__input">
							<NiceSelect
								options={[
									{ value: 'Male', text: 'זכר' },
									{ value: 'Female', text: 'נקבה' },
									{ value: 'Others', text: 'אחר' }
								]}
								name="Gender"
								defaultCurrent={0}
								onchange={changeHandler}
								placeholder="מגדר"
							/>
						</div>
					</div>
				</div>
				<div class="col-xxl-12">
					<div class="profile__input-box">
						<div class="profile__input">
							<input type="text" placeholder="הכנס כתובת" value="3304 Randall Drive" />
							<span>
								<Address />
							</span>
						</div>
					</div>
				</div>

				<div class="col-xxl-12">
					<div class="profile__input-box">
						<div class="profile__input">
							<textarea placeholder="הכנס ביוגרפיה">שלום, זוהי הביוגרפיה שלי...</textarea>
						</div>
					</div>
				</div>
				<div class="col-xxl-12">
					<div class="profile__btn">
						<button type="submit" class="tp-btn">עדכן פרופיל</button>
					</div>
				</div>
			</div>
		</form>
		<!-- form end -->
	</div>
</div>
