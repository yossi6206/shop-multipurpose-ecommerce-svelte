<script lang="ts">
	import category_data from "../../../data/category-data";

  // export let productType: string;
  let { productType }:{ productType: string} = $props();
  let isCategoryActive: boolean = $state(false);
  let openCategory: string = $state("");

  let filterCategories = category_data.filter(
    (c) => c.productType.toLowerCase() === productType.toLowerCase()
  );

  function handleOpenSubMenu(title: string) {
    openCategory = openCategory === title ? "" : title;
  }

  function toggleCategoryActive() {
    isCategoryActive = !isCategoryActive;
  }
</script>

<div class="offcanvas__category pb-40">
  <button onclick={toggleCategoryActive} class="tp-offcanvas-category-toggle">
    <i class="fa-solid fa-bars"></i>
    כל הקטגוריות
  </button>
  <div class="tp-category-mobile-menu">
    <nav class={`tp-category-menu-content ${isCategoryActive ? 'active' : ''}`}>
      <ul class={isCategoryActive ? 'active' : ''}>
        {#each filterCategories as item}
          <li class="has-dropdown">
            <!-- svelte-ignore a11y_missing_attribute -->
            <a class="pointer">
              {#if item.img}
                <span>
                  <img
                    src={item.img}
                    alt="cate img"
                    style="width: 50px; height: 50px; object-fit: contain"
                  />
                </span>
              {/if}
              <span>{item.parent}</span>
              {#if item.children}
                <button
                  onclick={() => handleOpenSubMenu(item.parent)}
                  class="dropdown-toggle-btn"
                  aria-label="toggle"
                >
                  <i class="fa-regular fa-angle-right"></i>
                </button>
              {/if}
            </a>
            {#if item.children}
              <ul class={`tp-submenu ${openCategory === item.parent ? 'active' : ''}`}>
                {#each item.children as child}
                  <!-- svelte-ignore a11y_missing_attribute -->
                  <li><a class="pointer">{child}</a></li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</div>
