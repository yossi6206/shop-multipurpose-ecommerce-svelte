<script lang="ts">
	import { Close } from "../svg";
	import MobileCategories from "../header/components/mobile-categories.svelte";
	import MobileMenus from "../header/components/mobile-menus.svelte";

  type IProps = {
    openMobileMenus: boolean;
    handleOpenMobileMenu: () => void;
    productType: string;
  }
  let { openMobileMenus, handleOpenMobileMenu, productType }: IProps = $props();

  let isToggleActive: string = $state("");

  const handleToggleActive = (type: string) => {
    isToggleActive = isToggleActive === type ? "" : type;
  };
</script>
 <!-- svelte-ignore a11y_click_events_have_key_events -->
 <!-- svelte-ignore a11y_no_static_element_interactions -->
<div class={`offcanvas__area offcanvas__radius ${openMobileMenus ? 'offcanvas-opened' : ''}`}>
  <div class="offcanvas__wrapper">
    <div class="offcanvas__close">
      <button onclick={handleOpenMobileMenu} class="offcanvas__close-btn offcanvas-close-btn">
        <span><Close/></span>
      </button>
    </div>
    <div class="offcanvas__content">
      <div class="offcanvas__top mb-70 d-flex justify-content-between align-items-center">
        <div class="offcanvas__logo logo">
          <a href="/">
            <img src="/img/logo/logo.svg" alt="logo" />
          </a>
        </div>
      </div>
      <!-- Mobile Category Component -->
      <MobileCategories {productType} />
      <!-- Mobile Menus -->
      <div class="tp-main-menu-mobile fix d-lg-none mb-40">
        <MobileMenus />
      </div>

      <div class="offcanvas__contact align-items-center d-none">
        <div class="offcanvas__contact-icon mr-20">
          <span>
            <img src="/img/icon/contact.png" alt="contact_img" />
          </span>
        </div>
        <div class="offcanvas__contact-content">
          <h3 class="offcanvas__contact-title">
            <a href="tel:098-852-987">004524865</a>
          </h3>
        </div>
      </div>
      <div class="offcanvas__btn">
        <a href="/contact" class="tp-btn-2 tp-btn-border-2">צור קשר</a>
      </div>
    </div>
    <div class="offcanvas__bottom">
      <div class="offcanvas__footer d-flex align-items-center justify-content-between">
        <div class="offcanvas__currency-wrapper currency">
          <span
            onclick={() => handleToggleActive('currency')}
            class="offcanvas__currency-selected-currency tp-currency-toggle"
            id="tp-offcanvas-currency-toggle"
          >
            מטבע: USD
          </span>
          <ul class={`offcanvas__currency-list tp-currency-list ${isToggleActive === 'currency' ? 'tp-currency-list-open' : ''}`}>
            <li>USD</li>
            <li>EUR</li>
            <li>BDT</li>
            <li>INR</li>
          </ul>
        </div>
        <div class="offcanvas__select language">
          <div class="offcanvas__lang d-flex align-items-center justify-content-md-end">
            <div class="offcanvas__lang-img mr-15">
              <img src="/img/icon/language-flag.png" alt="language-flag" />
            </div>
            <div class="offcanvas__lang-wrapper">
              <span
                onclick={() => handleToggleActive('lang')}
                class="offcanvas__lang-selected-lang tp-lang-toggle"
                id="tp-offcanvas-lang-toggle"
              >
                עברית
              </span>
              <ul class={`offcanvas__lang-list tp-lang-list ${isToggleActive === 'lang' ? 'tp-lang-list-open' : ''}`}>
                <li>ספרדית</li>
                <li>פורטוגזית</li>
                <li>אנגלית אמריקאית</li>
                <li>אנגלית קנדית</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div onclick={handleOpenMobileMenu} class={`body-overlay ${openMobileMenus ? 'opened' : ''}`}></div>
