CREATE TABLE IF NOT EXISTS museum (
    id SERIAL PRIMARY KEY,
    title TEXT,
    admission INT,
    opens TEXT,
    closes TEXT,
    opening_hours TEXT,
    transport TEXT,
    located TEXT,
    region TEXT,
    xaxis INT,
    yaxis INT
);

CREATE TABLE IF NOT EXISTS category (
    id SERIAL PRIMARY KEY,
    title TEXT
);

CREATE TABLE IF NOT EXISTS category_museum (
    id SERIAL PRIMARY KEY,
    category_id INT,
    museum_id INT
);