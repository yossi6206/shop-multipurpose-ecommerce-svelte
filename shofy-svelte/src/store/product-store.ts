import { writable } from "svelte/store";
import product_data from "../data/product-data";
// import { onDestroy } from "svelte";
import type { IProduct } from "../types/product-type";

// Initialize store with default values
const productStore = writable({
  activeImg: product_data[0].img,
  openFilterDropdown: false,
  openFilterOffcanvas: false,
  modalProduct: null as IProduct | null,
  showModal: false,
});

export function handleToggleModal() {
  productStore.update((store) => {
    return { ...store, showModal: !store.showModal, modalProduct: null };
  });
}

// Functions to update the store
const handleImageActive = (img: string) => {
  productStore.update((store) => {
    return { ...store, activeImg: img };
  });
};

const handleOpenFilterDropdown = () => {
  productStore.update((store) => {
    return { ...store, openFilterDropdown: !store.openFilterDropdown };
  });
};

const handleOpenFilterOffcanvas = () => {
  productStore.update((store) => {
    return { ...store, openFilterOffcanvas: !store.openFilterOffcanvas };
  });
};

export function handleModalProduct(product: IProduct) {
  productStore.update((store) => {
    return { ...store, modalProduct: product, showModal: true,activeImg: product.img };
  });
}

// onDestroy(() => {
//   productStore.subscribe((store) => {
//     console.log("Store updated", store);
//   });
// });

// Export store and methods
export default {
  subscribe: productStore.subscribe,
  handleImageActive,
  handleOpenFilterDropdown,
  handleOpenFilterOffcanvas,
};
