<script lang="ts">
	type IInstagram = {
		id: number;
		link: string;
		img: string;
	};

	// Instagram data
	export let instagram_data: IInstagram[] = [
		{ id: 1, link: 'https://www.instagram.com/', img: '/img/instagram/instagram-1.jpg' },
		{ id: 2, link: 'https://www.instagram.com/', img: '/img/instagram/instagram-2.jpg' },
		{ id: 3, link: 'https://www.instagram.com/', img: '/img/instagram/instagram-3.jpg' },
		{ id: 4, link: 'https://www.instagram.com/', img: '/img/instagram/instagram-4.jpg' },
		{ id: 5, link: 'https://www.instagram.com/', img: '/img/instagram/instagram-5.jpg' }
	];
</script>

<div class="tp-instagram-area pb-70">
	<div class="container">
		<div class="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1">
			{#each instagram_data as item (item.id)}
				<div class="col">
					<div class="tp-instagram-item p-relative z-index-1 fix mb-30 w-img">
						<img src={item.img} alt="instagram-img" />
						<div class="tp-instagram-icon">
							<!-- svelte-ignore a11y_consider_explicit_label -->
							<a href={item.link} target="_blank" class="popup-image">
								<i class="fa-brands fa-instagram"></i>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
