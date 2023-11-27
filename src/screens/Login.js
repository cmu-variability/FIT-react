// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkLoginCredentials } from '../firebaseConfig'; // adjust the import path as needed
import '../styles/login.css'; // Assuming you have a separate CSS file

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await checkLoginCredentials(username, password);
    if (result.valid) {
      console.log('Login successful. Group:', result.group);
      navigate('/pre-room'); // Replace '/pre-room' with the path of your route
    } else {
      console.log('Invalid username or password');
      // Handle invalid login, maybe show an error message
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-box-content">
          <p className="login-title">Login</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              name="username"
              className="login-input"
              placeholder="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="password"
              name="password"
              className="login-input"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
