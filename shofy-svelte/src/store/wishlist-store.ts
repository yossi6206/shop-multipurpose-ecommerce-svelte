import { derived, writable } from 'svelte/store';
import type { IProduct } from '../types/product-type';
import { errorToast, successToast } from '$lib/toast';

// Initialize wishlist from localStorage
let initialWishlist: IProduct[] = [];
if (typeof window !== 'undefined') {
  const storedWishlist = localStorage.getItem('wishlist_products');
  initialWishlist = storedWishlist ? JSON.parse(storedWishlist) : [];
}

// Create writable store
const wishlists = writable<IProduct[]>(initialWishlist);

// Add or remove product from wishlist
function addWishlistProduct(product: IProduct) {
  wishlists.update((currentList) => {
    const index = currentList.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      errorToast(`${product.title} removed from wishlist`);
      const updatedList = currentList.filter((p) => p.id !== product.id);
      localStorage.setItem('wishlist_products', JSON.stringify(updatedList));
      return updatedList;
    } else {
      successToast(`${product.title} added to wishlist`);
      const updatedList = [...currentList, product];
      localStorage.setItem('wishlist_products', JSON.stringify(updatedList));
      return updatedList;
    }
  });
}

// Derived store to check if an item is in the wishlist
const isItemInWishlist = (item: IProduct) => {
    return derived(wishlists, ($wishlists) => {
        return $wishlists.some((wItem) => wItem.id === item.id);
    });
};

// Remove product from wishlist
function removeWishlistProduct(product: IProduct) {
  wishlists.update((currentList) => {
    const updatedList = currentList.filter((p) => p.id !== product.id);
    errorToast(`${product.title} removed from wishlist`);
    localStorage.setItem('wishlist_products', JSON.stringify(updatedList));
    return updatedList;
  });
}

export const wishlistStore = {
  wishlists,
  subscribe: wishlists.subscribe,
  addWishlistProduct,
  removeWishlistProduct,
  isItemInWishlist,
};
