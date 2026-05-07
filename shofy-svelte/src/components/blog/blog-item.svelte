<script lang="ts">
	import type { IBlogType } from "../../types/blog-type";
	import { TagIcon } from "../svg";

  const {item}:{item: IBlogType} = $props();
</script>

<div class="tp-blog-item-2 mb-40">
  <div class="tp-blog-thumb-2 p-relative fix">
    <a href={`/blog-details/${item.id}`}>
      <img src={item.img} alt="blog-img" />
    </a>
    <div class="tp-blog-meta-date-2">
      <span>{item.date}</span>
    </div>
  </div>
  <div class="tp-blog-content-2 has-thumbnail">
    <div class="tp-blog-meta-2">
      <span>
        <TagIcon />
      </span>
      {#each item.tags as t, i}
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a href="#">
          {t}{i < item.tags.length - 1 ? "," : ""}
        </a>
      {/each}
    </div>
    <h3 class="tp-blog-title-2">
      <a href={`/blog-details/${item.id}`}>{item.title}</a>
    </h3>
  </div>
</div>
