import { get } from "svelte/store";
import { products } from "./products-loader";
import type { IProduct } from "../types/product-type";

// place files you want to import through the `$lib` alias in this folder.
export function formatPrice(price: number,showDecimals=true) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0
  }).format(price);
}
export function formatString(str: string): string {
  return str
      .toLowerCase()
      .replace(/&/g, "") // Remove all occurrences of "&"
      .replace(/\s+/g, "-") // Replace one or more spaces with a single "-"
      .replace(/-+/g, "-") // Replace multiple "-" with a single "-"
      .trim(); // Remove any leading or trailing spaces
}

export function calculateDiscountPrice(price: number, discount: number): number {
  if (discount <= 0) return price; // No discount applied
  if (discount >= 100) return 0; // 100% discount means free

  const discountAmount = (price * discount) / 100;
  return (price - discountAmount)
}

export function getMaxPrice () {
  const list = get(products);
  if (!list.length) return 0;
  return Math.max(...list.map((item: IProduct) => item.price));
}

