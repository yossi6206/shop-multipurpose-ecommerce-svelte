<script lang="ts">
	import { writable } from 'svelte/store';

	// Instagram data store
	const instagram_data = writable([
		{ id: 1, link: 'https://www.instagram.com/', img: '/img/instagram/3/instagram-1.jpg' },
		{ id: 2, link: 'https://www.instagram.com/', img: '/img/instagram/3/instagram-2.jpg' },
		{ id: 3, link: 'https://www.instagram.com/', img: '/img/instagram/3/instagram-3.jpg' },
		{ id: 4, link: 'https://www.instagram.com/', img: '/img/instagram/3/instagram-4.jpg' },
		{ id: 5, link: 'https://www.instagram.com/', img: '/img/instagram/3/instagram-5.jpg' },
		{ id: 6, link: 'https://www.instagram.com/', img: '/img/instagram/3/instagram-6.jpg' }
	]);
</script>

<section class="tp-instagram-area tp-instagram-style-3">
	<div class="container-fluid pl-20 pr-20">
		<div class="row row-cols-lg-6 row-cols-sm-2 row-cols-1 gx-2 gy-2 gy-lg-0">
			{#each $instagram_data as item}
				<div class="col">
					<div class="tp-instagram-item-2 w-img">
						<img src={item.img} alt="insta-img" />
						<div class="tp-instagram-icon-2">
							<!-- svelte-ignore a11y_consider_explicit_label -->
							<a href={item.link} class="popup-image" target="_blank">
								<i class="fa-brands fa-instagram"></i>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
