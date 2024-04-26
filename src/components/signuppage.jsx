import React, { useState } from 'react';



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

        <form onSubmit={handleLogin} className='flex column'>
        {/* Username Input */}
        
        <input
            className='input-box'
          type="email"
          placeholder="Email@gmail.com"
          value={email}
          onChange={handleEmailChange}
        />

        <input
            className='input-box'
            type="Firstname"
            placeholder="First name"
            value={fname}
            onChange={handleFirstnameChange}
            />
        <input
            className='input-box'
            type="Lastname"
            placeholder="Last name"
            value={lname}
            onChange={handleLastnameChange}
            />

        {/* Password Input */}
        <input
          className='input-box'
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        <input
          className='input-box'
          type="password"
          placeholder="Confirm Password"
          value={cpassword}
          onChange={handleConfirmPasswordChange}
        />

        </form>
    );

} ;

export default Signup;