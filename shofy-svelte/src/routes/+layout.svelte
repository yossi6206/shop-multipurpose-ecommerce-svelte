<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Preloader from '../components/common/preloader.svelte';
	import ProductModal from '../components/modal/product-modal.svelte';
	import BackToTop from '../components/common/back-to-top.svelte';
	import { loadProducts } from '$lib/products-loader';
	import '../assets/scss/main.scss';

	let isLoading = true;

	if (typeof window !== 'undefined') {
		import('bootstrap/dist/js/bootstrap');
	}

	setTimeout(() => {
		isLoading = false
	}, 1500);

	// Hydrate the products store from Supabase as early as possible.
	// Static fallback is used during SSR / first paint so layout stays identical.
	if (typeof window !== 'undefined') {
		loadProducts().catch((err) => {
			console.error('[layout] failed to load products from Supabase:', err);
		});
	}

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
