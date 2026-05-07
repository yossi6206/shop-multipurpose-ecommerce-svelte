import { writable, derived } from 'svelte/store';
import type { IProduct } from '../types/product-type';
import { get } from 'svelte/store';
import { errorToast, infoToast, successToast } from '$lib/toast';
import { calculateDiscountPrice } from '$lib';

let initialCartState: IProduct[] = [];
if (typeof window !== 'undefined') {
  const storedCart = localStorage.getItem('cart_products');
  initialCartState = storedCart ? JSON.parse(storedCart) : [];
}


// Initialize the cart products store
const cart_products = writable<IProduct[]>(initialCartState);
const orderQuantity = writable<number>(1);
const cartOffcanvas = writable<boolean>(false);

// Function to add a product to the cart
export const addCartProduct = (payload: IProduct) => {
    cart_products.update((products) => {
        const isExist = products.some((i) => i.id === payload.id);
        if (payload.status === 'out-of-stock') {
            errorToast(`Out of stock ${payload.title}`);
        } else if (!isExist) {
            const newItem = {
                ...payload,
                orderQuantity: 1,
            };
            products.push(newItem);
            successToast(`${payload.title} added to cart`);
        } else {
            products = products.map((item) => {
                if (item.id === payload.id) {
                  if (typeof item.orderQuantity !== 'undefined') {
                    const currentOrderQuantity = get(orderQuantity); // Get the current value of `orderQuantity`
                    if (item.quantity >= item.orderQuantity + currentOrderQuantity) {
                        item.orderQuantity =
                            currentOrderQuantity !== 1
                                ? currentOrderQuantity + item.orderQuantity
                                : item.orderQuantity + 1;
                        successToast(`${currentOrderQuantity} ${item.title} added to cart`);
                    } else {
                        errorToast(`No more quantity available for this product!`);
                        orderQuantity.set(1);
                    }
                }
                }
                return { ...item };
            });
        }
        localStorage.setItem('cart_products', JSON.stringify(products));
        return products;
    });
};

// Derived store to check if an item is in the cart
export const isItemInCart = (item: IProduct) => {
    return derived(cart_products, ($cart_products) => {
        return $cart_products.some((cartItem) => cartItem.id === item.id);
    });
};


// Function to increment the order quantity
export const increment = () => {
    orderQuantity.update((n) => n + 1);
};

// Function to decrement the order quantity
export const decrement = () => {
    orderQuantity.update((n) => (n > 1 ? n - 1 : 1));
};

// Function to decrement the quantity of a specific product in the cart
export const quantityDecrement = (payload: IProduct) => {
    cart_products.update((products) => {
        products = products.map((item) => {
            if (item.id === payload.id) {
                if (typeof item.orderQuantity !== 'undefined') {
                    if (item.orderQuantity > 1) {
                        item.orderQuantity = item.orderQuantity - 1;
                        infoToast(`Decrement Quantity For ${item.title}`);
                    }
                }
            }
            return { ...item };
        });
        localStorage.setItem('cart_products', JSON.stringify(products));
        return products;
    });
};

// Function to remove a product from the cart
export const removeCartProduct = (payload: IProduct) => {
    cart_products.update((products) => {
        products = products.filter((p) => p.id !== payload.id);
        errorToast(`${payload.title} remove to cart`);
        localStorage.setItem('cart_products', JSON.stringify(products));
        return products;
    });
};

// Function to initialize cart products from localStorage
export const initializeCartProducts = () => {
    const cartData = localStorage.getItem('cart_products');
    if (cartData) {
        cart_products.set(JSON.parse(cartData));
    }
};

// Function to clear the cart
export const clear_cart = () => {
    const confirmMsg = window.confirm('Are you sure deleted your all cart items ?');
    if (confirmMsg) {
        cart_products.set([]);
    }
    localStorage.setItem('cart_products', JSON.stringify([]));
};

// Function to reset the order quantity to 1
export const initialOrderQuantity = () => {
    orderQuantity.set(1);
};

// Derived store to calculate total price and quantity
export const totalPriceQuantity = derived(cart_products, ($cart_products) => {
    return $cart_products.reduce(
        (cartTotal, cartItem) => {
            const { price, orderQuantity, discount } = cartItem;
            if (typeof orderQuantity !== 'undefined') {
                // Apply discount if available
                const discountedPrice = discount ? calculateDiscountPrice(price, discount) : price;
                const itemTotal = discountedPrice * orderQuantity;
                
                cartTotal.quantity += orderQuantity;
                cartTotal.total += itemTotal;
            }
            return cartTotal;
        },
        {
            total: 0,
            quantity: 0,
        }
    );
});

// Function to toggle the cart offcanvas
export const handleCartOffcanvas = () => {
    cartOffcanvas.update((n) => !n);
};


// Export the stores and functions
export { cart_products, orderQuantity, cartOffcanvas };