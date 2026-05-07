<script lang="ts">
  import { goto } from '$app/navigation';
	import { useSticky } from '../../hooks/use-sticky';
	import { wishlistStore } from '../../store/wishlist-store';
	import OffcanvasCartSidebar from '../offcanvas/offcanvas-cart-sidebar.svelte';
	import OffcanvasMobileSidebar from '../offcanvas/offcanvas-mobile-sidebar.svelte';
	import { CartOne, Compare, Facebook, MenuIcon, Phone, Search, Wishlist } from '../svg';
	import NavMenus from './components/nav-menus.svelte';
	import TopMenuItem from './components/top-menu-item.svelte';
  import { totalPriceQuantity } from '../../store/cart-store';
	import { formatString } from '$lib';
	import { query } from '../../store/product-filter-store';

  const {style_2}: {style_2?: boolean} = $props();
  let searchText = $state('');

  const {isSticky} = useSticky();

  const handleSubmit = () => {
    if (!searchText) return;
    query.update((currentQuery) => {
			const newQuery = new URLSearchParams(currentQuery); // Create a new instance
			newQuery.set('searchText', formatString(searchText));
      goto(`/search?${newQuery.toString()}`);
			return newQuery;
		});
  };

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
  <div class={`tp-header-area tp-header-style-${style_2 ? 'primary' : 'darkRed'} tp-header-height`}>
    <!-- Header Top -->
    <div class="tp-header-top-2 p-relative z-index-11 tp-header-top-border d-none d-md-block">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="tp-header-info d-flex align-items-center">
              <div class="tp-header-info-item">
                <!-- svelte-ignore a11y_invalid_attribute -->
                <a href="#">
                  <span><Facebook /></span> 7500k Followers
                </a>
              </div>
              <div class="tp-header-info-item">
                <a href="tel:402-763-282-46">
                  <span><Phone /></span> +(402) 763 282 46
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="tp-header-top-right tp-header-top-black d-flex align-items-center justify-content-end">
              <TopMenuItem/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Header Bottom -->
    <div id="header-sticky" class="tp-header-bottom-2 tp-header-sticky" class:header-sticky={$isSticky}>
      <div class="container">
        <div class="tp-mega-menu-wrapper p-relative">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-5 col-md-5 col-sm-4 col-6">
              <div class="logo">
                <a href="/">
                  <img src="/img/logo/logo.svg" alt="logo">
                </a>
              </div>
            </div>
            <div class="col-xl-5 d-none d-xl-block">
              <div class="main-menu menu-style-2">
                <nav class="tp-main-menu-content">
                  <!-- menus start -->
									<NavMenus />
									<!-- menus end -->
                </nav>
              </div>
            </div>
            <div class="col-xl-5 col-lg-7 col-md-7 col-sm-8 col-6">
              <div class="tp-header-bottom-right d-flex align-items-center justify-content-end pl-30">
                <div class="tp-header-search-2 d-none d-sm-block">
                  <form onsubmit={handleSubmit}>
                    <input type="text" placeholder="Search for Products..." bind:value={searchText} />
                    <button type="submit">
                      <Search/>
                    </button>
                  </form>
                </div>
                <div class="tp-header-action d-flex align-items-center ml-30">
                  <div class="tp-header-action-item d-none d-lg-block">
                    <a href="/compare" class="tp-header-action-btn">
                      <Compare />
                    </a>
                  </div>
                  <div class="tp-header-action-item d-none d-lg-block">
                    <a href="/wishlist" class="tp-header-action-btn">
                      <Wishlist />
                      <span class="tp-header-action-badge">{$wishlists.length}</span>
                    </a>
                  </div>
                  <div class="tp-header-action-item">
                    <button type="button" onclick={handleCartOffcanvas} class="tp-header-action-btn cartmini-open-btn">
                      <CartOne />
                      <span class="tp-header-action-badge">{$totalPriceQuantity.quantity}</span>
                    </button>
                  </div>
                  <div class="tp-header-action-item tp-header-hamburger mr-20 d-xl-none">
                    <button onclick={handleOpenMobileMenu} type="button" class="tp-offcanvas-open-btn">
                      <MenuIcon/>
                    </button>
                  </div>
                </div>
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
<OffcanvasMobileSidebar {openMobileMenus} {handleOpenMobileMenu} productType="fashion" />
<!-- mobile menu end -->
