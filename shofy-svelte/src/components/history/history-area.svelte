<script lang="ts">
  import { onMount } from 'svelte';
  import { register } from 'swiper/element/bundle';

  // Register Swiper custom elements
  onMount(() => {
    register();
  });

  // Slider data
  const slider_data = [
    {
      title: "אודות <br> החנות המקוונת שלנו",
      subtitle_1:
        "באתר המסחר האלקטרוני שלנו, אנו נלהבים לספק ללקוחותינו את חווית הקנייה הטובה ביותר. ממגוון המוצרים הרחב שלנו ועד לשירות הלקוחות המעולה — אנו מחויבים לעלות על הציפיות שלכם.",
      subtitle_2:
        "אז התחילו לגלוש היום ומצאו את המוצרים המושלמים שמתאימים לצרכים שלכם!",
      img: "/img/history/history-1.jpg",
      thumb_text: "ברוכים הבאים <br> לחנות Shofy",
      year: 2016,
    },
    {
      title: "אודות <br> החנות המקוונת שלנו",
      subtitle_1:
        "באתר המסחר האלקטרוני שלנו, אנו נלהבים לספק ללקוחותינו את חווית הקנייה הטובה ביותר. ממגוון המוצרים הרחב שלנו ועד לשירות הלקוחות המעולה — אנו מחויבים לעלות על הציפיות שלכם.",
      subtitle_2:
        "אז התחילו לגלוש היום ומצאו את המוצרים המושלמים שמתאימים לצרכים שלכם!",
      img: "/img/history/history-2.jpg",
      thumb_text: "ברוכים הבאים <br> לחנות Shofy",
      year: 2017,
    },
    {
      title: "אודות <br> החנות המקוונת שלנו",
      subtitle_1:
        "באתר המסחר האלקטרוני שלנו, אנו נלהבים לספק ללקוחותינו את חווית הקנייה הטובה ביותר. ממגוון המוצרים הרחב שלנו ועד לשירות הלקוחות המעולה — אנו מחויבים לעלות על הציפיות שלכם.",
      subtitle_2:
        "אז התחילו לגלוש היום ומצאו את המוצרים המושלמים שמתאימים לצרכים שלכם!",
      img: "/img/history/history-1.jpg",
      thumb_text: "ברוכים הבאים <br> לחנות Shofy",
      year: 2018,
    },
    {
      title: "אודות <br> החנות המקוונת שלנו",
      subtitle_1:
        "באתר המסחר האלקטרוני שלנו, אנו נלהבים לספק ללקוחותינו את חווית הקנייה הטובה ביותר. ממגוון המוצרים הרחב שלנו ועד לשירות הלקוחות המעולה — אנו מחויבים לעלות על הציפיות שלכם.",
      subtitle_2:
        "אז התחילו לגלוש היום ומצאו את המוצרים המושלמים שמתאימים לצרכים שלכם!",
      img: "/img/history/history-2.jpg",
      thumb_text: "ברוכים הבאים <br> לחנות Shofy",
      year: 2019,
    },
  ];

  // Slider nav data
  const slider_nav_data = [2016, 2017, 2018, 2019];
</script>

<section class="tp-history-area pt-140 pb-140" style="background-color: #f8f8f8">
  <div class="container">
    <div class="row">
      <div class="col-xl-12">
        <div class="tp-history-slider mb-50">
          <swiper-container
            slides-per-view="1"
            space-between="0"
            effect="fade"
            class="tp-history-slider-active swiper-container"
            thumbs-swiper=".tp-history-nav-active"
          >
            {#each slider_data as item, i}
              <swiper-slide key={i} class="tp-thistory-item" style="background-color: #f8f8f8">
                <div class="row">
                  <div class="col-xl-5 col-lg-6 col-md-6">
                    <div class="tp-history-wrapper pr-45">
                      <div class="tp-history-content mb-40">
                        <h3 class="tp-history-title">{@html item.title}</h3>
                        <p>{item.subtitle_1}</p>
                        <p>{item.subtitle_2}</p>
                      </div>
                      <div class="tp-history-year">
                        <p>{item.year}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-7 col-lg-6 col-md-6">
                    <div class="tp-history-thumb-wrapper ml-150 p-relative">
                      <div class="tp-history-thumb-text">
                        <p>{@html item.thumb_text}</p>
                      </div>
                      <div class="tp-history-thumb m-img">
                        <img src={item.img} alt="thumb_img" />
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            {/each}
          </swiper-container>
        </div>
      </div>
    </div>

    <div class="tp-history-nav">
      <div class="row">
        <div class="col-xl-12">
          <swiper-container
            class="tp-history-nav-active swiper-container"
            space-between="220"
            slides-per-view="4"
            free-mode="true"
            watch-slides-progress="true"
          >
            {#each slider_nav_data as num, i}
              <swiper-slide key={i} class="tp-history-nav-year text-center">
                <p>{num}</p>
              </swiper-slide>
            {/each}
          </swiper-container>
        </div>
      </div>
    </div>
  </div>
</section>
