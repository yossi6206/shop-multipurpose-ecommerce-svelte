import { writable } from "svelte/store";

export function useVideoPopup() {
  const isVideoOpen = writable<boolean>(false);
  const videoUrl = writable<string>("https://www.youtube.com/embed/iJ-d_K7tb7k");
  let iframeElement: HTMLIFrameElement | null = null;

  const playVideo = (videoId: string) => {
    if (typeof window !== "undefined") {
      const videoOverlay = document.querySelector("#video-overlay") as HTMLElement;
      const newUrl = `https://www.youtube.com/embed/${videoId}`;
      videoUrl.set(newUrl);
      console.log("videoUrl.value:", newUrl, "video id:", videoId);

      if (!iframeElement) {
        iframeElement = document.createElement("iframe");
        iframeElement.style.width = "60%";
        iframeElement.style.height = "80%";
      }

      iframeElement.setAttribute("src", newUrl);
      isVideoOpen.set(true);
      videoOverlay?.classList.add("open");
      videoOverlay?.appendChild(iframeElement);
    }
  };

  const closeVideo = () => {
    if (typeof window !== "undefined") {
      const videoOverlay = document.querySelector("#video-overlay") as HTMLElement;

      videoOverlay?.querySelector("iframe")?.remove();
      isVideoOpen.set(false);
      videoOverlay?.classList.remove("open");
    }
  };

  return { isVideoOpen, playVideo, closeVideo };
}
