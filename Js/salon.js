function getEdificioSuggestions() {
    var inputText = document.getElementById('NE').value;
    var suggestionsDiv = document.getElementById('suggestions');
  
    // Enviar la solicitud al servidor solo si el campo tiene contenido
    if (inputText.trim() !== '') {
      fetch('http://localhost:3000/getEdificioSuggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: inputText })
      })
      .then(response => response.json())
      .then(data => {
        // Limpiar el div de sugerencias antes de mostrar nuevas sugerencias
        suggestionsDiv.innerHTML = '';
        // Mostrar las sugerencias obtenidas del servidor
        data.forEach(suggestion => {
          var suggestionElement = document.createElement('div');
          suggestionElement.textContent = suggestion.nombre;
          suggestionElement.classList.add('suggestion');
          suggestionElement.addEventListener('click', function() {
            // Insertar la sugerencia seleccionada en el campo de texto
            document.getElementById('NE').value = suggestion.nombre;
            // Limpiar las sugerencias
            suggestionsDiv.innerHTML = '';
          });
          suggestionsDiv.appendChild(suggestionElement);
        });
      })
      .catch(error => console.error('Error fetching suggestions:', error));
    } else {
      // Si el campo está vacío, limpiar las sugerencias
      suggestionsDiv.innerHTML = '';
    }
  }
  