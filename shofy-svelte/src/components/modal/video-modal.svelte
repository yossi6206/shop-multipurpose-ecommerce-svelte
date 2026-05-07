<script lang="ts">
  import { useVideoPopup } from "../../hooks/use-video-popup";
  
  const { closeVideo } = useVideoPopup();
</script>

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_missing_attribute -->
  <div id="video-overlay" class="video-overlay" onclick={closeVideo}>
    <a class="video-overlay-close pointer" onclick={closeVideo}>×</a>
  </div>

