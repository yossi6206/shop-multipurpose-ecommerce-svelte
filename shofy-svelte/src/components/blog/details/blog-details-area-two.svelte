<script lang="ts">
	import blogData from '../../../data/blog-data';
  import BlogDetailsNavigation from './blog-details-navigation.svelte';
  import BlogDetailsComments from './blog-details-comments.svelte';
  import BlogGridItem from '../blog-grid-item.svelte';
	import BlogReplyForm from '../../form/blog-reply-form.svelte';

  const relatedBlogs = blogData.filter(b => b.blog === 'blog-grid').slice(0, 3);
</script>
<!-- svelte-ignore a11y_invalid_attribute -->
<section class="tp-postbox-details-area pb-120 pt-95">
  <div class="container">
    <div class="row">
      <div class="col-xl-9">
        <div class="tp-postbox-details-top">
          <div class="tp-postbox-details-category">
            <span><a href="#">Beauty,</a></span>
            <span><a href="#">Trends</a></span>
          </div>
          <h3 class="tp-postbox-details-title">Here's the first Valentino's new Makeup Collection</h3>
          <div class="tp-postbox-details-meta mb-50">
            <span data-meta="author">By <a href="#">TraoStudio</a></span>
            <span>30 October, 2023</span>
            <span><a href="#">Comments (2)</a></span>
          </div>
        </div>
      </div>
      <div class="col-xl-12">
        <div class="tp-postbox-details-thumb">
          <img src="/img/blog/details/blog-big-1.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-2 col-lg-2 col-md-2">
        <div class="tp-postbox-details-share-2">
          <span>Share Now</span>
          <ul>
            <li><a href="#" aria-label="facebook"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#" aria-label="twitter"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="#" aria-label="linkedin"><i class="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="#" aria-label="vimeo"><i class="fa-brands fa-vimeo-v"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="col-xl-8 col-lg-8 col-md-10">
        <div class="tp-postbox-details-main-wrapper tp-postbox-style2">
          <div class="tp-postbox-details-content">
            <p class="tp-dropcap">Sales process is critically important to the success of your reps and your business...</p>
            <h4 class="tp-postbox-details-heading">Breaking Up With Fast Fashion Has Been Easier</h4>
            <p>Lorem ipsum dolor sit amet...</p>
            <div class="tp-postbox-details-desc-thumb text-center">
              <img src="/img/blog/details/blog-details-sm-1.jpg" alt="">
              <span class="tp-postbox-details-desc-thumb-caption">Gucci’s Women’s Cruise Collection 2023 Lookbook Has Arrived</span>
            </div>
            <div class="tp-postbox-details-quote">
              <blockquote>
                <p>There is a way out of every box, a solution to every puzzle; it's just a matter of finding it.</p>
                <cite>Shahnewaz Sakil</cite>
              </blockquote>
            </div>
            <h4 class="tp-postbox-details-heading">Exploring the English Countryside</h4>
            <p>Lorem ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes
              lorem,nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque euro, pretium quis, sem. Nulla
              onsequat massa quis enim.</p>

            <div class="tp-postbox-details-list">
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>At vero eos et accusamus et iusto odio.</li>
                <li>Excepteur sint occaecat cupidatat non proident.</li>
              </ul>
            </div>
            <p>Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
              cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae lorem.</p>
            <div class="tp-postbox-details-share-wrapper">
              <div class="tp-postbox-details-tags tagcloud">
                <span>Tags:</span>
                <a href="#">Lifestyle</a>
                <a href="#">Awesome</a>
                <a href="#">Winter</a>
                <a href="#">Sunglasses</a>
              </div>
            </div>
            <BlogDetailsNavigation />
            <div class="tp-postbox-details-author" style="background-color: #F4F7F9;">
              <div class="tp-postbox-details-author-thumb">
                <a href="#"><img src="/img/users/user-11.jpg" alt=""></a>
              </div>
              <div class="tp-postbox-details-author-content">
                <span>Written by</span>
                <h5 class="tp-postbox-details-author-title"><a href="#">Theodore Handle</a></h5>
                <p>By defining and following internal and external processes...</p>
                <div class="tp-postbox-details-author-social">
                  <a href="#" aria-label="facebook"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#" aria-label="twitter"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#" aria-label="linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
                  <a href="#" aria-label="vimeo"><i class="fa-brands fa-vimeo-v"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="tp-postbox-related-area pt-115 pb-90 mb-110" style="background-color: #F4F7F9;">
    <div class="container">
      <h3 class="tp-postbox-related-title">Related Articles</h3>
      <div class="row">
        {#each relatedBlogs as blog}
          <div class="col-lg-4 col-md-6">
            <BlogGridItem item={blog} style_2={true} />
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <BlogDetailsComments />
        <BlogReplyForm />
      </div>
    </div>
  </div>
</section>
