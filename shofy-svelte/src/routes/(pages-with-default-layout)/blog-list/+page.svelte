<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BlogGridArea from '../../../components/blog/blog-grid-area.svelte';
	import BreadcrumbThree from '../../../components/breadcrumb/breadcrumb-three.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Blog List Page - Shofy" />
	<!-- meta title end -->

	<main>
		<!-- breadcrumb area start -->
		<BreadcrumbThree
			title="Blog Standard"
			subtitle="Insight and advice <br /> From our Expert team."
		/>
		<!-- breadcrumb area end -->

		<!-- blog postbox area start -->
		<BlogGridArea list_style={true} />
		<!-- blog postbox area end -->
	</main>
</div>
