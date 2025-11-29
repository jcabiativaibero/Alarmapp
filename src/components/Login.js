import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      onLogin(email);
    }
  };

  return (
    <div className="card">
      <h2 className="title">Ingreso</h2>
      <p className="subtitle">Ingrese su correo electrónico para activar el botón de pánico</p>

      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button className="btn" type="submit">
          Continuar
        </button>
      </form>
    </div>
  );
}

export default Login;
