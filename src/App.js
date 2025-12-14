import React, { useState } from 'react';
import Login from './components/Login';
import PanicButton from './components/PanicButton';
import './App.css';

function App() {
  const [correo, setCorreo] = useState(null);

  return (
    <div className="app-container">
      {!correo ? (
        <Login onLogin={setCorreo} />
      ) : (
        <PanicButton
          email={correo}
          onLogout={() => setCorreo(null)}
        />
      )}
    </div>
  );
}

export default App;
