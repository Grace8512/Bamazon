DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INTEGER, 
    product_name VARCHAR(20),
    department_name VARCHAR(25),
    price DECIMAL(6,2),
    stock_quantity INTEGER,
    PRIMARY KEY(item_id)
);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Toner", "Cosmetics", 35.00, 15),
	(2, "Mirror", "Cosmetics", 15.00, 13),
    (3, "Brigthtener", "Cosmetics", 38.00, 10),
    (4, "Makeup kit", "Cosmetics", 155.00, 35),
    (5, "Nail polsh", "Cosmetics", 25.00, 55),
    (6, "Lip gloss", "Cosmetics", 75.00, 153),
    (7, "Lip liner", "Cosmetics", 45.00, 125),
    (8, "Foundation", "Cosmetics", 75.00, 85),
    (9, "Moisturizer", "Cosmetics", 85.00, 105),
    (10, "Primer", "Cosmetics", 38.20, 65);
    
SELECT stock_quantity, item_id FROM products WHERE item_id = 3;