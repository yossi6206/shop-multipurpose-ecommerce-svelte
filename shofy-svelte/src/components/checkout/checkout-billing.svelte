
<script lang="ts">
	import NiceSelect from "../ui/nice-select.svelte";

  const changeHandler = (event: { value: string; text: string }) => {
    console.log(event.value);
  };
</script>

<div class="tp-checkout-bill-form">
  <div class="tp-checkout-bill-inner">
      <div class="row">
        <div class="col-md-6">
            <div class="tp-checkout-input">
              <label for="fname">First Name <span>*</span></label>
              <input type="text" placeholder="First Name">
            </div>
        </div>
        <div class="col-md-6">
            <div class="tp-checkout-input">
              <label for="lname">Last Name <span>*</span></label>
              <input type="text" placeholder="Last Name">
            </div>
        </div>
        <div class="col-md-12">
            <div class="tp-checkout-input">
              <label for="company">Company name (optional)</label>
              <input type="text" placeholder="Example LTD.">
            </div>
        </div>
        <div class="col-md-12">
            <div class="tp-checkout-input">
              <label for="country">Country / Region </label>
              <input type="text" placeholder="United States (US)">
            </div>
        </div>
        <div class="col-md-12">
            <div class="tp-checkout-input">
              <label for="street">Street address</label>
              <input type="text" placeholder="House number and street name">
            </div>

            <div class="tp-checkout-input">
              <input type="text" placeholder="Apartment, suite, unit, etc. (optional)">
            </div>
        </div>
        <div class="col-md-12">
            <div class="tp-checkout-input">
              <label for="city">Town / City</label>
              <input type="text" placeholder="">
            </div>
        </div>
        <div class="col-md-6">
            <div class="tp-checkout-input">
              <label for="country">State / County</label>
              <NiceSelect
                options={[
                  { value: 'new-york-us', text: 'New York US' },
                  { value: 'berlin-germany', text: 'Berlin Germany' },
                  { value: 'paris-france', text: 'Paris France' },
                  { value: 'tokiyo-japan', text: 'Tokiyo Japan' }
                ]}
                name="Select Country"
                defaultCurrent={0}
                onchange={changeHandler}
                placeholder="Select Country"
              />
            </div>
        </div>
        <div class="col-md-6">
            <div class="tp-checkout-input">
              <label for="zipcode">Postcode ZIP</label>
              <input type="text" placeholder="">
            </div>
        </div>
        <div class="col-md-12">
            <div class="tp-checkout-input">
              <label for="phone">Phone <span>*</span></label>
              <input type="text" placeholder="">
            </div>
        </div>
        <div class="col-md-12">
            <div class="tp-checkout-input">
              <label for="email">Email address <span>*</span></label>
              <input type="email" placeholder="">
            </div>
        </div>
        <div class="col-md-12">
            <div class="tp-checkout-input">
              <label for="note">Order notes (optional)</label>
              <textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
            </div>
        </div>
      </div>
  </div>
</div>