<script lang="ts">
	import { totalPriceQuantity } from '../../../store/cart-store';
	import { wishlistStore } from '../../../store/wishlist-store';
	import { User, Compare, Wishlist, CartBag, MenuIcon } from '../../svg';
	import { isLoggedIn, userDisplayName } from '$lib/auth-store';

	type IProps = {
		handleCartOffcanvas: () => void;
		handleOpenMobileMenu: () => void;
	};
	let { handleCartOffcanvas, handleOpenMobileMenu }: IProps = $props();
	const { wishlists } = wishlistStore;
</script>

<div class="tp-header-main-right d-flex align-items-center justify-content-end" style="gap: 20px;">
	<!-- Profile Link -->
	<div class="tp-header-login d-none d-lg-block">
		<a href="/profile" class="d-flex align-items-center">
			<div class="tp-header-login-icon">
				<span><User /></span>
			</div>
			<div class="tp-header-login-content d-none d-xl-block">
				{#if $isLoggedIn}
					<span>שלום,</span>
					<h5 class="tp-header-login-title">{$userDisplayName}</h5>
				{:else}
					<span>Hello, Sign In</span>
					<h5 class="tp-header-login-title">Your Account</h5>
				{/if}
			</div>
		</a>
	</div>

	<!-- Header Actions -->
	<div class="tp-header-action d-flex align-items-center ml-50" style="gap: 16px;">
		<!-- Compare Button -->
		<div class="tp-header-action-item d-none d-lg-block">
			<a href="/compare" class="tp-header-action-btn">
				<Compare />
			</a>
		</div>

		<!-- Wishlist Button -->
		<div class="tp-header-action-item d-none d-lg-block">
			<a href="/wishlist" class="tp-header-action-btn">
				<Wishlist />
				<span class="tp-header-action-badge">{$wishlists.length}</span>
			</a>
		</div>

		<!-- Cart Button -->
		<div class="tp-header-action-item">
			<button onclick="{handleCartOffcanvas}" type="button" class="tp-header-action-btn cartmini-open-btn">
				<CartBag />
				<span class="tp-header-action-badge">{$totalPriceQuantity.quantity}</span>
			</button>
		</div>

		<!-- Mobile Menu Button -->
		<div class="tp-header-action-item d-lg-none">
			<button onclick={handleOpenMobileMenu} type="button" class="tp-header-action-btn tp-offcanvas-open-btn">
				<MenuIcon />
			</button>
		</div>
	</div>
</div>
