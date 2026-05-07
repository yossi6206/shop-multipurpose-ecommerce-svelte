<script lang="ts">
  type SocialLink = {
    id: number;
    link: string;
    icon: string;
    title: string;
  };

  const social_data: SocialLink[] = [
    { id: 1, link: "https://www.facebook.com/", icon: "fa-brands fa-facebook-f", title: "Facebook" },
    { id: 2, link: "https://twitter.com/", icon: "fa-brands fa-twitter", title: "Twitter" },
    { id: 3, link: "https://www.linkedin.com/", icon: "fa-brands fa-linkedin-in", title: "Linkedin" },
    { id: 4, link: "https://vimeo.com/", icon: "fa-brands fa-vimeo-v", title: "Vimeo" }
  ];
</script>

{#each social_data as item (item.id)}
  <!-- svelte-ignore a11y_consider_explicit_label -->
  <a href={item.link} title={item.title} target="_blank">
    <i class={item.icon}></i>
  </a>
{/each}
