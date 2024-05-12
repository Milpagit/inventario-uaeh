 // Realizar una solicitud GET al servidor para obtener la tabla de edificios
    fetch('http://localhost:3000/edificios')
      .then(response => response.text())
      .then(data => {
        // Insertar la tabla de edificios en el div con id "tabla-edificios"
        document.getElementById('tabla-edificios').innerHTML = data;
      })
      .catch(error => console.error('Error:', error));
