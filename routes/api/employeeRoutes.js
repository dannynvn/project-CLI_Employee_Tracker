const router = require('express').Router();

// Create an employee
app.post('/api/new-employee', ({ body }, res) => {
    const sql = `INSERT INTO employees (first_name, last_name, job_title, department, salary, manager)
      VALUES (?)`;
    const params = [body.first_name];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });

  // retrieve all employee data
  // Read all movies
app.get('/api/employees', (req, res) => {
    const sql = `SELECT id, first_name`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });