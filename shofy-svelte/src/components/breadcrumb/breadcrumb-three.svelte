<script lang="ts">
  interface Props {
    title: string;
    subtitle: string;
    center?: boolean;
  }
  const { title, subtitle, center }: Props = $props();
</script>

<section class={`tp-section-title-area ${center ? 'text-center' : ''} pt-95 pb-80`}>
  <div class="container">
    <div class="row">
      <div class="col-xl-8">
        <div class="tp-section-title-wrapper-7">
          <span class="tp-section-title-pre-7">{title}</span>
          <h3 class="tp-section-title-7">{@html subtitle}</h3>
        </div>
      </div>
    </div>
  </div>
</section>
