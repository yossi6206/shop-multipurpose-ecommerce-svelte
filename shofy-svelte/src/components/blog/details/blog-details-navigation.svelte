<script lang="ts">
	import { LeftArrow, RightArrow } from '../../svg';
</script>

<!-- svelte-ignore a11y_invalid_attribute -->
<div
	class="tp-postbox-details-navigation d-none d-md-flex justify-content-between align-items-center"
>
	<div class="tp-postbox-details-navigation-item d-flex align-items-center">
		<div class="tp-postbox-details-navigation-icon mr-15">
			<span>
				<a href="/blog-details-2">
					<LeftArrow />
				</a>
			</span>
		</div>
		<div class="tp-postbox-details-navigation-content">
			<span>Previous Post</span>
			<h3 class="tp-postbox-details-navigation-title">
				<a href="/blog-details-2"> Hiring the Right Sales Team at <br /> the Right Time</a>
			</h3>
		</div>
	</div>
	<div class="tp-postbox-details-navigation-item d-flex align-items-center text-end">
		<div class="tp-postbox-details-navigation-content">
			<span>Next Post</span>
			<h3 class="tp-postbox-details-navigation-title">
				<a href="/blog-details-2">Fully embrace the return of <br /> 90s fashion</a>
			</h3>
		</div>
		<div class="tp-postbox-details-navigation-icon ml-15">
			<span>
				<a href="/blog-details-2">
					<RightArrow />
				</a>
			</span>
		</div>
	</div>
</div>
