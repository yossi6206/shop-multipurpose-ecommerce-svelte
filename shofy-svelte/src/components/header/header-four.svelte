<script lang="ts">
	import { useSticky } from '../../hooks/use-sticky';
	import { CartOne, MenuIcon, Search, Wishlist } from '../svg';
	import NavMenus from './components/nav-menus.svelte';
	import { totalPriceQuantity } from '../../store/cart-store';
	import SearchTwo from './components/search-two.svelte';
	import { wishlistStore } from '../../store/wishlist-store';
	import OffcanvasCartSidebar from '../offcanvas/offcanvas-cart-sidebar.svelte';
	import OffcanvasMobileSidebar from '../offcanvas/offcanvas-mobile-sidebar.svelte';

	const { isSticky } = useSticky();

	// cart offcanvas
	let cartOffcanvas = $state(false);
	function handleCartOffcanvas() {
		cartOffcanvas = !cartOffcanvas;
	}
	// mobile offcanvas
	let openMobileMenus = $state(false);
	function handleOpenMobileMenu() {
		openMobileMenus = !openMobileMenus;
	}
	// wishlist
	const {wishlists} = wishlistStore;
	// search popup
	let openSearch = $state(false);
	function handleOpenSearch() {
		openSearch = !openSearch;
	}
</script>

<header>
	<div
		id="header-sticky"
		class="tp-header-area tp-header-style-transparent-white tp-header-sticky tp-header-transparent has-dark-logo tp-header-height"
    class:header-sticky={$isSticky}
	>
		<div class="tp-header-bottom-3 pl-85 pr-85">
			<div class="container-fluid">
				<div class="row align-items-center">
					<div class="col-xl-2 col-lg-2 col-6">
						<div class="logo">
							<a href="/">
								<img class="logo-light" src="/img/logo/logo-white.svg" alt="logo" />
								<img class="logo-dark" src="/img/logo/logo.svg" alt="logo" />
							</a>
						</div>
					</div>
					<div class="col-xl-8 col-lg-8 d-none d-lg-block">
						<div class="main-menu menu-style-3 menu-style-4 p-relative">
							<nav class="tp-main-menu-content">
								<!-- menus start -->
								<NavMenus />
								<!-- menus end -->
							</nav>
						</div>
					</div>
					<div class="col-xl-2 col-lg-2 col-6">
						<div class="tp-header-action d-flex align-items-center justify-content-end ml-50">
							<div class="tp-header-action-item d-none d-sm-block">
								<button onclick={handleOpenSearch} type="button" class="tp-header-action-btn tp-search-open-btn">
									<Search />
								</button>
							</div>
							<div class="tp-header-action-item d-none d-sm-block">
								<a href="/wishlist" class="tp-header-action-btn">
									<Wishlist />
									<span class="tp-header-action-badge">{$wishlists.length}</span>
								</a>
							</div>
							<div class="tp-header-action-item d-none d-sm-block">
								<button onclick={handleCartOffcanvas} type="button" class="tp-header-action-btn cartmini-open-btn">
									<CartOne />
									<span class="tp-header-action-badge">{$totalPriceQuantity.quantity}</span>
								</button>
							</div>
							<div class="tp-header-action-item d-lg-none">
								<button onclick={handleOpenMobileMenu} type="button" class="tp-offcanvas-open-btn">
									<MenuIcon />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

<!-- cart offcanvas start -->
<OffcanvasCartSidebar {cartOffcanvas} {handleCartOffcanvas} />
<!-- cart offcanvas end -->

<!-- mobile menu start -->
<OffcanvasMobileSidebar {openMobileMenus} {handleOpenMobileMenu} productType="beauty" />
<!-- mobile menu end -->

<!-- search popup start -->
<SearchTwo {openSearch} {handleOpenSearch} />
<!-- search popup end -->
