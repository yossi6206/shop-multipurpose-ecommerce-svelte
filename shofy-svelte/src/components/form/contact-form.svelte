<script lang="ts">
	import * as yup from 'yup';
	import { writable } from 'svelte/store';
	import ErrMsg from '../err-msg.svelte';

	interface FormData {
		name: string;
		email: string;
		subject: string;
		message: string;
	}

	let name = writable('');
	let email = writable('');
	let subject = writable('');
	let message = writable('');
	let errors = writable<Record<string, string>>({});

	const schema = yup.object({
		name: yup.string().required('Name is required'),
		email: yup.string().required('Email is required').email('Invalid email'),
		subject: yup.string().required('Subject is required'),
		message: yup.string().required('Message is required')
	});

	async function onSubmit(event: Event) {
		event.preventDefault();
		let formData: FormData = {
			name: $name,
			email: $email,
			subject: $subject,
			message: $message
		};
		try {
			await schema.validate(formData, { abortEarly: false });
			errors.set({});
			alert(JSON.stringify(formData, null, 2));
		} catch (validationErrors: any) {
			let errorObj: Record<string, string> = {};
			validationErrors.inner.forEach((err: any) => {
				errorObj[err.path] = err.message;
			});
			errors.set(errorObj);
		}
	}
</script>

<form onsubmit={onSubmit}>
	<div class="tp-contact-input-box">
		<div class="tp-contact-input">
			<input id="name" bind:value={$name} type="text" placeholder="Shahnewaz Sakil" />
		</div>
		<div class="tp-contact-input-title">
			<label for="name">Your Name</label>
		</div>
		<ErrMsg msg={$errors.name} />
	</div>

	<div class="tp-contact-input-box">
		<div class="tp-contact-input">
			<input id="email" bind:value={$email} type="email" placeholder="shofy@mail.com" />
		</div>
		<div class="tp-contact-input-title">
			<label for="email">Your Email</label>
		</div>
		<ErrMsg msg={$errors.email} />
	</div>

	<div class="tp-contact-input-box">
		<div class="tp-contact-input">
			<input id="subject" bind:value={$subject} type="text" placeholder="Write your subject" />
		</div>
		<div class="tp-contact-input-title">
			<label for="subject">Subject</label>
		</div>
		<ErrMsg msg={$errors.subject} />
	</div>

	<div class="tp-contact-input-box">
		<div class="tp-contact-input">
			<textarea id="message" bind:value={$message} placeholder="Write your message here..."
			></textarea>
		</div>
		<div class="tp-contact-input-title">
			<label for="message">Your Message</label>
		</div>
		<ErrMsg msg={$errors.message} />
	</div>

	<div class="tp-contact-suggetions mb-20">
		<div class="tp-contact-remeber">
			<input id="remeber" type="checkbox" />
			<label for="remeber">Save my name, email, and website in this browser for the next time I comment.</label>
		</div>
	</div>
	<div class="tp-contact-btn">
		<button type="submit">Send Message</button>
	</div>
</form>
