<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Preloader from '../components/common/preloader.svelte';
	import ProductModal from '../components/modal/product-modal.svelte';
	import BackToTop from '../components/common/back-to-top.svelte';
	import '../assets/scss/main.scss';

	let isLoading = true;

	if (typeof window !== 'undefined') {
		import('bootstrap/dist/js/bootstrap');
	}

	setTimeout(() => {
		isLoading = false
	}, 1500);

	const options = {
		duration: 3000
	};

</script>

<!-- preloader -->
<Preloader {isLoading} />

<!-- slot children -->
<slot />

<!-- svelte toast -->
<SvelteToast {options} />

<!-- product modal -->
<ProductModal />

<!-- back to top -->
<BackToTop />
