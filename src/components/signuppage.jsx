import { getApiLink, notify, saveKey, getAxiosInstance,USER_IDENTIFIER_KEY } from '../utils/helper_functions';

import { useNavigate } from 'react-router';

import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { set } from '../reducers/account_reducer'
import AppHeader from './app_header';

const Signup=()=>{

    const navigate = useNavigate()

    const userData = useSelector(state=>state.user)
    const userDispatch = useDispatch()

    const handleLogin = async(e) => {
      e.preventDefault(); 
      
      if(userData.password!=userData.cpassword){
        notify(useDispatch,'Password not matching')
      }
      else{

        try {
          const response = await getAxiosInstance().post('/api/create_account',userData)
          saveKey(USER_IDENTIFIER_KEY, response.data.token)
          navigate('/home')

        }
        catch(error){
          console.log(error)
          if('message' in error.response.data){
            notify(userDispatch,error.response.data.message)
          }
          else if('errors' in error.response.data){
              notify(userDispatch,error.response.data.errors[0].message)
          }
          
        }
      }

  };

    const handleFieldChange = (event) => {
      userDispatch(set({
        name: event.target.name,
        value: event.target.value
      }))
    }

    return(
      <>
      <AppHeader/>
      <div className='canvas flex center greybg'>
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
                    <input
                      className='poppins-light material-input'
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={userData.email}
                      onChange={handleFieldChange}
                    />

                    <input
                      className='poppins-light material-input'
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={userData.username}
                      onChange={handleFieldChange}
                      />  

                    
                      
                    <input
                        className='poppins-light material-input'
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={userData.lname}
                        onChange={handleFieldChange}
                        />
                    
                    

                    {/* Password Input */}
                    <input
                      className='poppins-light material-input'
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={userData.password}
                      onChange={handleFieldChange}
                    />

                    <input
                      className='poppins-light material-input'
                      type="password"
                      name="cpassword"
                      placeholder="Confirm Password"
                      value={userData.cpassword}
                      onChange={handleFieldChange}
                    />
                    <div className="flex">
                      <button className='button btn-dark poppins-medium flex center'>Create Account</button>
                    </div>
                    

                  </form>
                </div>
              </div>
      </div>
      </>
      
      

        
    );

} ;

export default Signup;
