
import './App.css'
import Loginpage from './components/loginpage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/signuppage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/codeketch' element={<Loginpage/>}/>
        <Route path='/codeketch/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App
