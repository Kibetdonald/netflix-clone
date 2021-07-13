import React from 'react'
import LandingPage from './containers/landing_page'
import Login from './containers/login'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router"
import { User } from './containers/user';
import { Netflixshows } from './containers/netflixshows';


require('dotenv').config()
/**
* @author
* @function App
**/

const App = (props) => {
  return (
    <div className="App">
     
      <Router>
            <Switch>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/user" exact component={User}/>
          <Route path="/shows" exact component={Netflixshows}/>

        </Switch>
      </Router>
    </div>
  )

}

export default App