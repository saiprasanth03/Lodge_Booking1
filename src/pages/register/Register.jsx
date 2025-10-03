

import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  // Load saved credentials on component mount
  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (savedUsername && savedPassword) {
      setUsername(savedUsername);
      setPassword(savedPassword);
      setRemember(true);
    }
  }, []);

  const handleRegister = () => {
    // ✅ Validate username and password
    if (username.trim() === '' || password.trim() === '') {
      alert("⚠️ Username and Password are required!");
      return;
    }

    // ✅ Save credentials if 'Remember Me' is checked
    if (remember) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert('Registered successfully!');
    navigate('/register/login'); // ✅ Navigate only after validation
  };

  return (
    <div>
      <div className="container">
        <h1>Register</h1>

        <input
          className="indian"
          type="text"
          placeholder="Username"
          name="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br />

        <input
          className="indian"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />

        <div id="in">
          <input
            className="india"
            type="checkbox"
            value="verify"
            id="remember"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label htmlFor="remember" className="india" style={{ marginRight: '110px' }}>
            Remember Me
          </label>
        </div>

        <button className='registerBtn' onClick={handleRegister}>
          Register
        </button><br />
      </div>
    </div>
  );
};

export default Register;
