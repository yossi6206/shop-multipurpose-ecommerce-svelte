<script lang="ts">
  import FooterContact from './footer-contact.svelte';
  import FooterSocialLinks from './footer-socials.svelte';
  import FooterBottomArea from './footer-bottom.svelte';
</script>
<!-- svelte-ignore a11y_invalid_attribute -->
<footer>
  <div class="tp-footer-area tp-footer-style-2 tp-footer-style-3 tp-footer-style-4" style="background-color: #F5F5F5;" data-bg-color="#F5F5F5">
    <div class="tp-footer-top pt-95 pb-40">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div class="tp-footer-widget footer-col-4-1 mb-50">
              <div class="tp-footer-logo">
                <a href="/">
                  <img src="/img/logo/logo.svg" alt="logo">
                </a>
              </div>
              <div class="tp-footer-widget-content">
                <div class="tp-footer-talk mb-20">
                  <span>Got Questions? Call us</span>
                  <h4><a href="tel:670-413-90-762">+670 413 90 762</a></h4>
                </div>
                <FooterContact />
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div class="tp-footer-widget footer-col-4-2 mb-50">
              <h4 class="tp-footer-widget-title">My Account</h4>
              <div class="tp-footer-widget-content">
                <ul>
                  <li><a href="#">Track Orders</a></li>
                  <li><a href="#">Shipping</a></li>
                  <li><a href="#">Wishlist</a></li>
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Order History</a></li>
                  <li><a href="#">Returns</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-2 col-md-4 col-sm-5">
            <div class="tp-footer-widget footer-col-4-3 mb-50">
              <h4 class="tp-footer-widget-title">Information</h4>
              <div class="tp-footer-widget-content">
                <ul>
                  <li><a href="#">Our Story</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Latest News</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 col-sm-7">
            <div class="tp-footer-widget footer-col-4-4 mb-50">
              <h4 class="tp-footer-widget-title">Subscribe.</h4>
              <div class="tp-footer-widget-content">
                <div class="tp-footer-subscribe">
                  <p>Our conversation is just getting started</p>
                  <div class="tp-footer-subscribe-form mb-30">
                    <form action="#">
                      <div class="tp-footer-subscribe-input">
                        <input type="email" placeholder="Enter Your Email">
                        <button type="submit">Subscribe</button>
                      </div>
                    </form>
                  </div>
                  <div class="tp-footer-social-4 tp-footer-social">
                    <h4 class="tp-footer-social-title-4">Follow Us On</h4>
                    <FooterSocialLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterBottomArea />
  </div>
</footer>
