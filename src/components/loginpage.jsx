import React, { useState } from 'react';
import logo from '../assets/icon.png';
import brand from '../assets/codeketch.png';
import git from '../assets/git.png';
import { Link } from 'react-router-dom';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission (default behavior)
    
    // Implement your login logic here (e.g., API call)
    console.log(`Logging in with username: ${username} and password: ${password}`);
    
    // Reset form fields after login attempt
    setUsername('');
    setPassword('');
  };

  return (
    <div className='flex center'>
        <div className='content-box'>
          <div className='flex left' id='brand-icon'>
              <img src={logo} alt="My Icon" />      
          </div>

          <form onSubmit={handleLogin} className='flex column'>
            {/* Username Input */}
            <h3>Sign In</h3>
            <input
                className='input-box poppins-light'
              type="email"
              placeholder="Email / Username"
              value={username}
              onChange={handleUsernameChange}
            />

            {/* Password Input */}
            <input
            className='input-box poppins-light'
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />

            {/* Forgot password*/}
            <div className="flex column">
                <a href='#' className="smalltext link">Forgot Password</a>
                <button className='button login poppins-medium'>Login</button>
              </div>
            <div className='smalltext flex right'>
                <p>Don't have any account? <a href="#" className='link'>Create one</a></p>
            </div>
            <div className='flex row center seperation-line'>
              <span id='line1'></span>
              <span>or</span>
              <span id='line1'></span>
            </div>
            <button className='button github flex center poppins-medium'> 
              <img src={git} alt="Git" id='giticon'/> Login with GitHub
            </button>

          </form>
     
      
      </div>
    </div>
  );
};

export default LoginForm;
