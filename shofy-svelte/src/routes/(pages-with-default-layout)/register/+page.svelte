<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbFour from '../../../components/breadcrumb/breadcrumb-four.svelte';
	import RegisterArea from '../../../components/auth/register-area.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Register Page - Shofy" />
	<!-- meta title end -->

	<main>
		<!-- breadcrumb area start -->
		<BreadcrumbFour title="My account" subtitle="My account" center={true} />
		<!-- breadcrumb area end -->

		<!-- register area start -->
		<RegisterArea />
		<!-- register area end -->
	</main>
</div>
