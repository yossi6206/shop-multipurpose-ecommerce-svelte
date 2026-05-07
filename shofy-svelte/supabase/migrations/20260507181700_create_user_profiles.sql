-- ============================================================
-- User profiles table
-- Target of the pre-existing on_auth_user_created trigger
-- that calls public.handle_new_user() (owned by supabase_admin).
-- ============================================================

create table if not exists public.profiles (
  id          uuid        primary key default gen_random_uuid(),
  user_id     uuid        not null unique references auth.users(id) on delete cascade,
  email       text,
  full_name   text,
  avatar_url  text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists profiles_select_own on public.profiles;
create policy profiles_select_own
  on public.profiles for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists profiles_update_own on public.profiles;
create policy profiles_update_own
  on public.profiles for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ============================================================
-- Update handle_new_user to also save email + full_name.
-- Must be run as supabase_admin (the function owner).
-- The trigger on_auth_user_created already exists on auth.users.
-- ============================================================
-- Run as supabase_admin:
-- CREATE OR REPLACE FUNCTION public.handle_new_user()
-- RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
-- AS $$
-- BEGIN
--   INSERT INTO public.profiles (user_id, email, full_name)
--   VALUES (
--     NEW.id,
--     NEW.email,
--     COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', '')
--   )
--   ON CONFLICT (user_id) DO NOTHING;
--   RETURN NEW;
-- END;
-- $$;
