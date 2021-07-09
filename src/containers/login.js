import React from 'react';
import './style.css';

/**
* @author
* @function Login
**/

const Login = (props) => {
  return (
    <div >
      <img className="backgroundImage" src="./assets/images/background.jpg" alt="background" />
      <div className="navbar" >
        <h5>NETFLIX</h5>
        <button className="btn bt-danger">SIGN IN</button>
      </div>
      <div className="loginDiv">
        <h3>Login</h3>
        <form>
          <label>
            <input type="text" className="form-control"></input>
          </label>
          <label>
            <input type="password" className="form-control"></input>
          </label>
          <button className="btn btn-danger">Sign In</button>
        </form>
      </div>

    </div>
  )

}

export default Login