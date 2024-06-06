import { useEffect, useState } from 'react'; 
import giticon from '../assets/github.svg';

import { useNavigate } from 'react-router';

import { getApiLink, saveKey, getValue, USER_IDENTIFIER_KEY} from '../utils/helper_functions'
import axios from 'axios'
import Notifier from './notifier';




const LoginForm = () => {
  const [user,setUser] = useState(null)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  axios.defaults.headers.common['Authorization'] = `Bearer ${getValue(USER_IDENTIFIER_KEY)}`

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

  const navigate = useNavigate()

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async(e) => {
    // Prevent form submission (default behavior)
    e.preventDefault(); 
    
    // Implement your login logic here (e.g., API call)
    console.log(`Logging in with username: ${username} and password: ${password}`);
    
    let login_post_url = getApiLink()+'/api/login'

    const data = {}

    if(username.includes('@')){
      data.email = username
    }
    else{
      data.username = username
    }
    data.password = password
    try{
      const response = await axios.post(login_post_url,data)
      saveKey(USER_IDENTIFIER_KEY,response.data.token)
      navigate('/workspace')
    }
    catch(error){
      console.log('in catch block')
      console.log(error)
      showNotification({
        type: 'error',
        message: error.response.data.message,
        show: true
      })
    }

    // Reset form fields after login attempt
    // setUsername('');
    setPassword('');
  };

  useEffect(()=>{
    const action_login = async() => {
      try{
        const loginUser = await axios.get(getApiLink()+'/api/login')
        console.log('signed in user',loginUser)
        setUser(loginUser)
        if(loginUser){
          navigate('/workspace')
        }
      }
      catch(error){
        console.log('not signed in')
      }
      
    }

    action_login()
    
  },[navigate]) 

  return (
    <div className='canvas flex center'>
      <div className='flex center'>
              <div className='content-box'>
                {/* <div className='flex left' id='brand-icon'>
                    <img src={logo} alt="My Icon" />      
                </div> */} 

                <form onSubmit={handleLogin} className='loginform flex column'>
                  {/* Username Input */}
                  <h2>Codeketch</h2>
                  <h3>Sign In</h3>
                  {
                    notification.show && <Notifier type={notification.type} message={notification.message}/>
                  }
                  <input
                    className='input-box poppins-light'
                    type="text"
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
                  <a href='#' className="smalltext link">Forgot Password</a>
                  {/* Forgot password*/}
                  <div className="flex">
                      <button className='button login poppins-medium'>Login</button>
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
                  <button className='button github poppins-medium flex center'> 
                    <img src={giticon} alt="Git" id='giticon' /> Login with GitHub
                  </button>
                </div>
                
            </div>
          </div>
    </div>
    
  );
};

export default LoginForm;
