-- Products table mirroring the shape of IProduct in src/types/product-type.ts.
-- Nested objects/arrays (imageURLs, brand, category, reviews, additionalInformation, offerDate)
-- are stored as JSONB so the front-end can keep consuming them as-is.

create extension if not exists "pgcrypto";

create table if not exists public.products (
  id                     text        primary key,
  sku                    text        not null,
  img                    text        not null,
  title                  text        not null,
  slug                   text        not null,
  unit                   text,
  image_urls             jsonb       not null default '[]'::jsonb,
  parent                 text,
  children               text,
  price                  numeric(12,2) not null default 0,
  discount               numeric(6,2)  not null default 0,
  quantity               integer     not null default 0,
  brand                  jsonb,
  category               jsonb,
  status                 text        not null default 'in-stock',
  reviews                jsonb       not null default '[]'::jsonb,
  product_type           text,
  description            text,
  additional_information jsonb       not null default '[]'::jsonb,
  featured               boolean     not null default false,
  sell_count             integer     not null default 0,
  offer_date             jsonb,
  tags                   text[]      not null default '{}'::text[],
  video_id               text,
  sizes                  text[]      not null default '{}'::text[],
  created_at             timestamptz not null default now(),
  updated_at             timestamptz not null default now()
);

create index if not exists products_slug_idx           on public.products (slug);
create index if not exists products_product_type_idx   on public.products (product_type);
create index if not exists products_status_idx         on public.products (status);
create index if not exists products_featured_idx       on public.products (featured);
create index if not exists products_tags_gin_idx       on public.products using gin (tags);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_products_updated_at on public.products;
create trigger trg_products_updated_at
before update on public.products
for each row execute function public.set_updated_at();

alter table public.products enable row level security;

drop policy if exists "Products are viewable by everyone" on public.products;
create policy "Products are viewable by everyone"
  on public.products
  for select
  to anon, authenticated
  using (true);
