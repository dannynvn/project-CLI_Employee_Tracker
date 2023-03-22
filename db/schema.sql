DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  job_title VARCHAR(100) NOT NULL,
  department VARCHAR(50) NOT NULL,
  salary INT NOT NULL,
  manager VARCHAR(50)
);

