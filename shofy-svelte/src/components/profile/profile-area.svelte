<script lang="ts">
	import ProfileAddress from './profile-address.svelte';
	import ProfileInfo from './profile-info.svelte';
	import ProfileMain from './profile-main.svelte';
	import ProfileNav from './profile-nav.svelte';
	import ProfileNotification from './profile-notification.svelte';
	import ProfileOrders from './profile-orders.svelte';
	import ProfilePassword from './profile-password.svelte';
</script>

<section class="profile__area pt-120 pb-120" dir="rtl">
	<div class="container">
		<div class="profile__inner p-relative">
			<div class="profile__shape">
				<img class="profile__shape-1" src="/img/login/laptop.png" alt="" />
				<img class="profile__shape-2" src="/img/login/man.png" alt="" />
				<img class="profile__shape-3" src="/img/login/shape-1.png" alt="" />
				<img class="profile__shape-4" src="/img/login/shape-2.png" alt="" />
				<img class="profile__shape-5" src="/img/login/shape-3.png" alt="" />
				<img class="profile__shape-6" src="/img/login/shape-4.png" alt="" />
			</div>
			<div class="row">
				<div class="col-xxl-4 col-lg-4">
					<div class="profile__tab mr-40">
						<!-- profile nav start -->
						<ProfileNav />
						<!-- profile nav end -->
					</div>
				</div>
				<div class="col-xxl-8 col-lg-8">
					<div class="profile__tab-content">
						<div class="tab-content" id="profile-tabContent">
              <!-- main -->
							<div
								class="tab-pane fade show active"
								id="nav-profile"
								role="tabpanel"
								aria-labelledby="nav-profile-tab"
							>
								<ProfileMain />
							</div>
              <!-- information -->
							<div
								class="tab-pane fade"
								id="nav-information"
								role="tabpanel"
								aria-labelledby="nav-information-tab"
							>
								<ProfileInfo />
							</div>
              <!-- password -->
							<div
								class="tab-pane fade"
								id="nav-password"
								role="tabpanel"
								aria-labelledby="nav-password-tab"
							>
								<ProfilePassword />
							</div>
              <!-- address -->
							<div
								class="tab-pane fade"
								id="nav-address"
								role="tabpanel"
								aria-labelledby="nav-address-tab"
							>
								<ProfileAddress />
							</div>
              <!-- orders -->
							<div
								class="tab-pane fade"
								id="nav-order"
								role="tabpanel"
								aria-labelledby="nav-order-tab"
							>
								<ProfileOrders />
							</div>
              <!-- notification -->
							<div
								class="tab-pane fade"
								id="nav-notification"
								role="tabpanel"
								aria-labelledby="nav-notification-tab"
							>
								<ProfileNotification />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
