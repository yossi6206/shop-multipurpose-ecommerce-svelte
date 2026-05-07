<script lang="ts">
  interface Props {
    title: string;
    subtitle: string;
    center?: boolean;
    bg_clr?: boolean;
  }
  const {title, subtitle, center, bg_clr}: Props = $props();
</script>

<section
  class="breadcrumb__area include-bg {center ? 'text-center' : ''} pt-95 pb-50"
  style="background-color: {bg_clr ? '#EFF1F5' : 'transparent'}"
>
  <div class="container">
    <div class="row">
      <div class="col-xxl-12">
        <div class="breadcrumb__content p-relative z-index-1">
          <h3 class="breadcrumb__title">{title}</h3>
          <div class="breadcrumb__list">
            <span><a href="/">Home</a></span>
            <span>{subtitle}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
