
import './App.css'
import Loginpage from './components/loginpage'

import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Signup from './components/signuppage'
import Workspace from './components/workspace'
import VerifyEmail from './components/verifyemail'
import ServerDown from './components/serverdown'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Loginpage/>} exact />
        <Route  path='/signup' element={<Signup/>}/>
        <Route path='/workspace' element={<Workspace/>}/>
        <Route path='/server-down' element={<ServerDown/>}/>
      </Routes> 
    </Router>
  )
}

export default App
