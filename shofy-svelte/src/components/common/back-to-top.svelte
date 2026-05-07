<script lang="ts">
	import { onMount } from 'svelte';

	let backToTopWrapper: HTMLElement | null = null;

	onMount(() => {
		if (typeof window !== 'undefined') {
			backToTopWrapper = document.querySelector('.back-to-top-wrapper');

			const handleScroll = () => {
				if (backToTopWrapper) {
					if (window.scrollY > 200) {
						backToTopWrapper.classList.add('back-to-top-btn-show');
					} else {
						backToTopWrapper.classList.remove('back-to-top-btn-show');
					}
				}
			};

			const scrollToTop = () => {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			};

			document.addEventListener('scroll', handleScroll);
			if (backToTopWrapper) {
				backToTopWrapper.addEventListener('click', scrollToTop);
			}

			return () => {
				document.removeEventListener('scroll', handleScroll);
				if (backToTopWrapper) {
					backToTopWrapper.removeEventListener('click', scrollToTop);
				}
			};
		}
	});
</script>

<div class="back-to-top-wrapper">
	<button id="back_to_top" type="button" class="back-to-top-btn" aria-label="Back to top">
		<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M11 6L6 1L1 6"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
</div>
