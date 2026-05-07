import { toast } from '@zerodevx/svelte-toast';

export function successToast(message: string) {
  toast.push(message, {
    theme: {
      '--toastBackground': '#4CAF50',
      '--toastBarBackground': '#388E3C'
    }
  });
}

export function errorToast(message: string) {
  toast.push(message, {
    theme: {
      '--toastBackground': '#F44336',
      '--toastBarBackground': '#D32F2F'
    }
  });
}

export function infoToast(message: string) {
  toast.push(message, {
    theme: {
      '--toastBackground': '#2196F3',
      '--toastBarBackground': '#1976D2'
    }
  });
}
