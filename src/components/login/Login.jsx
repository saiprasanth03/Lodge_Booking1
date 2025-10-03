import React from 'react';
import './login.css';

const Login = () => {
  return (
    <>
      <div id="hey"> 
        <h1>LOGIN</h1>

        <input
          className="india"
          type="text"
          placeholder="Username"
          name="Username"
        />
        <br />

        <input
          className="india"
          type="password"
          placeholder="Password"
          name="password"
        />
        <br />

        <button className="login">Login</button>
        <br />

        <a href="#" id="pass">FORGOT PASSWORD?</a>

        <div id="new">
          <a href="#" style={{ color: 'black' }}>CREATE AN ACCOUNT</a>
        </div>
      </div>
    </>
  );
};

export default Login;
