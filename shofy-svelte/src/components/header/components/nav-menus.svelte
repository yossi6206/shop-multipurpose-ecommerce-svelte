<script lang="ts">
 import { menu_data } from "../../../data/menu-data";
</script>

<ul>
  {#each menu_data as item}
    <li class="{item.drop_down ? 'has-dropdown' : item.mega_menu ? 'has-dropdown has-mega-menu' : ''}">
      <a href={item.link}>{item.title}</a>

      {#if item.home_pages}
        <div class="home-menu tp-submenu tp-mega-menu">
          <div class="row row-cols-1 row-cols-lg-4 row-cols-xl-4">
            {#each item.home_pages as home, j}
              <div class="col">
                <div class="home-menu-item">
                  <a href={home.link}>
                    <div class="home-menu-thumb p-relative fix">
                      <img src={home.img} alt="" />
                    </div>
                    <div class="home-menu-content">
                      <h5 class="home-menu-title">{home.title}</h5>
                    </div>
                  </a>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}

      {#if item.shop_mega_menus}
        <div class="shop-mega-menu tp-submenu tp-mega-menu">
          <div class="row">
            {#each item.shop_mega_menus as shop_m, k}
              <div class="col-lg-2">
                <div class="shop-mega-menu-list">
                  <a href={shop_m.link} class="shop-mega-menu-title">{shop_m.title}</a>
                  <ul>
                    {#each shop_m.list_menus as shop_sm, l}
                      <li>
                        <a href={shop_sm.link}>{shop_sm.title}</a>
                      </li>
                    {/each}
                  </ul>
                </div>
              </div>
            {/each}
            <div class="col-lg-3">
              <div class="shop-mega-menu-img">
                <img src="/img/menu/product/menu-product-img-1.jpg" alt="" />
                <div class="shop-mega-menu-btn">
                  <a href="/shop?category=mobile-tablets" class="tp-menu-showcase-btn tp-menu-showcase-btn-2">
                    טלפונים
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="shop-mega-menu-img">
                <img src="/img/menu/product/menu-product-img-2.jpg" alt="" />
                <div class="shop-mega-menu-btn">
                  <a href="/shop?category=headphones" class="tp-menu-showcase-btn tp-menu-showcase-btn-2">
                    אוזניות
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/if}

      {#if item.product_menus}
        <ul class="tp-submenu tp-mega-menu mega-menu-style-2">
          {#each item.product_menus as prd_m, m}
            <li class="has-dropdown">
              <a href="/shop" class="mega-menu-title">עמוד חנות</a>
              <ul class="tp-submenu">
                {#each prd_m.dropdown_menus as prd_sm, n}
                  <li>
                    <a href={prd_sm.link}>{prd_sm.title}</a>
                  </li>
                {/each}
              </ul>
            </li>
          {/each}
        </ul>
      {/if}

      {#if item.dropdown_menus}
        <ul class="tp-submenu">
          {#each item.dropdown_menus as drop_m}
            <li>
              <a href={drop_m.link}>{drop_m.title}</a>
            </li>
          {/each}
        </ul>
      {/if}
    </li>
  {/each}
</ul>