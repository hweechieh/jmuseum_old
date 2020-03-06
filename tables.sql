CREATE TABLE IF NOT EXISTS museums (
    id SERIAL PRIMARY KEY,
    title TEXT,
    duration TEXT,
    admission TEXT,
    operating_days TEXT,
    operating_time TEXT,
    closed TEXT,
    train TEXT,
    located TEXT
);

CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    title TEXT
);

CREATE TABLE IF NOT EXISTS category_museums (
    id SERIAL PRIMARY KEY,
    category_id INT,
    museum_id INT
);