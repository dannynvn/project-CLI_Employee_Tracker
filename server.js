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