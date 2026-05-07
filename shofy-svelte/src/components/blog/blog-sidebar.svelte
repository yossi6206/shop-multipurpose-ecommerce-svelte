<script lang="ts">
	import blogData from "../../data/blog-data";
	import { Search } from "../svg";

  const recentPosts = blogData.slice(0, 3);

</script>
<!-- svelte-ignore a11y_invalid_attribute -->
 
<div class="tp-sidebar-wrapper tp-sidebar-ml--24">
  <!-- Search Bar -->
  <div class="tp-sidebar-widget mb-35">
    <div class="tp-sidebar-search">
      <form action="#">
        <div class="tp-sidebar-search-input">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <Search />
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- About Me -->
  <div class="tp-sidebar-widget mb-35">
    <h3 class="tp-sidebar-widget-title">About me</h3>
    <div class="tp-sidebar-widget-content">
      <div class="tp-sidebar-about">
        <div class="tp-sidebar-about-thumb mb-25">
          <a href="#">
            <img src="/img/users/user-11.jpg" alt="User" />
          </a>
        </div>
        <div class="tp-sidebar-about-content">
          <h3 class="tp-sidebar-about-title">
            <a href="#">Ravi O'Leigh</a>
          </h3>
          <span class="tp-sidebar-about-designation">Photographer & Blogger</span>
          <p>Lorem ligula eget dolor. Aenean massa. Cum sociis que penatibus magnis dis parturient</p>
          <div class="tp-sidebar-about-signature">
            <img src="/img/blog/signature/signature.png" alt="signature" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Latest Posts -->
  <div class="tp-sidebar-widget mb-35">
    <h3 class="tp-sidebar-widget-title">Latest Posts</h3>
    <div class="tp-sidebar-widget-content">
      <div class="tp-sidebar-blog-item-wrapper">
        {#each recentPosts as item (item.id)}
          <div class="tp-sidebar-blog-item d-flex align-items-center">
            <div class="tp-sidebar-blog-thumb">
              <a href={`/blog-details/${item.id}`}>
                <img src={item.img} alt="blog-img" />
              </a>
            </div>
            <div class="tp-sidebar-blog-content">
              <div class="tp-sidebar-blog-meta">
                <span>{item.date}</span>
              </div>
              <h3 class="tp-sidebar-blog-title">
                <a href={`/blog-details/${item.id}`}>{item.title}</a>
              </h3>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Categories -->
  <div class="tp-sidebar-widget widget_categories mb-35">
    <h3 class="tp-sidebar-widget-title">Categories</h3>
    <div class="tp-sidebar-widget-content">
      <ul>
        <li><a href="/blog">Farming <span>(12)</span></a></li>
        <li><a href="/blog">Crisp Bread & Cake <span>(6)</span></a></li>
        <li><a href="/blog">Milk & Meat <span>(2)</span></a></li>
        <li><a href="/blog">Organic Fruits <span>(8)</span></a></li>
        <li><a href="/blog">Sea Foods <span>(0)</span></a></li>
        <li><a href="/blog">Vegetable <span>(3)</span></a></li>
      </ul>
    </div>
  </div>

  <!-- Popular Tags -->
  <div class="tp-sidebar-widget mb-35">
    <h3 class="tp-sidebar-widget-title">Popular Tags</h3>
    <div class="tp-sidebar-widget-content tagcloud">
      <a href="#">Summer</a>
      <a href="#">Vintage</a>
      <a href="#">Sunglasses</a>
      <a href="#">Organic Food</a>
      <a href="#">Lifesttyle</a>
      <a href="#">Nature</a>
    </div>
  </div>
</div>
