// Import and require
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT ||3000;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: '127.0.0.7',
      // MySQL username,
      user: 'root',
      // MySQL password
      database: 'business_db'
    },
    console.log(`Connected to the business_db database.`)
  );

const allRoutes = require("./controllers")

// Hardcoded query: DELETE FROM course_names WHERE id = 3;

db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });

// Query database
db.query('SELECT * FROM students', function (err, results) {
    console.log(results);
  });
  
  // Default response for any other request (Not Found)
  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  