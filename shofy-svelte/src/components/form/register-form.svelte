<script lang="ts">
  import * as yup from 'yup';
  import { writable } from 'svelte/store';
  import ErrMsg from '../err-msg.svelte';
  import { CloseEye, OpenEye } from '../svg';
  import { supabase } from '$lib/supabase';
  import { successToast, errorToast, infoToast } from '$lib/toast';

  let name = writable('');
  let email = writable('');
  let password = writable('');
  let showPass = writable(false);
  let errors = writable<Record<string, string>>({});
  let loading = writable(false);

  const schema = yup.object({
    name: yup.string().required('שם הוא שדה חובה'),
    email: yup.string().required('אימייל הוא שדה חובה').email('כתובת אימייל לא תקינה'),
    password: yup
      .string()
      .required('סיסמה היא שדה חובה')
      .min(6, 'הסיסמה חייבת להכיל לפחות 6 תווים')
      .label('סיסמה')
  });

  async function onSubmit(event: Event) {
    event.preventDefault();

    const formData = {
      name: $name,
      email: $email,
      password: $password
    };

    try {
      await schema.validate(formData, { abortEarly: false });
      errors.set({});
    } catch (validationErrors: any) {
      const errorObj: Record<string, string> = {};
      validationErrors.inner.forEach((err: any) => {
        errorObj[err.path] = err.message;
      });
      errors.set(errorObj);
      return;
    }

    loading.set(true);

    const { data, error } = await supabase.auth.signUp({
      email: $email,
      password: $password,
      options: {
        data: {
          full_name: $name
        }
      }
    });

    loading.set(false);

    if (error) {
      errorToast(error.message);
      return;
    }

    if (data.user && !data.session) {
      infoToast('נשלח אימייל אישור לכתובתך. אנא אמת את חשבונך.');
    } else {
      successToast('ההרשמה הצליחה! ברוך הבא לשופי.');
      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    }

    name.set('');
    email.set('');
    password.set('');
  }

  const togglePasswordVisibility = () => {
    showPass.update((v) => !v);
  };
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<form onsubmit={onSubmit} dir="rtl">
  <div class="tp-login-input-wrapper">
    <!-- Name Field -->
    <div class="tp-login-input-box">
      <div class="tp-login-input">
        <input id="name" type="text" placeholder="ישראל ישראלי" bind:value={$name} />
      </div>
      <div class="tp-login-input-title">
        <label for="name">השם שלך</label>
      </div>
      <ErrMsg msg={$errors.name} />
    </div>

    <!-- Email Field -->
    <div class="tp-login-input-box">
      <div class="tp-login-input">
        <input id="email" type="email" placeholder="shofy@mail.com" bind:value={$email} dir="ltr" />
      </div>
      <div class="tp-login-input-title">
        <label for="email">האימייל שלך</label>
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
            placeholder="לפחות 6 תווים"
            bind:value={$password}
            dir="ltr"
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
          <label for="tp_password">סיסמה</label>
        </div>
      </div>
      <ErrMsg msg={$errors.password} />
    </div>
  </div>

  <div class="tp-login-bottom">
    <button type="submit" class="tp-login-btn w-100" disabled={$loading}>
      {#if $loading}
        <span>טוען...</span>
      {:else}
        הרשמה
      {/if}
    </button>
  </div>
</form>
