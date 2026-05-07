import { writable, derived, get } from "svelte/store";
import { products } from "$lib/products-loader";
import { page } from "$app/state";
import { goto } from "$app/navigation";
import { formatString } from "$lib";
import type { IProduct } from "../types/product-type";

// Store for selected filter values
export const selectVal = writable<string>("");

// Max product price (reactive: updates whenever the products store changes)
export const maxProductPrice = derived(products, ($products) =>
  $products.reduce((max, product) => (product.price > max ? product.price : max), 0)
);

// Price filter values (lazy-init to current max)
export const priceValues = writable<number[]>([0, get(maxProductPrice)]);

// Keep priceValues upper bound in sync with the latest max price the FIRST time
// products are hydrated from Supabase (so the slider reflects the real range).
let _priceInitialized = false;
maxProductPrice.subscribe((max) => {
  if (!_priceInitialized && max > 0) {
    priceValues.set([0, max]);
    _priceInitialized = true;
  }
});

// Update price range
export function handlePriceChange(value: number[]) {
  priceValues.set(value);
}

export function handleSelectFilter (value: string) {
  selectVal.set(value);
}

// Reset filters
export function handleResetFilter() {
  selectVal.set('');
  priceValues.set([0, get(maxProductPrice)]);
  query.set(new URLSearchParams());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  filteredProducts.subscribe((filteredProducts) => {
    // console.log(filteredProducts);
  });
}

export function handleSearchResetFilter() {
  selectVal.set('');
  priceValues.set([0, get(maxProductPrice)]);
  query.set(new URLSearchParams());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchFilteredItems.subscribe((searchProducts) => {
    // console.log(filteredProducts);
  });
}

// Function to update URL query parameters while preserving existing ones
export function updateQueryParams(newParams: Record<string, string>) {
  const currentUrl = new URL(window.location.href);
  const params = new URLSearchParams(currentUrl.search);

  // Merge new parameters
  Object.entries(newParams).forEach(([key, value]) => {
    params.set(key, value);
  });

  // Update the URL
  goto(`?${params.toString()}`);
}

// Writable stores for query parameters
export const query = writable(new URLSearchParams()); // Initial empty URLSearchParams

if (typeof window !== 'undefined') {
  query.set(new URLSearchParams(window.location.search));
}

// Filtered products (computed from the live products store + filters)
export const filteredProducts = derived(
  [products, query, selectVal],
  ([$products, $query, $selectVal]) => {
    let filtered_products: IProduct[] = [...$products];

    // Price filter
    if ($query.has('minPrice') && $query.has('maxPrice')) {
      const minPrice = Number($query.get('minPrice'));
      const maxPrice = Number($query.get('maxPrice'));
      filtered_products = filtered_products.filter(
        (p: IProduct) => p.price >= minPrice && p.price <= maxPrice
      );
    }

    // Status filter
    if ($query.has('status')) {
      const status = $query.get('status');
      if (status === 'on-sale') {
        filtered_products = filtered_products.filter((p: IProduct) => p.discount > 0);
      } else if (status === 'in-stock') {
        filtered_products = filtered_products.filter((p: IProduct) => p.status === 'in-stock');
      }
    }

    // Category filter
    if ($query.has('category')) {
      const category = $query.get('category');
      filtered_products = filtered_products.filter(
        (p: IProduct) => formatString(p.parent) === category
      );
    }

    // Sub-category filter
    if ($query.has('subCategory')) {
      const subCategory = $query.get('subCategory');
      filtered_products = filtered_products.filter(
        (p: IProduct) => formatString(p.children) === subCategory
      );
    }

    // Brand filter
    if ($query.has('brand')) {
      const brand = $query.get('brand');
      filtered_products = filtered_products.filter(
        (p: IProduct) => formatString(p.brand.name) === brand
      );
    }

    // Select filter
    if ($selectVal) {
       if ($selectVal === 'low') {
        filtered_products = filtered_products
        .slice()
        .sort((a: IProduct, b: IProduct) => a.price - b.price);
      } else if ($selectVal === 'high') {
        filtered_products = filtered_products
        .slice()
        .sort((a: IProduct, b: IProduct) => b.price - a.price);
      } else if ($selectVal === 'new') {
        filtered_products = filtered_products.slice(-8);
      } else if ($selectVal === 'sale') {
        filtered_products = filtered_products.filter((p: IProduct) => p.discount > 0);
      }
    }

    return filtered_products;
  }
);

// Search-filtered items (computed from the live products store)
export const searchFilteredItems = derived(
  [products, selectVal],
  ([$products, $selectVal]) => {
    let filtered = [...$products];

    const queryParams = page.url.searchParams;
    const searchText = queryParams.get("searchText")?.toLowerCase() || "";
    const productType = queryParams.get("productType")?.toLowerCase() || "";

    if (searchText && !productType) {
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(searchText));
    } else if (!searchText && productType) {
      filtered = filtered.filter((p) => p.productType.toLowerCase() === productType);
    } else if (searchText && productType) {
      filtered = filtered
        .filter((p) => p.productType.toLowerCase() === productType)
        .filter((p) => p.title.toLowerCase().includes(searchText));
    }

    // Sorting
    switch ($selectVal) {
      case "low":
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case "high":
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case "new":
        filtered = filtered.slice(-6);
        break;
      case "sale":
        filtered = filtered.filter((p) => p.discount > 0);
        break;
    }

    return filtered;
  }
);
