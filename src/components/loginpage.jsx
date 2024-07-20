import { useEffect, useState } from 'react'; 
import giticon from '../assets/github.svg';

import { useNavigate } from 'react-router';

import { saveKey, USER_IDENTIFIER_KEY, getCredentials} from '../utils/helper_functions'
import Notifier from './notifier';

import { set } from '../reducers/login_reducer';
import { useDispatch, useSelector } from 'react-redux';
import { setNotificationMessage } from '../reducers/notification_reducer';
import { getAxiosInstance } from '../utils/helper_functions';
import { notify } from '../utils/helper_functions';
import AppHeader from './app_header';
import {setToken} from '../reducers/token_reducer'



const LoginForm = () => {

  const loginData = useSelector(state=>state.login)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleLogin = async(e) => {
    // Prevent form submission (default behavior)
    e.preventDefault(); 
    
    try{
      const response = await getAxiosInstance().post('/api/login',getCredentials(loginData))
      saveKey(USER_IDENTIFIER_KEY,response.data.token)
      dispatch(setToken(response.data.token))
      navigate('/home')
    }
    catch(error){
      notify(dispatch,error.response.data.message)
    }

    dispatch(set({
      name: 'password',
      value: ''
    }));
    
    
  }

  const handleFieldChange = (event) => {
    dispatch(set({
      name: event.target.name,
      value: event.target.value
    }))
  }

  return (
    <>
    <AppHeader/>
    <div className='canvas flex center greybg'>
      
      <div className='flex center'>
              <div className='content-box'>
                {/* <div className='flex left' id='brand-icon'>
                    <img src={logo} alt="My Icon" />      
                </div> */} 

                <form onSubmit={handleLogin} className='loginform flex column'>
                  {/* Username Input */}
                  <h3>Welcome back</h3>
                  <h2>Sign In to Your Account</h2>
                  <input
                    className='poppins-light material-input'
                    type="text"
                    name="email_or_username"
                    placeholder="Email / Username"
                    value={loginData.email_or_username}
                    onChange={handleFieldChange}
                  />

                  {/* Password Input */}
                  <input
                    className='poppins-light material-input'
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleFieldChange}
                  />
                  <a href='#' className="smalltext link">Forgot Password</a>
                  {/* Forgot password*/}
                  <div className="flex">
                      <button className='button btn-dark poppins-medium flex center'>Login</button>
                  </div>
                  <div className='smalltext flex right'>
                      <p>Don`t have any account? <a href="/signup" className='link'>Create one</a></p>
                  </div>
                  <div className='flex row center seperation-line'>
                    <span id='line1'></span>
                    <span>or</span>
                    <span id='line1'></span>
                  </div>
                </form>
                <div className='flex'>
                  <button className='button btn-light poppins-medium flex center'> 
                    <img src={giticon} alt="Git" id='giticon' /> Login with GitHub
                  </button>
                </div>
                
            </div>
          </div>
    </div>
    </>
    
    
  );
};

export default LoginForm;
