// import and require express and mysql2
const express = require('express');
const mysql = require('mysql2');
const sequelize = require('./config/connection');


// declare port and instantiate express app
const app = express();
const PORT = process.env.PORT || 3001;


// express middleware encoding
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// connect to database and server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });



// inquirer prompt user for action
const userPrompt = () => {
    inquirer.prompt([
        {
        type: "list",
        message: "What would you like to do?",
        name: "option",
        options: [
                  "View all departments", 
                  "View all roles",
                  "View all employees", 
                  "Add department",
                  "Add role",
                  "Add employee",
                  "Update employee role"
                ]
        }
    ])
    .then(function(data) {
        switch (data.option) {
            case "View all departments":
                viewDepartments();
                break;

            case "View all roles":
                viewRoles();
                break;

            case "View all employees":
                viewEmployees();
                break;

            case "Add department":
                addDepartment();
                break;

            case "Add role":
                addRole();
                break;

            case "Add employee":
                addEmployee();
                break;

            case "Update employee role":
                updateEmployeeRole();
                break;
            }
    })
};


// switch statements that corresponds to user choice



// function to view departments


// function to view roles


// function to view employees


// function to add department


// function to add role


// function to add employee


// function to update employee role