<!-- <script lang="ts">
	import { useTimer } from '../../utils/timer';

	let { endTime }:{ endTime: Date} = $props();

	const {days,hours,minutes,seconds} = useTimer(endTime);
</script>

<ul>
	<li><span>{days}</span> Day</li>
	<li><span>{hours}</span> Hrs</li>
	<li><span>{minutes}</span> Min</li>
	<li><span>{seconds}</span> Sec</li>
</ul> -->

<script lang="ts">
	import { onDestroy } from 'svelte';
	import { startTimer, stopTimer, type Timer } from '../../utils/timer';

	let { endTime }: { endTime: Date } = $props();

	let timer: Timer = $state({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	let interval: number; // Declare the interval variable first

  // Start the timer and assign the interval
  interval = startTimer(endTime, (updatedTimer) => {
    timer = updatedTimer;
  });

  // Cleanup when the component is unmounted
  onDestroy(() => {
    if (interval) stopTimer(interval);
  });
</script>

<ul dir="rtl">
	<li><span>{timer.seconds}</span> שנ'</li>
	<li><span>{timer.minutes}</span> דק'</li>
	<li><span>{timer.hours}</span> שע'</li>
	<li><span>{timer.days}</span> יום</li>
</ul>
