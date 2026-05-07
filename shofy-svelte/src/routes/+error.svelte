<script lang="ts">
	import { page } from '$app/state';
	import FooterOne from '../components/footer/footer-one.svelte';
	import HeaderTwo from '../components/header/header-two.svelte';
</script>

<!-- header start -->
<HeaderTwo style_2={true} />
<!-- header end -->

<section class="tp-error-area pt-110 pb-110">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-6 col-lg-8 col-md-10">
        <div class="tp-error-content text-center">
          <div class="tp-error-thumb">
            <img src="/img/error/error.png" alt="" />
          </div>

          <h5 class="tp-error-title">{page.status } { page.error?.message }</h5>
          <p>
            Whoops, this is embarassing. Looks like the page you were looking
            for wasn't found.
          </p>

          <a href="/" class="tp-error-btn">Back to Home</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- footer area start -->
<FooterOne primary_style={true} />
<!-- footer area end -->
