<script lang="ts">
	import { addCartProduct,isItemInCart } from '../../../store/cart-store';
	import { wishlistStore } from '../../../store/wishlist-store';
	import CountdownTimer from '../../common/countdown-timer.svelte';
	import { CartTwo, Wishlist, QuickView } from '../../svg';
	import type { IProduct } from '../../../types/product-type';
	import { handleModalProduct } from '../../../store/product-store';

	interface Props {
		item: IProduct;
		offer_style?: boolean;
	}

	let { item, offer_style }: Props = $props();

	const itemInWishlist = wishlistStore.isItemInWishlist(item);
	const itemInCart = isItemInCart(item);

	const productTitles: Record<string, string> = {
		'Headphones Wireless.': 'אוזניות אלחוטיות',
		'Gaming Headphone': 'אוזניות גיימינג',
		'Headphone with Mic': 'אוזניות עם מיקרופון',
		'Galaxy Android Tablet': 'טאבלט גלקסי אנדרואיד',
		'iPhone 14 Pro': 'אייפון 14 פרו',
		'Apple iPad Air': 'אייפד אייר של אפל'
	};

	const categoryNames: Record<string, string> = {
		Headphones: 'אוזניות',
		'Mobile Tablets': 'טאבלטים וסלולר'
	};

	const formatHebrewPrice = (price: number, showDecimals = true) =>
		new Intl.NumberFormat('he-IL', {
			style: 'currency',
			currency: 'ILS',
			minimumFractionDigits: showDecimals ? 2 : 0,
			maximumFractionDigits: showDecimals ? 2 : 0
		}).format(price);
</script>

<div class={`${offer_style ? 'tp-product-offer-item' : 'mb-25'} tp-product-item tp-product-item-rtl transition-3`} dir="rtl">
	<div class="tp-product-thumb p-relative fix m-img">
		<a href={`/product-details/${item.id}`}>
			<img src={item.img} alt="product-electronic" />
		</a>

		<!-- product badge -->
		{#if item.status === 'out-of-stock'}
			<div class="tp-product-badge">
				<span class="product-hot">אזל מהמלאי</span>
			</div>
		{/if}

		<!-- product action -->
		<div class="tp-product-action">
			<div class="tp-product-action-item d-flex flex-column">
				{#if !$itemInCart}
					<button
					  onclick="{() => addCartProduct(item)}"
						type="button"
						class={`tp-product-action-btn tp-product-add-cart-btn ${$itemInCart ? 'active' : ''}`}
					>
						<CartTwo />
						<span class="tp-product-tooltip">הוסף לעגלה</span>
					</button>
				{:else}
					<a
						href="/cart"
						class={`tp-product-action-btn tp-product-add-cart-btn ${$itemInCart ? 'active' : ''}`}
					>
						<CartTwo />
						<span class="tp-product-tooltip">הצג עגלה</span>
					</a>
				{/if}

				<button
					type="button"
					class="tp-product-action-btn tp-product-quick-view-btn"
					onclick={() => handleModalProduct(item)}
				>
					<QuickView />
					<span class="tp-product-tooltip">תצוגה מהירה</span>
				</button>

				<button
				  onclick="{() => wishlistStore.addWishlistProduct(item)}"
					type="button"
					class={`tp-product-action-btn tp-product-add-to-wishlist-btn ${$itemInWishlist ? 'active' : ''}`}
				>
					<Wishlist />
					<span class="tp-product-tooltip">
						{$itemInWishlist ? 'הסר מרשימת המשאלות' : 'הוסף לרשימת משאלות'}
					</span>
				</button>
			</div>
		</div>
	</div>

	<!-- product content -->
	<div class="tp-product-content" dir="rtl">
		<div class="tp-product-category">
			<a href={`/product-details/${item.id}`}>{categoryNames[item.category.name] ?? item.category.name}</a>
		</div>
		<h3 class="tp-product-title">
			<a href={`/product-details/${item.id}`}>{productTitles[item.title] ?? item.title}</a>
		</h3>
		<div class="tp-product-rating d-flex align-items-center">
			<div class="tp-product-rating-icon">
				<span><i class="fa-solid fa-star"></i></span>
				<span><i class="fa-solid fa-star"></i></span>
				<span><i class="fa-solid fa-star"></i></span>
				<span><i class="fa-solid fa-star"></i></span>
				<span><i class="fa-solid fa-star-half-stroke"></i></span>
			</div>
			<div class="tp-product-rating-text">
				<span>({item.reviews?.length} ביקורות)</span>
			</div>
		</div>
		<div class="tp-product-price-wrapper" dir="rtl">
			{#if item.discount > 0}
				<span class="tp-product-price new-price">
					{formatHebrewPrice(Number(item.price) - (Number(item.price) * Number(item.discount)) / 100)}
				</span>
				<span class="tp-product-price old-price">{formatHebrewPrice(item.price, false)}</span>
			{:else}
				<span class="tp-product-price new-price">{formatHebrewPrice(item.price)}</span>
			{/if}
		</div>

		{#if offer_style && item.offerDate}
			<div class="tp-product-countdown">
				<div class="tp-product-countdown-inner">
					<CountdownTimer endTime={new Date(item.offerDate.endDate)} />
				</div>
			</div>
		{/if}
	</div>
</div>
