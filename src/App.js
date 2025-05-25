import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [mensaje, setMensaje] = useState('');

  const enviarAlerta = async () => {
    try {
      await axios.post('https://webhook.site', {
        mensaje: 'Botón de pánico activado desde el barrio San Francisco',
        ubicacion: 'Bogotá, San Francisco'
      });
      setMensaje('Alerta enviada con éxito');
    } catch (error) {
      setMensaje('Error al enviar la alerta');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Botón de Pánico Comunitario</h1>
      <button
        onClick={enviarAlerta}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Enviar Alerta
      </button>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;
