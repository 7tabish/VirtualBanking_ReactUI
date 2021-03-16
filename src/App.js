import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Home from './pages';
import SigninPage from './pages/Signin';


function App() {

  
  return (

    // //wrap in Router because we are using Link from react router dom in navbar.js(NavbarElement.js)
    // //which need link inside Router
    <Router>
      <Switch>
    
     
        <Route path = '/' exact component={Home}/>
        <Route path = '/signin' exact component = {SigninPage}/>
      </Switch>
    
    </Router>
  );
}

export default App;
