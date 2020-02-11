# Bamazon <a id="top"></a>

## Outline 

Functions : 

1. customer
    * allows user to view and purchase products.

2. Manager
    * allows user to view, update, add, remove and new products
    
3. Supervisor View
    * allows user to view id, name, over_head_costs


## Set up

To run this application, you will need [MySQL](https://dev.mysql.com/doc/refman/5.6/en/installing.html) and [Node JS](https://nodejs.org/en/download/) installed on your computer.

**Run Application**

Once you have the Bamazon database set up, run these commands in the command line:

```
git clone https://github.com/Grace8512/Bamazon.git
cd Bamazon
npm install
node bamazonCustomer.js 
node bamazonManager.js
```

## Customer Demo

The Customer Interface :

```
1) Customer can see a table of all available products
2) Asks the customer for the ID they want
3) Asks how many items the customer would like to purchase
4) Confirms order & updates product inventory in database

* Note 
- If a customer orders more than the product’s inventory, 
they cannot purchase the product and the memo shows "Insufficient Quantity!"
```
 **GIF Link**
[**Bamazon Customer**](
https://media.giphy.com/media/giubdVFMJX3l5q7mGH/giphy.gif)

## Manager Demo

The Manager Interface :
```
1) Manager can see a table of products for sale
2) View Low Inventory
3) Manager(user) can add as much inventory as they want to products that are low stock
4) Manager(user) can add new product.
```
 **Link**
[**Bamazon Manager**](
https://drive.google.com/file/d/1blcYZHGE6gQkwfI5IcFARBlhRCbNDG32/view)

[Scroll to top](#top)

