<script lang="ts">
	import FooterOne from '../../components/footer/footer-one.svelte';
	import HeaderTwo from '../../components/header/header-two.svelte';
</script>

<!-- header start -->
<HeaderTwo style_2={true} />
<!-- header end -->

<!-- slot -->
<slot />
<!-- slot -->

<!-- footer area start -->
<FooterOne primary_style={true} />
<!-- footer area end -->
