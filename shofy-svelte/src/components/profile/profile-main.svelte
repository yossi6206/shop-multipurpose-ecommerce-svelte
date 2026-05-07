<script lang="ts">
	import { Download, GiftBox, Orders, WishlistTwo } from '../svg';
	import { authStore, userDisplayName, isLoggedIn } from '$lib/auth-store';
	import { wishlistStore } from '../../store/wishlist-store';
	import { onMount } from 'svelte';

	const { wishlists } = wishlistStore;

	// Redirect if not logged in
	onMount(() => {
		const unsubscribe = isLoggedIn.subscribe((loggedIn) => {
			if (!loggedIn) {
				// small delay to avoid flicker on initial load
				setTimeout(() => {
					import('$lib/auth-store').then(({ isLoggedIn: il }) => {
						let val: boolean;
						const u = il.subscribe((v) => (val = v))();
						// @ts-ignore
						if (!val) window.location.href = '/login';
					});
				}, 800);
			}
		});
		return unsubscribe;
	});

	async function handleLogout() {
		await authStore.signOut();
		window.location.href = '/login';
	}

	$: user = $authStore.user;
	$: avatarUrl = user?.user_metadata?.avatar_url || '/img/users/user-10.jpg';
	$: email = user?.email ?? '';
</script>

<div class="profile__main">
	<div class="profile__main-top pb-80">
		<div class="row align-items-center">
			<div class="col-md-6">
				<div class="profile__main-inner d-flex flex-wrap align-items-center">
					<div class="profile__main-thumb">
						<img src={avatarUrl} alt="avatar" />
						<div class="profile__main-thumb-edit">
							<input id="profile-thumb-input" class="profile-img-popup" type="file" />
							<label for="profile-thumb-input"><i class="fa-light fa-camera"></i></label>
						</div>
					</div>
					<div class="profile__main-content">
						{#if $authStore.loading}
							<h4 class="profile__main-title">טוען...</h4>
						{:else if user}
							<h4 class="profile__main-title">ברוך הבא, {$userDisplayName}!</h4>
							<p style="font-size:13px;color:#666;">{email}</p>
						{:else}
							<h4 class="profile__main-title">אורח</h4>
						{/if}
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="profile__main-logout text-sm-end">
					<!-- svelte-ignore a11y_invalid_attribute -->
					<a href="#" onclick={(e) => { e.preventDefault(); handleLogout(); }} class="tp-logout-btn">
						התנתקות
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="profile__main-info">
		<div class="row gx-3">
			<div class="col-md-3 col-sm-6">
				<div class="profile__main-info-item">
					<div class="profile__main-info-icon">
						<span>
							<span class="profile-icon-count profile-download">0</span>
							<Download />
						</span>
					</div>
					<h4 class="profile__main-info-title">הורדות</h4>
				</div>
			</div>
			<div class="col-md-3 col-sm-6">
				<div class="profile__main-info-item">
					<div class="profile__main-info-icon">
						<span>
							<span class="profile-icon-count profile-order">0</span>
							<Orders />
						</span>
					</div>
					<h4 class="profile__main-info-title">הזמנות</h4>
				</div>
			</div>
			<div class="col-md-3 col-sm-6">
				<div class="profile__main-info-item">
					<div class="profile__main-info-icon">
						<span>
							<span class="profile-icon-count profile-wishlist">{$wishlists.length}</span>
							<WishlistTwo />
						</span>
					</div>
					<h4 class="profile__main-info-title">רשימת משאלות</h4>
				</div>
			</div>
			<div class="col-md-3 col-sm-6">
				<div class="profile__main-info-item">
					<div class="profile__main-info-icon">
						<span>
							<span class="profile-icon-count profile-wishlist">0</span>
							<GiftBox />
						</span>
					</div>
					<h4 class="profile__main-info-title">קופסת מתנה</h4>
				</div>
			</div>
		</div>
	</div>
</div>
