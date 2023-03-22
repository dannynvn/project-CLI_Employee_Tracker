// import and require express and mysql2
const express = require('express');
const mysql = require('mysql2');

// declare port and instantiate express app
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware encoding
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database



sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });