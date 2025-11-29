import React, { useState } from 'react';
import Login from './components/Login';
import PanicButton from './components/PanicButton';

function App() {
  const [correo, setCorreo] = useState(null);

  return (
    <>
      {!correo ? (
        <Login onLogin={setCorreo} />
      ) : (
        <PanicButton email={correo} onLogout={() => setCorreo(null)} />
      )}
    </>
  );
}

export default App;
