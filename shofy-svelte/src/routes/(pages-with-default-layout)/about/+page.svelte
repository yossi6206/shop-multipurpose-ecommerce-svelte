<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import AboutArea from '../../../components/about/about-area.svelte';
	import CounterArea from '../../../components/counter/counter-area.svelte';
	import HistoryArea from '../../../components/history/history-area.svelte';
	import WorkArea from '../../../components/work/work-area.svelte';
	import AuthorArea from '../../../components/author/author-area.svelte';
</script>

<div dir="rtl" style="font-family: 'Segoe UI', Arial, sans-serif;">
	<!-- meta title start -->
	<MetaTitle title="דף אודות - שופי" />
	<!-- meta title end -->

	<main>
		<!-- about area start -->
		<AboutArea />
		<!-- about area end -->

		<!-- counter area start -->
		<CounterArea />
		<!-- counter area end -->

		<!-- history area start -->
		<HistoryArea />
		<!-- history area end -->

		<!-- work area start -->
		<WorkArea />
		<!-- work area end -->

		<!-- author area start -->
		<AuthorArea />
		<!-- author area end -->
	</main>
</div>
