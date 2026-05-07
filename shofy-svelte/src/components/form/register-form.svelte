<script lang="ts">
  import * as yup from 'yup';
  import { writable } from 'svelte/store';
  import ErrMsg from '../err-msg.svelte';
  import { CloseEye, OpenEye } from '../svg';

  // Stores for form values
  let name = writable('');
  let email = writable('');
  let password = writable('');
  let showPass = writable(false);
  let errors = writable<Record<string, string>>({});

  // Yup Validation Schema
  const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Invalid email'),
    password: yup.string().required().min(6).label("Password")
  });

  async function onSubmit(event: Event) {
    event.preventDefault();

    let formData = {
      name: $name,
      email: $email,
      password: $password
    };

    try {
      await schema.validate(formData, { abortEarly: false });
      errors.set({});
      alert(JSON.stringify(formData, null, 2));

      // Reset form fields
      name.set('');
      email.set('');
      password.set('');
    } catch (validationErrors: any) {
      let errorObj: Record<string, string> = {};
      validationErrors.inner.forEach((err: any) => {
        errorObj[err.path] = err.message;
      });
      errors.set(errorObj);
    }
  }

  const togglePasswordVisibility = () => {
    showPass.update(v => !v);
  };
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
 
<form onsubmit={onSubmit}>
  <div class="tp-login-input-wrapper">
    <!-- Name Field -->
    <div class="tp-login-input-box">
      <div class="tp-login-input">
        <input id="name" type="text" placeholder="Shahnewaz Sakil" bind:value={$name} />
      </div>
      <div class="tp-login-input-title">
        <label for="name">Your Name</label>
      </div>
      <ErrMsg msg={$errors.name} />
    </div>

    <!-- Email Field -->
    <div class="tp-login-input-box">
      <div class="tp-login-input">
        <input id="email" type="email" placeholder="shofy@mail.com" bind:value={$email} />
      </div>
      <div class="tp-login-input-title">
        <label for="email">Your Email</label>
      </div>
      <ErrMsg msg={$errors.email} />
    </div>

    <!-- Password Field -->
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

  <div class="tp-login-bottom">
    <button type="submit" class="tp-login-btn w-100">Sign Up</button>
  </div>
</form>
