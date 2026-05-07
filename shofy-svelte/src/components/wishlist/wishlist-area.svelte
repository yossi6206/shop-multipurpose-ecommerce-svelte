<script lang="ts">
  import { wishlistStore } from "../../store/wishlist-store"; 
  import WishlistItem from "./wishlist-item.svelte";
  const {wishlists} = wishlistStore;
</script>

<section class="tp-cart-area pb-120">
  <div class="container">
    {#if $wishlists.length === 0}
      <div class="text-center pt-50">
        <h3>No Wishlist Items Found</h3>
        <a href="/shop" class="tp-cart-checkout-btn mt-20">Continue Shopping</a>
      </div>
    {:else}
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-cart-list mb-45 mr-30">
            <table>
              <thead>
                <tr>
                  <th colspan="2" class="tp-cart-header-product">Product</th>
                  <th class="tp-cart-header-price">Price</th>
                  <th>Add Cart</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {#each $wishlists as item (item.id)}
                  <WishlistItem {item} />
                {/each}
              </tbody>
            </table>
          </div>

          <div class="tp-cart-bottom">
            <div class="row align-items-end">
              <div class="col-xl-6 col-md-4">
                <div class="tp-cart-update">
                  <a href="/cart" class="tp-cart-update-btn">Go To Cart</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    {/if}
  </div>
</section>
