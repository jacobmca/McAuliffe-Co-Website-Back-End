-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- USE DATABASE
\c ecommerce_db;

-- Category Table
CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  category_name VARCHAR(300) NOT NULL
);

-- Product Table
CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(300) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 10,
    category_id INT REFERENCES category(id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Tag Table
CREATE TABLE tag (
    id SERIAL PRIMARY KEY,
    tag_name VARCHAR(300)
);

-- ProductTag Table
CREATE TABLE product_tag (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES product(id),
    tag_id INT REFERENCES tag(id)
);