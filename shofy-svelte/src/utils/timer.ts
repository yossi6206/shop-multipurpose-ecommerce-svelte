
export interface Timer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useTimer(endTime: Date): Timer {
  const endTimeMs = endTime.getTime();
  const now = new Date().getTime();
  const distance = endTimeMs - now;

  if (distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds
  };
} 

export function startTimer(endTime: Date, callback: (timer: Timer) => void): ReturnType<typeof setInterval> {
  const interval = setInterval(() => {
    const timer = useTimer(endTime);
    callback(timer);

    if (timer.days === 0 && timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0) {
      clearInterval(interval);
    }
  }, 1000);

  // Run immediately before the first interval tick
  const initialTimer = useTimer(endTime);
  callback(initialTimer);

  return interval;
}




export function stopTimer(interval: ReturnType<typeof setInterval>) {
  clearInterval(interval);
}
