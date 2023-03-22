const router = require('express').Router();
const employees = require('./employeeRoutes');

// prefix routes in employeeRoutes with employees
router.use('/employees', employees);

module.exports = router;