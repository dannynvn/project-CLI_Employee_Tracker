// import and require express and mysql2
const express = require('express');
const mysql = require('mysql2');
const routes = require('/routes');
const sequelize = require('./config/connection');


// declare port and instantiate express app
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware encoding
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// initiate routes
app.use(routes);

// connect to database and server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });