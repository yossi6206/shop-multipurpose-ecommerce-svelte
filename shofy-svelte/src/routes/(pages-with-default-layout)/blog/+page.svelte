<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbTwo from '../../../components/breadcrumb/breadcrumb-two.svelte';
	import BlogPostboxArea from '../../../components/blog/blog-postbox-area.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Blog Standard Page - Shofy" />
	<!-- meta title end -->

	<main>
		<!-- breadcrumb area start -->
		<BreadcrumbTwo title="Our Blog" subtitle="Blog" />
		<!-- breadcrumb area end -->

		<!-- blog postbox area start -->
		<BlogPostboxArea />
		<!-- blog postbox area end -->
	</main>

</div>
