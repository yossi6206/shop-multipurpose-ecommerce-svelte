<script lang="ts">
  import { formatPrice } from '$lib';
  import { Delivery, Refund, Support, Discount } from '../svg';

</script>

<section class="tp-feature-area tp-feature-border-radius pb-70">
  <div class="container">
    <div class="row gx-1 gy-1 gy-xl-0">
      
      <!-- Feature Item 1 -->
      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
        <div class="tp-feature-item d-flex align-items-start">
          <div class="tp-feature-icon ml-15">
            <span><Delivery /></span>
          </div>
          <div class="tp-feature-content">
            <h3 class="tp-feature-title">משלוח חינם</h3>
            <p>הזמנות מכל המוצרים</p>
          </div>
        </div>
      </div>

      <!-- Feature Item 2 -->
      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
        <div class="tp-feature-item d-flex align-items-start">
          <div class="tp-feature-icon ml-15">
            <span><Refund /></span>
          </div>
          <div class="tp-feature-content">
            <h3 class="tp-feature-title">החזרה והחזר כספי</h3>
            <p>אחריות להחזר כספי</p>
          </div>
        </div>
      </div>

      <!-- Feature Item 3 -->
      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
        <div class="tp-feature-item d-flex align-items-start">
          <div class="tp-feature-icon ml-15">
            <span><Discount /></span>
          </div>
          <div class="tp-feature-content">
            <h3 class="tp-feature-title">הנחת חבר</h3>
            <p>בכל הזמנה מעל {formatPrice(140)}</p>
          </div>
        </div>
      </div>

      <!-- Feature Item 4 -->
      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
        <div class="tp-feature-item d-flex align-items-start">
          <div class="tp-feature-icon ml-15">
            <span><Support /></span>
          </div>
          <div class="tp-feature-content">
            <h3 class="tp-feature-title">תמיכה 24/7</h3>
            <p>צור קשר 24 שעות ביממה</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
