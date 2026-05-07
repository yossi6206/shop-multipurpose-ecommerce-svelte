<script lang="ts">
	import { onMount } from 'svelte';
	import { register, type SwiperContainer } from 'swiper/element/bundle';
	import blogData from '../../data/blog-data';
	import { RightArrow, SectionLine } from '../svg';

	// Register Swiper custom elements
	onMount(() => {
		register();
	});

	// Filter blog items
	const blog_items = blogData.filter((b) => b.blog === 'electronics');

	let swiperEl: SwiperContainer;
	onMount(() => {
		if (swiperEl) {
			Object.assign(swiperEl, {
				'1200': { slidesPerView: 3 },
				'992': { slidesPerView: 2 },
				'768': { slidesPerView: 2 },
				'576': { slidesPerView: 1 },
				'0': { slidesPerView: 1 }
			});
			swiperEl.initialize();
		}
	});
</script>
<!-- svelte-ignore a11y_invalid_attribute -->
<section class="tp-blog-area" dir="rtl">
	<div class="container">
		<div class="row align-items-end">
			<div class="col-xl-4 col-md-6">
				<div class="tp-section-title-wrapper mb-50">
					<h3 class="tp-section-title">
						חדשות ומאמרים אחרונים
						<SectionLine />
					</h3>
				</div>
			</div>
			<div class="col-xl-8 col-md-6">
				<div class="tp-blog-more-wrapper">
					<div class="tp-blog-more mb-50 text-md-start">
						<a href="/blog" class="tp-btn tp-btn-2 tp-btn-blue">
							לכל הבלוגים
							<RightArrow />
						</a>
						<span class="tp-blog-more-border"></span>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xl-12">
				<swiper-container
					slides-per-view="3"
					space-between="20"
					autoplay-delay="4000"
					navigation-next-el=".tp-blog-main-slider-button-next"
					navigation-prev-el=".tp-blog-main-slider-button-prev"
					pagination-el=".tp-blog-main-slider-dot"
					bind:this={swiperEl}
				>
					{#each blog_items as item}
						<swiper-slide class="tp-blog-item mb-30">
							<div class="tp-blog-thumb p-relative fix">
								<a href={`/blog-details/${item.id}`}>
									<img src={item.img} alt="blog-img" />
								</a>
								<div class="tp-blog-meta tp-blog-meta-date">
									<span>{item.date}</span>
								</div>
							</div>
							<div class="tp-blog-content" style="text-align: right;">
								<h3 class="tp-blog-title">
									<a href={`/blog-details/${item.id}`}>{item.title}</a>
								</h3>
								<div class="tp-blog-tag">
									<span><i class="fa-light fa-tag"></i></span>
									{#each item.tags as tag, i}
										<a href="#">{tag}{i < item.tags.length - 1 ? ',' : ''}</a>
									{/each}
								</div>
								<p>{item.sm_desc}</p>
								<div class="tp-blog-btn">
									<a href={`/blog-details/${item.id}`} class="tp-btn-2 tp-btn-border-2">
										קרא עוד
										<span>
											<RightArrow />
										</span>
									</a>
								</div>
							</div>
						</swiper-slide>
					{/each}
				</swiper-container>
			</div>
		</div>
	</div>
</section>
