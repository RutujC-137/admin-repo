import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const response = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '400px' }}>
      <h1>🔐 Admin Panel</h1>
      <input 
        type="text" 
        placeholder="Username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <button onClick={handleLogin} style={{ padding: '10px 20px' }}>
        Login
      </button>
      {message && <p><strong>{message}</strong></p>}
      <p style={{ color: 'gray', fontSize: '12px' }}>
        Demo: username = admin, password = admin123
      </p>
    </div>
  );
}

export default App;
