// import and require express and mysql2
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const sequelize = require('./config/connection');
const { QueryTypes, QueryInterface } = require('sequelize');


// declare port and instantiate express app
const app = express();
const PORT = process.env.PORT || 3001;


// express middleware encoding
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// connect to database and server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
    userPrompt();
  });



// inquirer prompt user for action
const userPrompt = () => {
    inquirer.prompt([
        {
        type: "list",
        message: "What would you like to do?",
        name: "option",
        choices: [
                  "View all departments", 
                  "View all roles",
                  "View all employees", 
                  "Add department",
                  "Add role",
                  "Add employee",
                  "Update employee role",
                  "Exit"
                ]
        }
    ])
    // switch statements that corresponds to user choice
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
            case "Exit":
                process.exit();
        }
    })
};



// function to view departments
const viewDepartments = () => {
    console.log("viewing departments");
    sequelize.query("SELECT * FROM departments;", { type: sequelize.QueryTypes.SELECT })
    .then(results => {
        console.table(results)
    })
    userPrompt();
};

// function to view roles
const viewRoles = () => {
    console.log("viewing roles");
    sequelize.query("SELECT * FROM roles;", { type: sequelize.QueryTypes.SELECT })
    .then(results => {
        console.table(results)
    })
};

// function to view employees
const viewEmployees = () => {
    console.log("viewing employees");
    sequelize.query("SELECT * FROM employees;", { type: sequelize.QueryTypes.SELECT })
    .then(results => {
        console.table(results)
    })
};

// function to add department
const addDepartment = () => {
    console.log("adding departments");
    return;
};

// function to add role
const addRole = () => {
    console.log("adding role");
    return;
};

// function to add employee
const addEmployee = () => {
    console.log("adding employee");
    return;
};

// function to update employee role
const updateEmployeeRole = () => {
    console.log("updating employee role");
    return;
};