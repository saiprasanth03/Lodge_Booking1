
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // ✅ Manual validation for required fields
    if (username.trim() === '' || password.trim() === '') {
      alert("⚠️ Username and Password are required!");
      return;
    }

    // ✅ If both are filled, navigate
    navigate('/register/login/home2');
  };

  return (
    <div id="hey"> 
      <h1>LOGIN</h1>

      <input
        className="india"
        type="text"
        placeholder="Username"
        name="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <br />

      <input
        className="india"
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />

      <button className="login" onClick={handleLogin}>
        Login
      </button>
      <br />

      <a href="#" id="pass">FORGOT PASSWORD?</a>
    </div>
  );
};

export default Login;
