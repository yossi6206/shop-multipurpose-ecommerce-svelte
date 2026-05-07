<script lang="ts">
	import ShippingCar from '../svg/shipping-car.svelte';
	import TopMenuItem from './components/top-menu-item.svelte';
	import SearchArea from './components/search-area.svelte';
	import MainRight from './components/main-right.svelte';
	import TopCategories from './components/top-categories.svelte';
	import NavMenus from './components/nav-menus.svelte';
	import Contact from '../svg/contact.svelte';
	import CompareOne from '../svg/compare/compare-one.svelte';
	import WishlistOne from '../svg/wishlist/wishlist-one.svelte';
	import CartOne from '../svg/cart/cart-one.svelte';
	import MenuIcon from '../svg/menu-icon.svelte';
	import { useSticky } from '../../hooks/use-sticky';
	import OffcanvasCartSidebar from '../offcanvas/offcanvas-cart-sidebar.svelte';
	import OffcanvasMobileSidebar from '../offcanvas/offcanvas-mobile-sidebar.svelte';
	import { totalPriceQuantity } from '../../store/cart-store';
	import { wishlistStore } from '../../store/wishlist-store';

	// sticky header
	const {isSticky} = useSticky();
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
</script>

<header>
	<div class="tp-header-area p-relative z-index-11">
		<!-- header top start  -->
		<div class="tp-header-top black-bg p-relative z-index-1 d-none d-md-block">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-md-6">
						<div class="tp-header-welcome d-flex align-items-center">
							<span>
								<ShippingCar />
							</span>
							<p>משלוח אקספרס חינם בהזמנות מעל 570+</p>
						</div>
					</div>
					<div class="col-md-6">
						<div class="tp-header-top-right d-flex align-items-center justify-content-end">
							<TopMenuItem />
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- header main start -->
		<div class="tp-header-main tp-header-sticky">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-xl-2 col-lg-2 col-md-4 col-6">
						<div class="logo">
							<a href="/">
								<img src="/img/logo/logo.svg" alt="logo" />
							</a>
						</div>
					</div>
					<div class="col-xl-6 col-lg-7 d-none d-lg-block">
						<!-- search form start -->
						<SearchArea />
						<!-- search form end -->
					</div>
					<div class="col-xl-4 col-lg-3 col-md-8 col-6">
						<!-- header right start -->
						<MainRight {handleCartOffcanvas} {handleOpenMobileMenu} />
						<!-- header right end -->
					</div>
				</div>
			</div>
		</div>

		<!-- header bottom start -->
		<div class="tp-header-bottom tp-header-bottom-border d-none d-lg-block">
			<div class="container">
				<div class="tp-mega-menu-wrapper p-relative">
					<div class="row align-items-center">
						<div class="col-xl-3 col-lg-3">
							<!-- categories start -->
							<TopCategories />
							<!-- categories end -->
						</div>
						<div class="col-xl-6 col-lg-6">
							<div class="main-menu menu-style-1">
								<nav class="tp-main-menu-content">
									<!-- menus start -->
									<NavMenus />
									<!-- menus end -->
								</nav>
							</div>
						</div>
						<div class="col-xl-3 col-lg-3">
							<div class="tp-header-contact d-flex align-items-center justify-content-end">
								<div class="tp-header-contact-icon">
									<span>
										<Contact />
									</span>
								</div>
								<div class="tp-header-contact-content">
								<h5>קו חם:</h5>
								<p><a href="tel:402-763-282-46">+(402) 763 282 46</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- header sticky start -->
	<div id="header-sticky-2" class="tp-header-sticky-area" class:header-sticky-2={$isSticky}>
		<div class="container">
			<div class="tp-mega-menu-wrapper p-relative">
				<div class="row align-items-center">
					<div class="col-xl-3 col-lg-3 col-md-3 col-6">
						<div class="logo">
							<a href="/">
								<img src="/img/logo/logo.svg" alt="logo" />
							</a>
						</div>
					</div>
					<div class="col-xl-6 col-lg-6 col-md-6 d-none d-lg-block">
						<div class="tp-header-sticky-menu main-menu menu-style-1">
							<nav id="mobile-menu">
								<!-- menus start -->
								<NavMenus />
								<!-- menus end -->
							</nav>
						</div>
					</div>
					<div class="col-xl-3 col-lg-3 col-md-3 col-6">
						<div class="tp-header-action d-flex align-items-center justify-content-end ml-50">
							<div class="tp-header-action-item d-none d-lg-block">
								<a href="/compare" class="tp-header-action-btn">
									<CompareOne />
								</a>
							</div>
							<div class="tp-header-action-item d-none d-lg-block">
								<a href="/wishlist" class="tp-header-action-btn">
									<WishlistOne />
									<span class="tp-header-action-badge">{$wishlists.length}</span>
								</a>
							</div>
							<div class="tp-header-action-item">
								<button onclick={handleCartOffcanvas} type="button" class="tp-header-action-btn cartmini-open-btn">
									<CartOne />
									<span class="tp-header-action-badge">{$totalPriceQuantity.quantity}</span>
								</button>
							</div>
							<div class="tp-header-action-item d-lg-none">
								<button onclick={handleOpenMobileMenu} type="button" class="tp-header-action-btn tp-offcanvas-open-btn">
									<MenuIcon />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- header sticky end -->
</header>

<!-- cart offcanvas start -->
<OffcanvasCartSidebar {cartOffcanvas} {handleCartOffcanvas} />
<!-- cart offcanvas end -->

<!-- mobile menu start -->
<OffcanvasMobileSidebar {openMobileMenus} {handleOpenMobileMenu} productType="electronics" />
<!-- mobile menu end -->
