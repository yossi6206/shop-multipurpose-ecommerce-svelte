<script lang="ts">
  type IInstagram = {
    id: number;
    link: string;
    img: string;
    banner?: boolean;
  };

  const instagram_data: IInstagram[] = [
    { id: 1, link: "https://www.instagram.com/", img: "/img/instagram/2/insta-1.jpg" },
    { id: 2, link: "https://www.instagram.com/", img: "/img/instagram/2/insta-2.jpg" },
    { id: 3, link: "https://www.instagram.com/", banner: true, img: "/img/instagram/2/insta-icon.png" },
    { id: 4, link: "https://www.instagram.com/", img: "/img/instagram/2/insta-3.jpg" },
    { id: 5, link: "https://www.instagram.com/", img: "/img/instagram/2/insta-4.jpg" }
  ];
</script>
<!-- svelte-ignore a11y_consider_explicit_label -->
 <!-- svelte-ignore a11y_invalid_attribute -->
<section class="tp-instagram-area">
  <div class="container-fluid pl-20 pr-20">
    <div class="row row-cols-lg-5 row-cols-sm-2 row-cols-1 gx-2 gy-2 gy-lg-0">
      {#each instagram_data as item (item.id)}
        <div class="col">
          {#if !item.banner}
            <div class="tp-instagram-item-2 w-img">
              <img src={item.img} alt="insta-img" />
              <div class="tp-instagram-icon-2">
                <a href={item.link} class="popup-image" target="_blank">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          {:else}
            <div class="tp-instagram-banner text-center">
              <div class="tp-instagram-banner-icon mb-40">
                <a href="#">
                  <img src={item.img} alt="insta-img" />
                </a>
              </div>
              <div class="tp-instagram-banner-content">
                <span>Follow Us on</span>
                <a href="#">Instagram</a>
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
