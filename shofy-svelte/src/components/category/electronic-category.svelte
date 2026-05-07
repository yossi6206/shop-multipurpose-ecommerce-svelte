<script lang="ts">
  import category_data from '../../data/category-data';
  import { formatString } from '$lib';
	import { goto } from '$app/navigation';
	import { query } from '../../store/product-filter-store';

  // Filter the category data
  const category_items = category_data.filter((c) => c.productType === 'electronics');

  // Hebrew translations for category names
  const categoryTranslations: Record<string, string> = {
    'Headphones': 'אוזניות',
    'Mobile Tablets': 'טאבלטים ניידים',
    'CPU Heat Pipes': 'צינורות קירור מעבד',
    'Smart Watch': 'שעון חכם',
    'Bluetooth': 'בלוטות\'',
  };

  // Handle parent category click
  const handleParentCategory = (value: string) => {
    query.update((currentQuery) => {
      const newQuery = new URLSearchParams(currentQuery);
      newQuery.set('category', formatString(value));
      goto(`/shop?${newQuery.toString()}`); // Move goto inside update to trigger once
      return newQuery; // Return the new query object
    });
  };

</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y_missing_attribute -->
<!-- svelte-ignore a11y_invalid_attribute -->
<section class="tp-product-category pt-60 pb-15">
  <div class="container">
    <div class="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4">
      {#each category_items as item, i}
        <div class="col">
          <div class="tp-product-category-item text-center mb-40">
            <div class="tp-product-category-thumb fix">
              <a class="pointer" onclick={() => handleParentCategory(item.parent)}>
                <img src={item.img} alt="product-category" />
              </a>
            </div>
            <div class="tp-product-category-content">
              <h3 class="tp-product-category-title">
                <a class="pointer" onclick={() => handleParentCategory(item.parent)}>
                  {categoryTranslations[item.parent] || item.parent}
                </a>
              </h3>
              <p>{item.products.length} מוצרים</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>