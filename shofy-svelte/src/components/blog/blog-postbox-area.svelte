<script lang="ts">
	import BlogPostboxItem from './blog-postbox-item.svelte';
	import BlogSidebar from './blog-sidebar.svelte';
	import UiPagination from '../ui/pagination.svelte';
	import blogData from '../../data/blog-data';
	import type { IBlogType } from '../../types/blog-type';

	// blog items
	const blog_items = blogData.filter((b) => b.blog === 'blog-postbox');
	let items = [...blog_items];
	const per_page = 4;
	let paginatedData: IBlogType[] = [];

	const handlePaginate = (data: any, startIndex: number, endIndex: number) => {
		paginatedData = data.slice(startIndex, endIndex);
	};
</script>

<section class="tp-postbox-area pt-120 pb-120">
	<div class="container">
		<div class="row">
			<div class="col-xl-9 col-lg-8">
				<div class="tp-postbox-wrapper pr-50">
					{#each paginatedData as blog, i}
						<BlogPostboxItem item={blog} />
					{/each}
					<div class="tp-blog-pagination mt-50">
						<div class="tp-pagination">
							<UiPagination data={items} itemsPerPage={per_page} {handlePaginate} />
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-3 col-lg-4">
				<!-- blog sidebar start -->
				<BlogSidebar />
				<!-- blog sidebar end -->
			</div>
		</div>
	</div>
</section>

<!-- video modal start -->
<!-- video modal end -->
