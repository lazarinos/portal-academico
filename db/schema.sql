CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS evaluations (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  questions INTEGER NOT NULL,
  duration TEXT NOT NULL,
  competency TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS hero_settings (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  image_url TEXT NOT NULL,
  cta_label TEXT NOT NULL,
  cta_target TEXT NOT NULL
);
