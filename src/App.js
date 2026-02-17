import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';
  const ENV = process.env.REACT_APP_ENV || 'development';

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setIsSuccess(false);
    
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      
      const data = await response.json();
      setMessage(data.message);
      setIsSuccess(data.success);
      
      if (data.success) {
        setTimeout(() => {
          setUsername('');
          setPassword('');
          setMessage('');
        }, 3000);
      }
    } catch (error) {
      setMessage('Failed to connect to backend');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-app">
      {/* Background Elements */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Main Container */}
      <div className="admin-container">
        
        {/* Left Side - Branding */}
        <div className="admin-left">
          <div className="brand-section">
            <div className="brand-logo">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <rect width="60" height="60" rx="12" fill="white" opacity="0.1" />
                <path d="M30 15L45 37.5H15L30 15Z" fill="white" />
                <circle cx="30" cy="42" r="3" fill="white" />
              </svg>
            </div>
            <h1>Admin Portal</h1>
            <p>Secure access to your DevOps dashboard</p>
          </div>

          <div className="features">
            <div className="feature">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <div>
                <h3>Secure Authentication</h3>
                <p>Enterprise-grade security</p>
              </div>
            </div>
            <div className="feature">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
              <div>
                <h3>Real-time Monitoring</h3>
                <p>Track system performance</p>
              </div>
            </div>
            <div className="feature">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
              <div>
                <h3>Cloud Infrastructure</h3>
                <p>AWS-powered deployment</p>
              </div>
            </div>
          </div>

          <div className="env-info">
            <span className="env-label">Environment</span>
            <span className={`env-value ${ENV}`}>{ENV}</span>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="admin-right">
          <div className="login-card">
            <div className="login-header">
              <h2>Welcome Back</h2>
              <p>Enter your credentials to access the admin panel</p>
            </div>

            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <div className="input-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <button type="submit" className="login-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="btn-spinner"></span>
                    Authenticating...
                  </>
                ) : (
                  <>
                    Sign In
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {message && (
              <div className={`message ${isSuccess ? 'success' : 'error'}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {isSuccess ? (
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  ) : (
                    <circle cx="12" cy="12" r="10" />
                  )}
                  {isSuccess ? (
                    <polyline points="22 4 12 14.01 9 11.01" />
                  ) : (
                    <>
                      <line x1="15" y1="9" x2="9" y2="15" />
                      <line x1="9" y1="9" x2="15" y2="15" />
                    </>
                  )}
                </svg>
                {message}
              </div>
            )}

            <div className="demo-credentials">
              <p className="demo-label">Demo Credentials</p>
              <div className="demo-info">
                <span><strong>Username:</strong> admin</span>
                <span><strong>Password:</strong> admin123</span>
              </div>
            </div>
          </div>

          <div className="api-info">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <span>Connected to: {API_URL}</span>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="admin-footer">
        <p>© 2025 DevOps Admin Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
