import { writable } from 'svelte/store';
import { onMount } from 'svelte';

export function useSticky() {
  const isSticky = writable(false);

  const handleSticky = () => {
    if (window.scrollY > 120) {
      isSticky.set(true);
    } else {
      isSticky.set(false);
    }
  };

  onMount(() => {
    window.addEventListener('scroll', handleSticky);
    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleSticky);
    };
  });

  return { isSticky };
}
