<script lang="ts">
  import { writable, get } from 'svelte/store';
  import * as yup from 'yup';
	import ErrMsg from '../err-msg.svelte';

  interface IFormValues {
    name: string;
    email: string;
    message: string;
  }

  let name = writable('');
  let email = writable('');
  let message = writable('');
  let errors = writable<{ [key: string]: string }>({});

  const schema = yup.object({
    name: yup.string().required('שם הוא שדה חובה'),
    email: yup.string().email('כתובת אימייל לא תקינה').required('אימייל הוא שדה חובה'),
    message: yup.string().required('ביקורת היא שדה חובה')
  });

  async function onSubmit(event: Event) {
    event.preventDefault();
    let values: IFormValues = {
      name: get(name),
      email: get(email),
      message: get(message)
    };
    
    try {
      await schema.validate(values, { abortEarly: false });
      alert(JSON.stringify(values, null, 2));
      name.set('');
      email.set('');
      message.set('');
      errors.set({});
    } catch (validationErrors:any) {
      let errorObj: Record<string, string> = {};
      validationErrors.inner.forEach((err: any) => {
        errorObj[err.path] = err.message;
      });
      errors.set(errorObj);
    }
  }
</script>

  <form class="tp-product-details-review-form" onsubmit={onSubmit}>
    <div class="tp-product-details-review-form-rating d-flex align-items-center">
      <p>הדירוג שלך:</p>
      <div class="tp-product-details-review-form-rating-icon d-flex align-items-center">
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
      </div>
    </div>
    <div class="tp-product-details-review-input-wrapper">
      <div class="tp-product-details-review-input-box">
        <div class="tp-product-details-review-input">
          <textarea id="message" bind:value={$message} placeholder="כתוב כאן את הביקורת שלך..."></textarea>
        </div>
        <div class="tp-product-details-review-input-title">
          <label for="message">כתוב ביקורת</label>
        </div>
        <ErrMsg msg={$errors.message} />
      </div>
      <div class="tp-product-details-review-input-box">
        <div class="tp-product-details-review-input">
          <input id="name" type="text" bind:value={$name} placeholder="השם שלך" />
        </div>
        <div class="tp-product-details-review-input-title">
          <label for="name">השם שלך</label>
        </div>
        <ErrMsg msg={$errors.name} />
      </div>
      <div class="tp-product-details-review-input-box">
        <div class="tp-product-details-review-input">
          <input id="email" type="email" bind:value={$email} placeholder="shofy@mail.com" />
        </div>
        <div class="tp-product-details-review-input-title">
          <label for="email">האימייל שלך</label>
        </div>
        <ErrMsg msg={$errors.email} />
      </div>
    </div>
    <div class="tp-product-details-review-suggetions mb-20">
      <div class="tp-product-details-review-remeber">
        <input id="remember" type="checkbox" />
        <label for="remember">שמור את השם והאימייל שלי בדפדפן לפעם הבאה שאכתוב תגובה.</label>
      </div>
    </div>
    <div class="tp-product-details-review-btn-wrapper">
      <button type="submit" class="tp-product-details-review-btn">שליחה</button>
    </div>
  </form>
