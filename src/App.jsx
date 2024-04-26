
import './App.css'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Loginpage from './components/loginpage'
// import Signup from './components/signuppage'

function App() {

  return (
    <>
    <Loginpage/>
       {/* <Router>
      <div>
        <Route exact path="/" component={Loginpage} />
        <Route path="/signup" component={Signup} />
        </div>
    </Router> */}
    </>
  )
}

export default App
