DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;


-- employee table --
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT
  manager_id INT,
  FOREIGN KEY (manager_id)
  REFERENCES employee(id),
  FOREIGN KEY (role_id)
  REFERENCES (role_id)
);


-- role table --
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(50) NOT NULL,
  salary INT NOT NULL,
  department_id INT
  FOREIGN KEY (department_id) 
  REFERENCES department(id)
);


-- department table --
CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30)
);