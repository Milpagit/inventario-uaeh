const express = require('express');
const path = require('path'); 
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3005; // Define your preferred port



// Configure body-parser to handle form data
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'html')));  // Adjust path if needed

// Establish connection to MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'inventario'
});

// Route to handle login
app.post('/login', (req, res) => {
  const matricula = req.body.matricula;
  const password = req.body.password;
  

  // Prepare SQL query to check if user exists with provided username and password
  const sql = `SELECT * FROM usuario WHERE matricula = ? AND contrasenia = ?`;
  
  connection.query(sql, [matricula, password], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error en la consulta de la base de datos');
    } else {
      if (results.length > 0) {
        res.redirect('http://127.0.0.1:5500/html/principal.html');
      } else {
        res.send('Credenciales incorrectas');
      }
    }
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Servidor en el puerto ${port}`);
});
