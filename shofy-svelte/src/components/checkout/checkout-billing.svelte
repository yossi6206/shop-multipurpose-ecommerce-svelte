<script lang="ts">
	import NiceSelect from '../ui/nice-select.svelte';

	const changeHandler = (event: { value: string; text: string }) => {
		console.log(event.value);
	};
</script>

<div class="tp-checkout-bill-form">
	<div class="tp-checkout-bill-inner">
		<div class="row">
			<div class="col-md-6">
				<div class="tp-checkout-input">
					<label for="fname">שם פרטי <span>*</span></label>
					<input type="text" placeholder="שם פרטי" />
				</div>
			</div>
			<div class="col-md-6">
				<div class="tp-checkout-input">
					<label for="lname">שם משפחה <span>*</span></label>
					<input type="text" placeholder="שם משפחה" />
				</div>
			</div>
			<div class="col-md-12">
				<div class="tp-checkout-input">
					<label for="company">שם חברה (אופציונלי)</label>
					<input type="text" placeholder="לדוגמה בע״מ" />
				</div>
			</div>
			<div class="col-md-12">
				<div class="tp-checkout-input">
					<label for="country">מדינה / אזור</label>
					<input type="text" placeholder="ישראל" />
				</div>
			</div>
			<div class="col-md-12">
				<div class="tp-checkout-input">
					<label for="street">כתובת רחוב</label>
					<input type="text" placeholder="רחוב ומספר בית" />
				</div>

				<div class="tp-checkout-input">
					<input type="text" placeholder="דירה, כניסה, קומה וכו׳ (אופציונלי)" />
				</div>
			</div>
			<div class="col-md-12">
				<div class="tp-checkout-input">
					<label for="city">עיר / יישוב</label>
					<input type="text" placeholder="" />
				</div>
			</div>
			<div class="col-md-6">
				<div class="tp-checkout-input">
					<label for="country">מחוז / אזור</label>
					<NiceSelect
						options={[
							{ value: 'tel-aviv', text: 'תל אביב' },
							{ value: 'jerusalem', text: 'ירושלים' },
							{ value: 'haifa', text: 'חיפה' },
							{ value: 'beer-sheva', text: 'באר שבע' }
						]}
						name="בחר אזור"
						defaultCurrent={0}
						onchange={changeHandler}
						placeholder="בחר אזור"
					/>
				</div>
			</div>
			<div class="col-md-6">
				<div class="tp-checkout-input">
					<label for="zipcode">מיקוד</label>
					<input type="text" placeholder="" />
				</div>
			</div>
			<div class="col-md-12">
				<div class="tp-checkout-input">
					<label for="phone">טלפון <span>*</span></label>
					<input type="text" placeholder="" />
				</div>
			</div>
			<div class="col-md-12">
				<div class="tp-checkout-input">
					<label for="email">כתובת אימייל <span>*</span></label>
					<input type="email" placeholder="" />
				</div>
			</div>
			<div class="col-md-12">
				<div class="tp-checkout-input">
					<label for="note">הערות להזמנה (אופציונלי)</label>
					<textarea placeholder="הערות לגבי ההזמנה, למשל הוראות מיוחדות למשלוח."></textarea>
				</div>
			</div>
		</div>
	</div>
</div>
