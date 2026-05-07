-- Inserts a duplicate of the "Galaxy Android Tablet" product (Mobile Tablets, $288 / $320)
-- so it shows up in the public.products table.
-- Uses upsert (ON CONFLICT) so re-running the migration is safe.

insert into public.products (
  id,
  sku,
  img,
  title,
  slug,
  unit,
  image_urls,
  parent,
  children,
  price,
  discount,
  quantity,
  brand,
  category,
  status,
  reviews,
  product_type,
  description,
  additional_information,
  featured,
  sell_count,
  tags
)
values (
  '641e887d05f9ee1717e1349a-dup-01',
  'BD7SDVX62-DUP',
  'https://i.ibb.co/jvGv6qf/mobile-1.png',
  'Galaxy Android Tablet',
  'galaxy-android-tablet-copy',
  '8pcs',
  '[
    {"color": {"name": "Black",      "clrCode": "#3A454B"}, "img": "https://i.ibb.co/jvGv6qf/mobile-1.png"},
    {"color": {"name": "Gray",       "clrCode": "#3C3B39"}, "img": "https://i.ibb.co/F3VPLLh/mobile-2.png"},
    {"color": {"name": "Silver",     "clrCode": "#343338"}, "img": "https://i.ibb.co/rtmKcPg/mobile-3.png"},
    {"color": {"name": "Cadet Grey", "clrCode": "#7B97A3"}, "img": "https://i.ibb.co/NpWtdts/mobile-4.png"}
  ]'::jsonb,
  'Mobile Tablets',
  'Samsung',
  320,
  10,
  12,
  '{"name": "Samsung"}'::jsonb,
  '{"name": "Mobile Tablets"}'::jsonb,
  'in-stock',
  '[
    {
      "user": "/img/users/user-3.jpg",
      "review": "Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.",
      "date": "06 March, 2023",
      "name": "John doe",
      "email": "john@gmail.com",
      "rating": 4.5
    },
    {
      "user": "/img/users/user-2.jpg",
      "review": "Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.",
      "date": "07 March, 2023",
      "name": "Smith Doe",
      "email": "smith@gmail.com",
      "rating": 3
    }
  ]'::jsonb,
  'electronics',
  'Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home.',
  '[
    {"key": "Announced",            "value": "2022, September"},
    {"key": "Colors",               "value": "Black, Gray, Silver, Cadet Grey"},
    {"key": "Technology",           "value": "GSM / HSPA / LTE"},
    {"key": "3G bands",             "value": "HSDPA 800 / 850 / 900 / 1900 / 2100"},
    {"key": "4G bands",             "value": "1, 2, 3, 4, 5, 7, 8, 19, 20, 28, 38, 40, 41"},
    {"key": "Graphics Coprocessor", "value": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)"},
    {"key": "Wireless Type",        "value": "802.11a/b/g/n/ac, Bluetooth"}
  ]'::jsonb,
  false,
  0,
  array['Mobile', 'Tablets', 'Samsung']
)
on conflict (id) do update set
  sku                    = excluded.sku,
  img                    = excluded.img,
  title                  = excluded.title,
  slug                   = excluded.slug,
  unit                   = excluded.unit,
  image_urls             = excluded.image_urls,
  parent                 = excluded.parent,
  children               = excluded.children,
  price                  = excluded.price,
  discount               = excluded.discount,
  quantity               = excluded.quantity,
  brand                  = excluded.brand,
  category               = excluded.category,
  status                 = excluded.status,
  reviews                = excluded.reviews,
  product_type           = excluded.product_type,
  description            = excluded.description,
  additional_information = excluded.additional_information,
  featured               = excluded.featured,
  sell_count             = excluded.sell_count,
  tags                   = excluded.tags;
