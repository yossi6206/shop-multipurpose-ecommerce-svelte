<script lang="ts">
	import { writable } from 'svelte/store';
	import { mobile_menu } from '../../../data/menu-data';
	import type { IMobileType } from '../../../types/menu-d-type';

	let menuData: IMobileType[] = $state(mobile_menu);

	let isActiveMenu = writable<string>('');

	function handleOpenSubMenu(title: string) {
		isActiveMenu.update((current) => (current === title ? '' : title));
	}
</script>

<nav class="tp-main-menu-content">
	{#each menuData as menu}
		<ul>
			{#if menu.homes}
				<li class="has-dropdown has-mega-menu" class:dropdown-opened={$isActiveMenu === menu.title}>
					<!-- svelte-ignore a11y_missing_attribute -->
					<a class:expanded={$isActiveMenu === menu.title}>
						בית
						<button
							onclick={() => handleOpenSubMenu(menu.title)}
							class="dropdown-toggle-btn"
							class:dropdown-opened={$isActiveMenu === menu.title}
							aria-label="toggle"
						>
							<i class="fa-regular fa-angle-right"></i>
						</button>
					</a>
					<div
						class="home-menu tp-submenu tp-mega-menu"
						class:active={$isActiveMenu === menu.title}
					>
						<div class="row row-cols-1 row-cols-lg-4 row-cols-xl-5">
							{#if menu.home_pages && menu.home_pages.length}
								{#each menu.home_pages as home}
									<div class="col">
										<div class="home-menu-item">
											<a href={home.link}>
												<div class="home-menu-thumb p-relative fix">
													<img src={home.img} alt="home img" />
												</div>
												<div class="home-menu-content">
													<h5 class="home-menu-title">{home.title}</h5>
												</div>
											</a>
										</div>
									</div>
								{/each}
							{/if}
						</div>
					</div>
				</li>
			{:else if menu.sub_menu}
				<li class="has-dropdown" class:dropdown-opened={$isActiveMenu === menu.title}>
					<!-- svelte-ignore a11y_missing_attribute -->
					<a class:expanded={$isActiveMenu === menu.title}>
						{menu.title}
						<button
							onclick={() => handleOpenSubMenu(menu.title)}
							class="dropdown-toggle-btn"
							class:dropdown-opened={$isActiveMenu === menu.title}
							aria-label="toggle"
						>
							<i class="fa-regular fa-angle-right"></i>
						</button>
					</a>
					<ul class="tp-submenu" class:active={$isActiveMenu === menu.title}>
						{#if menu.sub_menus && menu.sub_menus.length}
							{#each menu.sub_menus as subMenu, i}
								<li><a href={subMenu.link}>{subMenu.title}</a></li>
							{/each}
						{/if}
					</ul>
				</li>
			{:else}
				<li><a href={menu.link}>{menu.title}</a></li>
			{/if}
		</ul>
	{/each}
</nav>
