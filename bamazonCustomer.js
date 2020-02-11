var mysql = require('mysql');
var inquirer = require('inquirer');
require ('console.table');//터미널에 표시될 때 보기쉽게 테이블로 정리되어 나타냄. 

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "passW@rd12",
    database: "bamazon"
});


connection.connect(function(err){
    if(err){
        console.log("failed to connect to the database." + err.stack);
    }else{
      showAllProducts(); 
    }
});

function showAllProducts(){
    connection.query("SELECT * FROM products", function(err, result){
        if(err){
            console.log("failed to query data.");
        }else{
            console.table(result);
            askUser();
        }
    });
}

function askUser(){
    inquirer.prompt([{
        type: "input",
        message: "What is your product ID?",
        name: "product_id"  
      },{
          type:"number",
          message: "How many product would you like to buy?",
          name: "wanted"
      }]).then(function(answer){
          queryInfo(answer.product_id, answer.wanted);
      },function(err){
          console.log("failed to get response from prompt");
      });
}

function queryInfo(product_id,wanted){
    connection.query("SELECT stock_quantity, price, item_id FROM products WHERE item_id =" + product_id,
              function(err, result){
                  if(err){
                      console.log("Failed to find the product that you wanted.");
                  }else{
                   checkQuantity(result[0]["stock_quantity"], result[0]["price"], wanted, product_id);  
                  }
              });
}

function checkQuantity(stock, price, wanted, product_id){
     if(stock < wanted){
         console.log("Insufficient quantity!");
          process.exit();
     }else{
         connection.query("UPDATE products SET stock_quantity = " + (stock - wanted) + " WHERE item_id = " + product_id,function(err, updateResult){
             if(err){
                 console.log("update error!");
             }else{
                 console.log(price * wanted);
             }
              process.exit();
         });
     }
}