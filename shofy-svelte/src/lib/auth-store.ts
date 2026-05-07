import { writable, derived } from 'svelte/store';
import type { Session, User } from '@supabase/supabase-js';
import { supabase } from './supabase';

interface AuthState {
	session: Session | null;
	user: User | null;
	loading: boolean;
}

function createAuthStore() {
	const { subscribe, set, update } = writable<AuthState>({
		session: null,
		user: null,
		loading: true
	});

	// Initialize from existing session
	if (typeof window !== 'undefined') {
		supabase.auth.getSession().then(({ data: { session } }) => {
			set({ session, user: session?.user ?? null, loading: false });
		});

		// Listen for auth changes (login, logout, token refresh)
		supabase.auth.onAuthStateChange((_event, session) => {
			set({ session, user: session?.user ?? null, loading: false });
		});
	}

	return {
		subscribe,
		signOut: async () => {
			await supabase.auth.signOut();
			set({ session: null, user: null, loading: false });
		}
	};
}

export const authStore = createAuthStore();

// Convenience derived stores
export const currentUser = derived(authStore, ($auth) => $auth.user);
export const isLoggedIn = derived(authStore, ($auth) => !!$auth.session);

/** Returns the user's display name from user_metadata or falls back to email prefix */
export const userDisplayName = derived(authStore, ($auth) => {
	const u = $auth.user;
	if (!u) return '';
	return (
		u.user_metadata?.full_name ||
		u.user_metadata?.name ||
		u.email?.split('@')[0] ||
		''
	);
});
