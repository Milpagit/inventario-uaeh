const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors'); // Importar el paquete CORS

const app = express();
const port = 3000; // Define your preferred port

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors()); 

app.use(bodyParser.urlencoded({ extended: false }));

// Establish connection to MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'inventario'
});


//-----------------------------------------------------------------------------------------------------------------------------------------------------------
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
        res.redirect('http://127.0.0.1:5500/inventario-uaeh/html/principal.html');
      } else {
        res.send('Credenciales incorrectas');
      }
    }
  });
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------
// Route to handle form submission
app.post('/edificio', (req, res) => {
  const nombre = req.body.NE;
  const direccion = req.body.DE;

  // Prepare SQL query with parameterized values to prevent SQL injection
  const sql = `INSERT INTO edificio ( nombre, direccion) VALUES (?, ?)`;

  connection.query(sql, [nombre,direccion], (error, results) => {
    if (error) {
      console.error(error);
      const successMessage = 'Datos insertados incorrectamente';
     // Script JavaScript para mostrar una ventana emergente con el mensaje de éxito y luego redirigir a otra página
     const successScript = `
       <script>
         alert('${successMessage}');
         window.location.href = 'http://127.0.0.1:5500/inventario-uaeh/html/edificio.html';
       </script>
     `;
     // Enviar la respuesta con el script JavaScript de éxito
     res.send(successScript);
    } else {
     // Mensaje de éxito
     const successMessage = 'Datos insertados correctamente';
     // Script JavaScript para mostrar una ventana emergente con el mensaje de éxito y luego redirigir a otra página
     const successScript = `
       <script>
         alert('${successMessage}');
         window.location.href = 'http://127.0.0.1:5500/inventario-uaeh/html/edificio.html';
       </script>
     `;
     // Enviar la respuesta con el script JavaScript de éxito
     res.send(successScript);
    }
  });
});
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Route to handle form submission
app.post('/salon', (req, res) => {
  const nombre_edificio = req.body.NE;
  const nombre = req.body.NS;
  const capacidad = req.body.CS
  const planta = req.body.PS
  const ubicacion = req.body.US

  // Prepare SQL query with parameterized values to prevent SQL injection
  const sql = `INSERT INTO salon ( nombre_edificio, nombre,capacidad,planta,ubicacion) VALUES ( ?, ?,?,?,?)`;

  connection.query(sql, [nombre_edificio,nombre,capacidad,planta,ubicacion], (error, results) => {
    if (error) {
      console.error(error);
      const successMessage = 'Datos insertados incorrectamente';
     // Script JavaScript para mostrar una ventana emergente con el mensaje de éxito y luego redirigir a otra página
     const successScript = `
       <script>
         alert('${successMessage}');
         window.location.href = 'http://127.0.0.1:5500/inventario-uaeh/html/salon.html';
       </script>
     `;
     // Enviar la respuesta con el script JavaScript de éxito
     res.send(successScript);
    } else {
      // Mensaje de éxito
     const successMessage = 'Datos insertados correctamente';
     // Script JavaScript para mostrar una ventana emergente con el mensaje de éxito y luego redirigir a otra página
     const successScript = `
       <script>
         alert('${successMessage}');
         window.location.href = 'http://127.0.0.1:5500/inventario-uaeh/html/salon.html';
       </script>
     `;
     // Enviar la respuesta con el script JavaScript de éxito
     res.send(successScript);
    }
  });
});
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post('/usuario', (req, res) => {
  const nombre_completo_ = req.body.NOMC;
  const nivel_de_usuario = req.body.NUSU;
  const contrasenia = req.body.CUSU;
  const matricula = req.body.MUSU;


  const sql = `INSERT INTO usuario (nombre_completo_,nivel_de_usuario,contrasenia,matricula) VALUES (?, ?,?,?)`;

  connection.query(sql, [nombre_completo_,nivel_de_usuario,contrasenia,matricula], (error, results) => {
    if (error) {
      console.error(error);
      const successMessage = 'Datos insertados incorrectamente';
     // Script JavaScript para mostrar una ventana emergente con el mensaje de éxito y luego redirigir a otra página
     const successScript = `
       <script>
         alert('${successMessage}');
         window.location.href = 'http://127.0.0.1:5500/inventario-uaeh/html/usuario.html';
       </script>
     `;
     // Enviar la respuesta con el script JavaScript de éxito
     res.send(successScript);
    } else {
      // Mensaje de éxito
     const successMessage = 'Datos insertados correctamente';
     // Script JavaScript para mostrar una ventana emergente con el mensaje de éxito y luego redirigir a otra página
     const successScript = `
       <script>
         alert('${successMessage}');
         window.location.href = 'http://127.0.0.1:5500/inventario-uaeh/html/invex.html';
       </script>
     `;
     // Enviar la respuesta con el script JavaScript de éxito
     res.send(successScript);
    }
  });
});
//------------------------------------------------------------------------------------------------------------------------------------------------------------
// Route to handle form submission
app.post('/recurso', (req, res) => {
  const nombre_salon2 = req.body.NS2;
  const nombre = req.body.NR;
  const color = req.body.CR
  const marca = req.body.MR
  const estado = req.body.ER
  const precio = req.body.PR
  const serial = req.body.SR
  const posicion = req.body.POR

  // Prepare SQL query with parameterized values to prevent SQL injection
  const sql = `INSERT INTO recurso ( nombre_salon2, nombre,color,marca,estado,precio,serial,posicion) VALUES (?,?,?,?,?,?,?,?)`;

  connection.query(sql, [ nombre_salon2,nombre,color,marca,estado,precio,serial,posicion], (error, results) => {
    if (error) {
      console.error(error);
      const successMessage = 'Datos insertados incorrectamente';
     // Script JavaScript para mostrar una ventana emergente con el mensaje de éxito y luego redirigir a otra página
     const successScript = `
       <script>
         alert('${successMessage}');
         window.location.href = 'http://127.0.0.1:5500/inventario-uaeh/html/recurso.html';
       </script>
     `;
     // Enviar la respuesta con el script JavaScript de éxito
     res.send(successScript);
    } else {
      // Mensaje de éxito
     const successMessage = 'Datos insertados correctamente';
     // Script JavaScript para mostrar una ventana emergente con el mensaje de éxito y luego redirigir a otra página
     const successScript = `
       <script>
         alert('${successMessage}');
         window.location.href = 'http://127.0.0.1:5500/inventario-uaeh/html/recurso.html';
       </script>
     `;
     // Enviar la respuesta con el script JavaScript de éxito
     res.send(successScript);
    }
  });
});                           
//------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post('/movimiento', (req, res) => {
  const serial = req.body.SE;
  const matricula = req.body.MAT;
  const nombre_salon = req.body.NS;
  const tipo_de_movimiento = req.body.TMOV;
  const fecha_de_movimiento = req.body.FMOV;
  const hora_de_movimiento = req.body.HOMOV;
  const observaciones = req.body.OBMOV;

  // Prepare SQL query with parameterized values to prevent SQL injection
  const sql = `INSERT INTO movimiento ( serial, matricula,nombre_salon,tipo_de_movimiento,fecha_de_movimiento,hora_de_movimiento,observaciones) VALUES ( ?, ?, ?, ?, ?, ?, ?)`;

  connection.query(sql, [serial,matricula,nombre_salon,tipo_de_movimiento,fecha_de_movimiento,hora_de_movimiento,observaciones], (error, results) => {
    if (error) {
      console.error(error);
      const successMessage = 'Datos insertados incorrectamente';
     // Script JavaScript para mostrar una ventana emergente con el mensaje de éxito y luego redirigir a otra página
     const successScript = `
       <script>
         alert('${successMessage}');
         window.location.href = 'http://127.0.0.1:5500/inventario-uaeh/html/movimiento.html';
       </script>
     `;
     // Enviar la respuesta con el script JavaScript de éxito
     res.send(successScript);
    } else {
      // Mensaje de éxito
     const successMessage = 'Datos insertados correctamente';
     // Script JavaScript para mostrar una ventana emergente con el mensaje de éxito y luego redirigir a otra página
     const successScript = `
       <script>
         alert('${successMessage}');
         window.location.href = 'http://127.0.0.1:5500/inventario-uaeh/html/movimiento.html';
       </script>
     `;
     // Enviar la respuesta con el script JavaScript de éxito
     res.send(successScript);
    }
  });
});
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Route to fetch and display information about buildings
app.get('/edificios', (req, res) => {
  // Prepare SQL query to fetch building information
  const sql = `SELECT * FROM edificio`;

  connection.query(sql, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error fetching data from database');
    } else {
      // Construct HTML table to display building information
      let tableHtml = `
        <table border="1">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dirección</th>
          </tr>`;

      // Loop through each row in the results and add to the table
      results.forEach((row) => {
        tableHtml += `
          <tr>
            <td>${row.id_edificio}</td>
            <td>${row.nombre}</td>
            <td>${row.direccion}</td>
          </tr>`;
      });

      // Close the table HTML
      tableHtml += `</table>`;

      // Send the HTML response
      res.send(tableHtml);
    }
  });
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// inicie el servidor
app.listen(port, () => {
  console.log(`Host jalando al 100 en el puerto ${port}`);
});
