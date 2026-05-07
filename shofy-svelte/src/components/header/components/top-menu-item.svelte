<script lang="ts">
	// Reactive variable to track the active state
	let isActive: string = '';

	// Function to handle active state
	const handleActive = (type: string) => {
		if (type === isActive) {
			isActive = '';
		} else {
			isActive = type;
		}
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y_invalid_attribute -->

<div class="tp-header-top-menu d-flex align-items-center justify-content-end">
	<!-- Language Dropdown -->
	<div class="tp-header-top-menu-item tp-header-lang">
		<span
			onclick={() => handleActive('lang')}
			class="tp-header-lang-toggle"
			id="tp-header-lang-toggle"
		>
			עברית
		</span>
		<ul class={isActive === 'lang' ? 'tp-lang-list-open' : ''}>
			<li>
				<a href="#">ספרדית</a>
			</li>
			<li>
				<a href="#">רוסית</a>
			</li>
			<li>
				<a href="#">פורטוגזית</a>
			</li>
		</ul>
	</div>

	<!-- Currency Dropdown -->
	<div class="tp-header-top-menu-item tp-header-currency">
		<span
			onclick={() => handleActive('currency')}
			class="tp-header-currency-toggle"
			id="tp-header-currency-toggle"
		>
			USD
		</span>
		<ul class={isActive === 'currency' ? 'tp-currency-list-open' : ''}>
			<li>
				<a href="#">EUR</a>
			</li>
			<li>
				<a href="#">CHF</a>
			</li>
			<li>
				<a href="#">GBP</a>
			</li>
			<li>
				<a href="#">KWD</a>
			</li>
		</ul>
	</div>

	<!-- Settings Dropdown -->
	<div class="tp-header-top-menu-item tp-header-setting">
		<span
			onclick={() => handleActive('setting')}
			class="tp-header-setting-toggle"
			id="tp-header-setting-toggle"
		>
			הגדרות
		</span>
		<ul class={isActive === 'setting' ? 'tp-setting-list-open' : ''}>
			<li>
				<a href="/profile">הפרופיל שלי</a>
			</li>
			<li>
				<a href="/wishlist">רשימת משאלות</a>
			</li>
			<li>
				<a href="/cart">עגלת קניות</a>
			</li>
			<li>
				<a href="/login">התנתקות</a>
			</li>
		</ul>
	</div>
</div>
