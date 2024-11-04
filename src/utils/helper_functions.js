import axios from 'axios';
import { setNotificationMessage } from '../reducers/notification_reducer';

const getApiLink = () => {
  let api_link = 'http://localhost:3001';
  // let api_link = 'https://codeketch-backend.onrender.com'
  return api_link;
};

const saveKey = (key, value) => {
  window.localStorage.setItem(key, value);
};

const getValue = (key) => {
  return window.localStorage.getItem(key);
};

const USER_IDENTIFIER_KEY = 'codeketch_token';

const getAxiosInstance = (token=null) => {
  if(!token){
    token = getValue(USER_IDENTIFIER_KEY)
  }
  const axiosInstance = axios.create({
    baseURL: getApiLink(),
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return axiosInstance
} 


const action_login = async () => {
  try {
    const response = await getAxiosInstance().get('/api/login');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const action_logout = () => {
  localStorage.clear()
}

const getCredentials = (loginData) => {
  let credentials = null;
  if ('email_or_username' in loginData && 'password' in loginData) {
    credentials = {};
    if (loginData.email_or_username.includes('@')) {
      credentials.email = loginData.email_or_username;
    } else {
      credentials.username = loginData.email_or_username;
    }
    credentials.password = loginData.password;
  }
  return credentials;
};


const notify = (dispatch,message) => {
  dispatch(setNotificationMessage({
    message
  }))
}

export {
  getApiLink,
  saveKey,
  getValue,
  action_login,
  getAxiosInstance,
  getCredentials,
  notify,
  action_logout,
  USER_IDENTIFIER_KEY
};
