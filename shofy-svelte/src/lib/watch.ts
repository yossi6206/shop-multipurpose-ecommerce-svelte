// import { onDestroy } from 'svelte';
// import { derived, type Readable } from 'svelte/store';

// export function watch<T>(
//   deps: Readable<T> | Readable<T>[], 
//   fn: (values: T | T[]) => void
// ): void {
//   const unsubscribe = derived(deps, values => values as T | T[]).subscribe(fn);
//   onDestroy(unsubscribe);
// }

import { onDestroy } from 'svelte';
import { derived } from 'svelte/store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function watch(deps:any, fn:any) {
	const unsubscribe = derived(deps, values => values).subscribe(fn);
	onDestroy(unsubscribe);
}
