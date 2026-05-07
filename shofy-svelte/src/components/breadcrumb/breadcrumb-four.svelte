<script lang="ts">
	interface Props {
		title: string;
		subtitle: string;
		homeLabel?: string;
		center?: boolean;
		bg_clr?: boolean;
		dir?: 'ltr' | 'rtl';
	}
	const { title, subtitle, homeLabel = 'Home', center, bg_clr, dir = 'ltr' }: Props = $props();
</script>

<section
	class="breadcrumb__area include-bg {center ? 'text-center' : ''} pt-95 pb-50"
	style="background-color: {bg_clr ? '#EFF1F5' : 'transparent'}"
	{dir}
>
	<div class="container">
		<div class="row">
			<div class="col-xxl-12">
				<div class="breadcrumb__content p-relative z-index-1">
					<h3 class="breadcrumb__title">{title}</h3>
					<div class="breadcrumb__list">
						<span><a href="/">{homeLabel}</a></span>
						<span>{subtitle}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
