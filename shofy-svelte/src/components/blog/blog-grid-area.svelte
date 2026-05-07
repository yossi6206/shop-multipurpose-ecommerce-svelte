<script lang="ts">
	import BlogSidebar from './blog-sidebar.svelte';
	import Pagination from '../ui/pagination.svelte';
	import blogData from '../../data/blog-data';
	import type { IBlogType } from '../../types/blog-type';
	import BlogGridItem from './blog-grid-item.svelte';
	import BlogListItem from './blog-list-item.svelte';
	import { Grid, List } from '../svg';

  interface Props {
    list_style?: boolean;
  }
  const {list_style}: Props = $props();
	// blog items
	const blog_items = blogData.filter((b) => b.blog === 'blog-grid');
	let items = [...blog_items];
	const per_page = 6;
	let paginatedData: IBlogType[] = $state([]);

	const handlePaginate = (data: IBlogType[], startIndex: number, endIndex: number) => {
		paginatedData = data.slice(startIndex, endIndex);
	};
</script>

<section class="tp-blog-grid-area pb-120">
  <div class="container">
    <div class="row">
      <div class="col-xl-9 col-lg-8">
        <div class="tp-blog-grid-wrapper">
          <div class="tp-blog-grid-top d-flex justify-content-between mb-40">
            <div class="tp-blog-grid-result">
              <p>Showing 1–{paginatedData.length} of {blog_items.length} results</p>
            </div>
            <div class="tp-blog-grid-tab tp-tab">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link {list_style ? '' : 'active'}"
                    id="nav-grid-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-grid"
                    type="button"
                    role="tab"
                    aria-controls="nav-grid"
                    aria-selected="true"
                    aria-label="grid"
                  >
                    <Grid />
                  </button>
                  <button
                    class="nav-link {list_style ? 'active' : ''}"
                    id="nav-list-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-list"
                    type="button"
                    role="tab"
                    aria-controls="nav-list"
                    aria-selected="false"
                    aria-label="list"
                  >
                    <List />
                  </button>
                </div>
              </nav>
            </div>
          </div>

          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade {list_style ? '' : 'show active'}"
              id="nav-grid"
              role="tabpanel"
              aria-labelledby="nav-grid-tab"
              tabindex="0"
            >
              <!-- Blog grid item wrapper -->
              <div class="tp-blog-grid-item-wrapper">
                <div class="row tp-gx-30">
                  {#each paginatedData as blog}
                    <div class="col-lg-6 col-md-6">
                      <BlogGridItem item={blog} />
                    </div>
                  {/each}
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade {list_style ? 'show active' : ''}"
              id="nav-list"
              role="tabpanel"
              aria-labelledby="nav-list-tab"
              tabindex="0"
            >
              <!-- Blog list wrapper -->
              <div class="tp-blog-list-item-wrapper">
                {#each paginatedData as blog}
                  <BlogListItem item={blog} />
                {/each}
              </div>
            </div>

            <div class="row">
              <div class="col-xl-12">
                <div class="tp-blog-pagination mt-30">
                  <div class="tp-pagination">
                    <Pagination data={items} itemsPerPage={per_page} {handlePaginate} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-4">
        <!-- Blog sidebar start -->
        <BlogSidebar />
        <!-- Blog sidebar end -->
      </div>
    </div>
  </div>
</section>
