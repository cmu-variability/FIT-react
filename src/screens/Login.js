import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'; // Assuming you have a separate CSS file

const Login = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    navigate('/pre-room'); // Replace '/pre-room' with the path of your route
    // e.preventDefault();
    console.log(username, password);
    // connectToFirebase(username, password); // Assuming you have a function for Firebase connection
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
