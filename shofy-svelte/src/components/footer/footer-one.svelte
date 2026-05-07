<script lang="ts">
	import FooterBottom from './footer-bottom.svelte';
	import FooterContact from './footer-contact.svelte';
	import FooterSocials from './footer-socials.svelte';

	interface Props {
		primary_style?: boolean;
		style_2?: boolean;
		style_3?: boolean;
	}
	const { primary_style, style_2, style_3 }: Props = $props();
</script>
<!-- svelte-ignore a11y_invalid_attribute -->
<footer>
	<div
		class="tp-footer-area"
		class:tp-footer-style-2={primary_style || style_2 || style_3}
		class:tp-footer-style-primary={primary_style}
		class:tp-footer-style-6={primary_style}
		class:tp-footer-style-3={style_3}
		data-bg-color={style_2 || style_3 ? 'footer-bg-white' : 'footer-bg-grey'}
	>
		<div class="tp-footer-top pt-95 pb-40">
			<div class="container">
				<div class="row">
					<div class="col-xl-4 col-lg-3 col-md-4 col-sm-6">
						<div class="tp-footer-widget footer-col-1 mb-50">
							<div class="tp-footer-widget-content">
								<div class="tp-footer-logo">
									<a href="/">
										<img src="/img/logo/logo.svg" alt="logo" />
									</a>
								</div>
							<p class="tp-footer-desc">
								אנחנו צוות של מעצבים ומפתחים שיוצרים ערכות נושא לוורדפרס באיכות גבוהה.
							</p>
								<div class="tp-footer-social">
									<!-- Social links -->
									<FooterSocials />
									<!-- Social links -->
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
						<div class="tp-footer-widget footer-col-2 mb-50">
						<h4 class="tp-footer-widget-title">החשבון שלי</h4>
						<div class="tp-footer-widget-content">
							<ul>
								<li><a href="#">מעקב אחר הזמנות</a></li>
								<li><a href="#">משלוח</a></li>
								<li><a href="#">רשימת משאלות</a></li>
								<li><a href="#">החשבון שלי</a></li>
								<li><a href="#">היסטוריית הזמנות</a></li>
								<li><a href="#">החזרות</a></li>
							</ul>
						</div>
						</div>
					</div>

					<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
						<div class="tp-footer-widget footer-col-3 mb-50">
						<h4 class="tp-footer-widget-title">מידע</h4>
						<div class="tp-footer-widget-content">
							<ul>
								<li><a href="#">הסיפור שלנו</a></li>
								<li><a href="#">קריירה</a></li>
								<li><a href="#">מדיניות פרטיות</a></li>
								<li><a href="#">תנאים והגבלות</a></li>
								<li><a href="#">חדשות אחרונות</a></li>
								<li><a href="#">צור קשר</a></li>
							</ul>
						</div>
						</div>
					</div>

					<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
						<div class="tp-footer-widget footer-col-4 mb-50">
						<h4 class="tp-footer-widget-title">דברו איתנו</h4>
						<div class="tp-footer-widget-content">
							<div class="tp-footer-talk mb-20">
								<span>יש שאלות? התקשרו אלינו</span>
									<h4><a href="tel:670-413-90-762">+670 413 90 762</a></h4>
								</div>
								<!-- Footer contact start -->
								<FooterContact />
								<!-- Footer contact end -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom area start -->
		<FooterBottom />
		<!-- Bottom area end -->
	</div>
</footer>
