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
      managerList(); 
    }
});


function managerList(){
    inquirer.prompt({
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory","Add New Product"]  
      }).then(function(val){
            switch(val.choice){
                case "View Products for Sale":
                    viewProduct();
                    break;
                case "View Low Inventory":
                    viewLowInventory();
                    break;
                case "Add to Inventory":
                    addToInventory();
                    break;
                case "Add New Product":
                    addNewProduct();
                    break;                 
            }   
        });
}

function viewProduct(){
    connection.query("SELECT * FROM products", function(err, result){
        if(err){
            console.log("failed to query data.");
        }else{
            console.table(result);
        }
        process.exit(0);//err코드를 지정해주거나 0을 넣으면 잘 끝났다는 표시
    });
}

function viewLowInventory(){
    connection.query("SELECT * FROM products WHERE stock_quantity <= 5", function(err, result){
        if(err){
            console.log("failed to query data.");
        }else{
            console.table(result);
        }
        process.exit(0);
    });
}

function addToInventory(){
    inquirer.prompt([{
        type: "number",//answer의 타입
        name: "item_id",
        message: "Which item_id do you want to add?",
    }, 
     {type: "number",
      name: "stock",
      message: "How many item do you want to add?"
     }]).then(function(answers){
         connection.query("SELECT stock_quantity FROM products WHERE item_id = " + answers.item_id, function(err, result){
            if(err){
                console.log("failed to query data.");
            }else{
                var currentQuantity = result[0].stock_quantity;
                //현재 재고수, 셀렉트 구문은 row리스트를 리턴해주는데 한 줄이 리턴이 되더라도 그게 리스트 안에 들어있으므로 0번째를(가장 첫번째 라는 것을) 지정을 해줘야 한다. 
                console.log(currentQuantity);
                console.log(answers.stock);
                connection.query("UPDATE products SET stock_quantity = " + (currentQuantity + answers.stock) + " WHERE item_id = " + answers.item_id, function(err, result){
                    if(err){
                        console.log(err);
                        console.log("failed to update query data.");
                    }else{
                        console.log("updated!");
                    }
                    process.exit(0);
                });
            }
         });
     }); 
     //inquirer.prompt는 매개변수를 하나받고 promise를 돌려준다. 그러면 .then이라고 쓰고 then은 펑션을 매개변수로 받는다. 
    
}

function addNewProduct(){
    inquirer.prompt([{
        type:"input",
        name: "product_name",
        message: "what kind of product do you want to add?"
    },
    {
        type:"input",
        name: "department_name",
        message: "Write department_name"
    },
    {
        type:"number",
        name: "price",
        message: "How much is new product?"
    },
    {
        type:"number",
        name: "stock_quantity",
        message: "How many do you want to set the inventory quantity?"
    }
    ]).then(function(result){
        connection.query(
            "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ( ?, ?, ?, ?)", 
            [result.product_name, result.department_name, result.price, result.stock_quantity],
            function(err,result){
                if(err) throw err;
                console.log("insert!");
            }
        );
    });
}



