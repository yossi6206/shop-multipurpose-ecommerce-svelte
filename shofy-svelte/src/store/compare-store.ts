import { derived, writable } from 'svelte/store';
import type { IProduct } from '../types/product-type';
import { errorToast, successToast } from '$lib/toast';

// Initialize compare_products from localStorage
let initialCompareItems: IProduct[] = [];
if (typeof window !== 'undefined') {
  const storedCompare = localStorage.getItem('compare_products');
  initialCompareItems = storedCompare ? JSON.parse(storedCompare) : [];
}

export const compare_items = writable<IProduct[]>(initialCompareItems);

export function add_compare_product(product: IProduct) {
  compare_items.update((items) => {
    const isAdded = items.findIndex((p) => p.id === product.id);
    if (isAdded !== -1) {
      const updatedItems = items.filter((p) => p.id !== product.id);
      errorToast(`${product.title} removed from compare`);
      localStorage.setItem('compare_products', JSON.stringify(updatedItems));
      return updatedItems;
    } else {
      const updatedItems = [...items, product];
      successToast(`${product.title} added to compare`);
      localStorage.setItem('compare_products', JSON.stringify(updatedItems));
      return updatedItems;
    }
  });
}

// Derived store to check if an item is in the compare
export const isItemInCompare = (item: IProduct) => {
    return derived(compare_items, ($compare) => {
        return $compare.some((cItem) => cItem.id === item.id);
    });
};

export function removeCompare(product: IProduct) {
  compare_items.update((items) => {
    const updatedItems = items.filter((p) => p.id !== product.id);
    errorToast(`${product.title} removed from compare`);
    localStorage.setItem('compare_products', JSON.stringify(updatedItems));
    return updatedItems;
  });
}  
