<script lang="ts">
	import type { IBlogType } from '../../types/blog-type';
	import { Comments, Date, RightArrow } from '../svg';

	interface Props {
		item: IBlogType;
	}
	const { item }: Props = $props();
</script>

<div class="tp-blog-list-item d-md-flex d-lg-block d-xl-flex">
	<div class="tp-blog-list-thumb">
		<a href={`/blog-details/${item.id}`}>
			<img src={item.img} alt="blog-img" />
		</a>
	</div>
	<div class="tp-blog-list-content">
		<div class="tp-blog-grid-content">
			<div class="tp-blog-grid-meta">
				<span>
					<span>
						<Date />
					</span>
					{item.date}
				</span>
				<span>
					<span>
						<Comments />
					</span>
					({item.comments})
				</span>
			</div>
			<h3 class="tp-blog-grid-title">
				<a href={`/blog-details/${item.id}`}>Sweeten your Summer Wardrobes</a>
			</h3>
			<p>
				Cursus mattis sociis natoque penatibus et magnis dis Parturient montes, nascetur ridiculus.!
			</p>

			<div class="tp-blog-grid-btn">
				<a href={`/blog-details/${item.id}`} class="tp-link-btn-3">
					Read More
					<span>
						<RightArrow />
					</span>
				</a>
			</div>
		</div>
	</div>
</div>
