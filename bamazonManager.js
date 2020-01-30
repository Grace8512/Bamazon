var inquirer = require('inquirer');
inquirer.prompt([{
    type: "list",
    message: "Menu Options.",
    name: "options",
    choices: ["a","b","c","d"]
}]).then(function(result){
    console.log(result.options);
});