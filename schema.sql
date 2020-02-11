DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INTEGER AUTO_INCREMENT NOT NULL, 
    product_name VARCHAR(20) NOT NULL,
    department_name VARCHAR(25),
    price DECIMAL(6,2) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Toner", "Cosmetics", 35.00, 15),
	   ("Mirror", "Cosmetics", 15.00, 3),
       ("Brigthtener", "Cosmetics", 38.00, 10),
       ("Makeup kit", "Cosmetics", 155.00, 35),
       ("Nail polsh", "Cosmetics", 25.00, 55),
	   ("Lip gloss", "Cosmetics", 75.00, 153),
       ("Lip liner", "Cosmetics", 45.00, 4),
       ("Foundation", "Cosmetics", 75.00, 85),
       ("Moisturizer", "Cosmetics", 85.00, 105),
       ("Primer", "Cosmetics", 38.20, 65);