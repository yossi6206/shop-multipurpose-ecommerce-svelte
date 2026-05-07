<script lang="ts">
	import { page } from '$app/state';
	import MetaTitle from '../../../../components/meta-title.svelte';
	import blogData from '../../../../data/blog-data';
	import BlogDetailsArea from '../../../../components/blog/details/blog-details-area.svelte';

	const blogId = page.params.id;
	const blog = blogData.find((b) => Number(b.id) === Number(blogId));
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Blog Details Page - Shofy" />
	<!-- meta title end -->

	<main>
		<!-- blog details area start -->

		{#if blog}
			<BlogDetailsArea {blog} />
		{:else}
			<div class="text-center mt-100">Blog not found with ID: {blogId}</div>
		{/if}
		<!-- blog details area end -->
	</main>

</div>
