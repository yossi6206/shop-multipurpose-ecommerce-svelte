<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbFour from '../../../components/breadcrumb/breadcrumb-four.svelte';
	import LoginArea from '../../../components/auth/login-area.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="התחברות - Shofy" />
	<!-- meta title end -->

	<main dir="rtl" lang="he">
		<!-- breadcrumb area start -->
		<BreadcrumbFour title="החשבון שלי" subtitle="התחברות" homeLabel="בית" center={true} dir="rtl" />
		<!-- breadcrumb area end -->

		<!-- login area start -->
		<LoginArea />
		<!-- login area end -->
	</main>
</div>
