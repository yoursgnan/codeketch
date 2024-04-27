import { useState } from 'react';

import logo from '../assets/icon.png';

const Signup=()=>{

    const [email , setEmail]=useState('');
    const [fname , setFname]=useState('');
    const [lname , setLname]=useState('');
    const [password,setPassword]=useState('');
    const [cpassword,setCPassword]=useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handleFirstnameChange = (e) => {
        setFname(e.target.value);
      };
    
      const handleLastnameChange = (e) => {
        setLname(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
      const handleConfirmPasswordChange = (e) => {
        setCPassword(e.target.value);
      };
    
      const handleLogin = (e) => {
        e.preventDefault(); 
        console.log(`your Firstname: ${fname} and lastname :${lname} password: ${password}  cpassword: ${cpassword}`);
    
        // Reset form fields after login attempt
        setFname('');
        setLname('');
        setPassword('');
        setCPassword('');
    };

    return(
      <div className='flex center'>
        <div className='content-box'>
          <div className='flex left' id='brand-icon'>
              <img src={logo} alt="My Icon" />      
          </div>
          <form onSubmit={handleLogin} className='submitform flex column'>
        {/* Username Input */}
            <h3>Signup</h3>
            <input
              className='input-box poppins-light'
              type="email"
              placeholder="Email@gmail.com"
              value={email}
              onChange={handleEmailChange}
            />

            <div className='flex row wrap'>
              <input
                  className='input-box poppins-light'
                  type="Firstname"
                  placeholder="First name"
                  value={fname}
                  onChange={handleFirstnameChange}
                  />
              <input
                  className='input-box poppins-light'
                  type="Lastname"
                  placeholder="Last name"
                  value={lname}
                  onChange={handleLastnameChange}
                  />
            </div>
            

            {/* Password Input */}
            <input
              className='input-box poppins-light'
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />

            <input
              className='input-box poppins-light'
              type="password"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={handleConfirmPasswordChange}
            />
            <div className="flex">
              <button className='button login poppins-medium'>Create Account</button>
            </div>
            

          </form>
        </div>
      </div>

        
    );

} ;

export default Signup;