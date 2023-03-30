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



// ====inquirer prompt user for action====
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
        },
    ])
    // ===switch statements that corresponds to user choice===
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



// ===function to view departments===
const viewDepartments = () => {
    console.log("viewing departments");
    sequelize.query("SELECT * FROM departments;", { type: sequelize.QueryTypes.SELECT })
    .then(results => {
        console.table(results)
        console.log("=================================================")
        userPrompt();
    })
    
};

// ===function to view roles===
const viewRoles = () => {
    console.log("viewing roles");
    sequelize.query("SELECT roles.id, roles.job_title, roles.salary, department_name FROM roles JOIN departments ON roles.department_id = departments.id;", { type: sequelize.QueryTypes.SELECT })
    .then(results => {
        console.table(results)
        console.log("=================================================")
        userPrompt();
    })
};

// ===function to view employees===
const viewEmployees = () => {
    console.log("viewing employees");
    sequelize.query("SELECT employees.id, CONCAT(employees.first_name, ' ' , employees.last_name) AS name, roles.job_title AS role, roles.salary, departments.department_name AS department, CONCAT(e.first_name, ' ' ,e.last_name) AS manager FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id LEFT JOIN employees e on employees.manager_id = e.id;", { type: sequelize.QueryTypes.SELECT })
    .then(results => {
        console.table(results)
        console.log("=================================================")
        userPrompt();
    })
};

// ===function to add department===
const addDepartment = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "dept_name",
            message: "What is the department name?"
        }
    ])
    .then(function(res) {
        sequelize.query('INSERT INTO departments (department_name) VALUE ("' + res.dept_name + '")', { type: sequelize.QueryTypes.INSERT })
        .then(results => {
            console.log("=================================================")
            console.table("Added new department!")
            userPrompt();
        }); 
    });
};

// ===function to add role===
const addRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "job_title",
            message: "What is the role's title?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the role's salary?"
        },
        {
            type: "input",
            name: "dept_id",
            message: "Which department is this role under? (Enter department id number)"
        }
    ])
    .then(function(res) {
        sequelize.query('INSERT INTO roles (job_title, salary, department_id) VALUE ("' + res.job_title + '", "' + res.salary + '", "' + res.dept_id + '")', { type: sequelize.QueryTypes.INSERT })
        .then(results => {
            console.log("=================================================")
            console.table("Added new role!")
            userPrompt();
        }); 
    });
};

// ===function to add employee===
const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            type: "input",
            name: "role_id",
            message: "What is the employee's job title? (Enter role id number)"
        },
        {
            type: "input",
            name: "manager_id",
            message: "Who is the employee's manager? (Enter manager id number)"
        },
    ])
    .then(function(res) {
        sequelize.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUE ("' + res.first_name + '", "' + res.last_name + '", "' + res.role_id + '", "' + res.manager_id + '")', { type: sequelize.QueryTypes.INSERT })
        .then(results => {
            console.log("=================================================")
            console.table("Added new employee!")
            userPrompt();
        }); 
    });
};

// ===function to update employee role===
const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "emp_id",
            message: "What is the employee's id?"
        },
        {
            type: "input",
            name: "role_id",
            message: "What is the new role id?"
        },
    ])
    .then(function(res) {
        sequelize.query('UPDATE employees SET role_id = ' + res.role_id + ' WHERE id = ' + res.emp_id + ';', { type: sequelize.QueryTypes.UPDATE })
        .then(results => {
            console.log("=================================================")
            console.table("Added new employee!")
            userPrompt();
        }); 
    });
};