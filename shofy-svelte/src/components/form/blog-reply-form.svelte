<script lang="ts">
	import * as yup from 'yup';
	import { writable } from 'svelte/store';
	import ErrMsg from '../err-msg.svelte';

	interface FormData {
		name: string;
		email: string;
		message: string;
	}

	// Writable stores for form data
	let name = writable('');
	let email = writable('');
	let message = writable('');
	let errors = writable<Record<string, string>>({});

	// Yup validation schema
	const schema = yup.object({
		name: yup.string().required('Name is required'),
		email: yup.string().required('Email is required').email('Invalid email format'),
		message: yup.string().required('Message is required')
	});

	// Form submission handler
	async function onSubmit(event: Event) {
		event.preventDefault();
		let formData: FormData = {
			name: $name,
			email: $email,
			message: $message
		};
		try {
			// Validate form data
			await schema.validate(formData, { abortEarly: false });
			errors.set({});
			// If valid, handle the form submission (e.g., send data to the server or show a success message)
			alert(JSON.stringify(formData, null, 2));
			// Reset form after submission
			name.set('');
			email.set('');
			message.set('');
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
	<div class="tp-postbox-details-form">
		<h3 class="tp-postbox-details-form-title">Leave a Reply</h3>
		<p>Your email address will not be published. Required fields are marked *</p>

		<div class="tp-postbox-details-form-wrapper">
			<div class="tp-postbox-details-form-inner">
				<!-- Name Input -->
				<div class="tp-postbox-details-input-box">
					<div class="tp-contact-input">
						<input id="name" bind:value={$name} type="text" placeholder="Shahnewaz Sakil" />
					</div>
					<div class="tp-postbox-details-input-title">
						<label for="name">Your Name</label>
					</div>
					<ErrMsg msg={$errors.name} />
				</div>

				<!-- Email Input -->
				<div class="tp-postbox-details-input-box">
					<div class="tp-contact-input">
						<input id="email" bind:value={$email} type="email" placeholder="shofy@mail.com" />
					</div>
					<div class="tp-postbox-details-input-title">
						<label for="email">Your Email</label>
					</div>
					<ErrMsg msg={$errors.email} />
				</div>

				<!-- Message Input -->
				<div class="tp-postbox-details-input-box">
					<div class="tp-contact-input">
						<textarea id="message" bind:value={$message} placeholder="Write your message here..."
						></textarea>
					</div>
					<div class="tp-postbox-details-input-title">
						<label for="message">Your Message</label>
					</div>
					<ErrMsg msg={$errors.message} />
				</div>
			</div>

			<!-- Checkbox: Remember me -->
			<div class="tp-postbox-details-suggetions mb-20">
				<div class="tp-postbox-details-remeber">
					<input id="remeber" type="checkbox" />
					<label for="remeber">
						Save my name, email, and website in this browser for the next time I comment.
					</label>
				</div>
			</div>

			<!-- Submit Button -->
			<div class="tp-postbox-details-input-box">
				<button class="tp-postbox-details-input-btn" type="submit"> Post Comment </button>
			</div>
		</div>
	</div>
</form>
