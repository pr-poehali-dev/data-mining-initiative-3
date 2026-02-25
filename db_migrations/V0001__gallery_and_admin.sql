
CREATE TABLE IF NOT EXISTS gallery_items (
  id SERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  title TEXT NOT NULL DEFAULT '',
  tag TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO gallery_items (url, title, tag, sort_order) VALUES
  ('https://cdn.poehali.dev/projects/61c39d62-8dff-4717-9b07-abac450ff076/bucket/92609513-fbea-4f25-8889-8ee48bbf32c1.png', 'Яндекс.Станция Мини', 'Электроника', 1),
  ('https://cdn.poehali.dev/projects/61c39d62-8dff-4717-9b07-abac450ff076/bucket/4931ee17-e8e0-4e41-90d8-80c36bd5cd0d.png', 'Яндекс.Станция — автономность', 'Электроника', 2),
  ('https://cdn.poehali.dev/projects/61c39d62-8dff-4717-9b07-abac450ff076/bucket/f66fb6b6-bf80-4e9f-8994-7da62115cf90.png', 'Звуковая зубная щётка', 'Косметика и уход', 3),
  ('https://cdn.poehali.dev/projects/61c39d62-8dff-4717-9b07-abac450ff076/bucket/71a15dec-3a65-4d87-8eb9-c9d26222c22e.png', 'Зубная щётка — характеристики', 'Косметика и уход', 4),
  ('https://cdn.poehali.dev/projects/61c39d62-8dff-4717-9b07-abac450ff076/bucket/fb26e062-f59c-427c-80b8-8604331d7637.png', 'Зубная щётка — режимы', 'Косметика и уход', 5);

CREATE TABLE IF NOT EXISTS admin_session (
  token TEXT PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW()
);
