import React from 'react';
import './PanicButton.css';

function PanicButton({ email, onLogout }) {

  const handleAlert = () => {
    alert(`🚨 ¡Alerta enviada!\nUsuario: ${email}`);
  };

  return (
    <div className="container">
      <h1 className="heading">Botón de Pánico Comunitario</h1>
      <p className="text">Presiona el botón solo en caso de emergencia</p>

      <button className="panicButton" onClick={handleAlert}>
        🚨 Enviar Alerta
      </button>

      <button className="logoutButton" onClick={onLogout}>
        Cerrar Sesión
      </button>
    </div>
  );
}

export default PanicButton;
