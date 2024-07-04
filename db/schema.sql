-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- USE DATABASE
USE ecommerce_db;

-- Category Table
CREATE TABLE category (
  id INT NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(300) NOT NULL,
  PRIMARY KEY (id)
);

-- Product Table
CREATE TABLE product (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(300) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 10,
    category_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES category(id)
)

-- Tag Table
CREATE TABLE tag (
    id INT NOT NULL AUTO_INCREMENT,
    tag_name VARCHAR(300),
    PRIMARY KEY (id)
)

-- ProductTag Table
CREATE TABLE product_tag (
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT,
    tag_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES product(id),
    FOREIGN KEY (tag_id) REFERENCES tag(id),
)