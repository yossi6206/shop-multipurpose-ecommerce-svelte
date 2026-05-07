<script lang="ts">
	import type { IBlogType } from "../../types/blog-type";
	import { Comments, Date, RightArrow } from "../svg";

  interface Props {
    item: IBlogType;
    style_2?: boolean;
  }
  const {item, style_2}: Props = $props();
</script>

<div class={`tp-blog-grid-item ${style_2 ? 'tp-blog-grid-style2' : ''} p-relative mb-30`}>
  <div class="tp-blog-grid-thumb w-img fix mb-30">
    <a href={`/blog-details/${item.id}`}>
      <img src={item.img} alt="blog-img" />
    </a>
  </div>
  <div class="tp-blog-grid-content">
    <div class="tp-blog-grid-meta">
      <span>
        <span>
          <Date />
        </span>
        {item.date}
      </span>
      <span>
        <span>
          <Comments />
        </span>
        Comments ({item.comments})
      </span>
    </div>
    <h3 class="tp-blog-grid-title">
      <a href={`/blog-details/${item.id}`}>{item.title}</a>
    </h3>
    <p>
      Cursus mattis sociis natoque penatibus et magnis montes,nascetur ridiculus.
    </p>

    <div class="tp-blog-grid-btn">
      <a href={`/blog-details/${item.id}`} class="tp-link-btn-3">
        Read More
        <span>
          <RightArrow/>
        </span>
      </a>
    </div>
  </div>
</div>
