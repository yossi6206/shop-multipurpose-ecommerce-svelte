<script lang="ts">
  import { compare_items, removeCompare } from '../../store/compare-store';
  import { formatPrice } from '$lib'; 
	import { addCartProduct } from '../../store/cart-store';
</script>

<section class="tp-compare-area pb-120">
  <div class="container">
    {#if $compare_items.length === 0}
      <div class="text-center pt-50">
        <h3>No Compare Items Found</h3>
        <a href="/shop" class="tp-cart-checkout-btn mt-20">Continue Shopping</a>
      </div>
    {:else}
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-compare-table table-responsive text-center">
            <table class="table">
              <tbody>
                <tr>
                  <th>Product</th>
                  {#each $compare_items as item (item.id)}
                    <td>
                      <div class="tp-compare-thumb">
                        <img src={item.img} alt="product" />
                        <h4 class="tp-compare-product-title">
                          <a href={`/product-details/${item.id}`}>{item.title}</a>
                        </h4>
                      </div>
                    </td>
                  {/each}
                </tr>

                <tr>
                  <th>Description</th>
                  {#each $compare_items as item (item.id)}
                    <td>
                      <div class="tp-compare-desc">
                        <p>{item.description.substring(0, 150)}</p>
                      </div>
                    </td>
                  {/each}
                </tr>

                <tr>
                  <th>Price</th>
                  {#each $compare_items as item (item.id)}
                    <td>
                      <div class="tp-compare-price">
                        {#if item.discount > 0}
                          <span>{formatPrice(item.price, false)}</span>
                          <span class="old-price">
                            {formatPrice(Number(item.price) - (Number(item.price) * Number(item.discount)) / 100)}
                          </span>
                        {:else}
                          <span>{formatPrice(item.price)}</span>
                        {/if}
                      </div>
                    </td>
                  {/each}
                </tr>

                <tr>
                  <th>Add to cart</th>
                  {#each $compare_items as item (item.id)}
                    <td>
                      <div class="tp-compare-add-to-cart">
                        <button type="button" class="tp-btn" onclick={() => addCartProduct
                        (item)}>
                          Add to Cart
                        </button>
                      </div>
                    </td>
                  {/each}
                </tr>

                <tr>
                  <th>Rating</th>
                  {#each $compare_items as item (item.id)}
                    <td>
                      <div class="tp-compare-rating">
                        {#each Array(5) as _, i}
                          <span><i class="fas fa-star"></i></span>
                        {/each}
                      </div>
                    </td>
                  {/each}
                </tr>

                <tr>
                  <th>Remove</th>
                  {#each $compare_items as item (item.id)}
                    <td>
                      <div class="tp-compare-remove">
                        <button onclick={() => removeCompare(item)} aria-label="remove">
                          <i class="fal fa-trash-alt"></i>
                        </button>
                      </div>
                    </td>
                  {/each}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>
