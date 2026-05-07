<script lang="ts">
	import MetaTitle from '../../../components/meta-title.svelte';
	import BreadcrumbFour from '../../../components/breadcrumb/breadcrumb-four.svelte';
	import LoginArea from '../../../components/auth/login-area.svelte';
</script>

<div>
	<!-- meta title start -->
	<MetaTitle title="Login Page - Shofy" />
	<!-- meta title end -->

	<main>
		<!-- breadcrumb area start -->
		<BreadcrumbFour title="My account" subtitle="My account" center={true} />
		<!-- breadcrumb area end -->

		<!-- login area start -->
		<LoginArea />
		<!-- login area end -->
	</main>
</div>
