import './App.css';
import Loginpage from './components/loginpage';
import Signup from './components/signuppage';
import Main from './components/main';
import ServerDown from './components/serverdown';
import Notifier from './components/notifier';

import userReducer from './reducers/account_reducer';
import loginReducer from './reducers/login_reducer';
import notificationReducer from './reducers/notification_reducer';
import appUserReducer from './reducers/app_user_reducer';

import { configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import { action_login } from './utils/helper_functions';
import { login } from './reducers/app_user_reducer';

import { useEffect } from 'react';
import new_workspace_reducer from './reducers/workspace_reducer';
import workspaces_reducer from './reducers/workspaces_reducer';
import token_reducer from './reducers/token_reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    notification: notificationReducer,
    appuser: appUserReducer,
    newworkspace: new_workspace_reducer,
    workspaces: workspaces_reducer,
    usertoken: token_reducer

  }
});

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Notifier />
          <AppRoutes />
        </Router>
      </Provider>
    </>
  );
}

function AppRoutes() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await action_login();
        console.log('user got while login',user)
        dispatch(login(user));
        navigate('/home');
      } catch (error) {
        if (error.message === 'Network Error') {
          navigate('/server-down');
        }
      }
    };

    fetchUser();
  }, [dispatch, navigate]);

  return (
    <Routes>
      <Route path='/' element={<Loginpage />} exact />
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={<Main />} />
      <Route path='/server-down' element={<ServerDown />} />
    </Routes>
  );
}

export default App;
