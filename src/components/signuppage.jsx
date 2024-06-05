import { useState } from 'react';

import { getApiLink, saveKey, USER_IDENTIFIER_KEY } from '../utils/helper_functions';

import Notifier from './notifier';
import { useNavigate } from 'react-router';

import axios from 'axios';

const Signup=()=>{

    const navigate = useNavigate()

    const [email , setEmail]=useState('');
    const [username , setUsername]=useState('');
    const [lname , setLname]=useState('');
    const [password,setPassword]=useState('');
    const [cpassword,setCPassword]=useState('');

    const [notification,setShowNotification] = useState({
      show: false,
      message: null,
      type: null,
    })

    const showNotification = (notification) => {
      setShowNotification(notification)
      setTimeout(()=>{
        setShowNotification({
          show: false,
          message: null,
          type: null,
        })
      },2000)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handleFirstnameChange = (e) => {
        setUsername(e.target.value);
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
    
      const handleLogin = async(e) => {
        e.preventDefault(); 
        console.log(`your username: ${username} and lastname :${lname} password: ${password}  cpassword: ${cpassword}`);

        const data = {
          email: email,
          username: username,
          name: lname,
          password: password,
        }

        try {
          const signup_url = getApiLink() + '/api/create_account'
          const response = await axios.post(signup_url,data)
          saveKey(USER_IDENTIFIER_KEY, response.data.token)
          navigate('/workspace')

        }
        catch(error){
          console.log(error)
          showNotification({
            type: 'error',
            message: error.message,
            show: true
          })
        }
        


        // Reset form fields after login attempt
        // setUsername('');
        // setLname('');
        // setPassword('');
        // setCPassword('');
    };

    return(
      <div className='flex center'>
        <div className='content-box'>
          {/* <div className='flex left' id='brand-icon'>
              <img src={logo} alt="My Icon" />      
          </div> */}
          <form onSubmit={handleLogin} className='submitform flex column'>
        {/* Username Input */}
            
            <a href="/" className='smalltext link'>Go back to sign in</a>
            
            <h2>Codeketch</h2>
            <h3>Sign up</h3>
            {
              notification.show && <Notifier type={notification.type} message={notification.message}/>
            }
            <input
              className='input-box poppins-light'
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />

            <input
              className='input-box poppins-light'
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleFirstnameChange}
              />  

            
              
            <input
                className='input-box poppins-light'
                type="text"
                placeholder="Name"
                value={lname}
                onChange={handleLastnameChange}
                />
            
            

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
