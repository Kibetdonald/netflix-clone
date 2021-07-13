import React from 'react';
import './style.css';
import { Form } from 'react-bootstrap';
import FloatingLabel from "react-bootstrap-floating-label";
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'
/**
* @author
* @function Login
**/

const Login = (props) => {
  return (
    <div >
      <img className="backgroundImage" src="./assets/images/background.jpg" alt="background" />
      <div className="navbar" >
      
      <Link to="/">  <img src="./assets/images/NetFlixLogo.png" alt="logo"/></Link>
        <button className="btn bt-danger">SIGN IN</button>
      </div>
      <div className="loginDiv">
        <div className="loginContainer">
          <h3>Sign In</h3>
          <br/>
          <>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <br /><br />
           <Link to="/user"> <button style={{ width: "100%", backgroundColor: "red" }} className="btn btn-danger">
              Sign In
            </button></Link>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
              <label className="help">Need help?</label>
            </div>
            <br />

            <label className="fainttext">
              <SocialIcon network="facebook" style={{ height: 25, width: 25 }} />
              &nbsp; Login with Facebook
            </label>

            <div className="register">
              <p>New to Netflix? </p>
              &nbsp;
              <Link to="/Signup">Sign up now.</Link>
            </div>

            <div className="lastText">
              <p className="fainttext">
                This page is protected by Google reCAPTCHA to ensure you're not a bot.
              </p>

            
            </div>
          </>
        </div>

      </div>

      <footer className="loginFooter">
        <div className="footer">
          <Row>

            <Col>
              <ul>
                <li>FAQ</li>
                <li>Cookie Preferences</li>
             
              </ul>
            </Col>
            <Col>
              <ul>
                <li>Help Center</li>
                <li>Corporate Information</li>
              
              </ul>
            </Col>
            <Col>
              <ul>
                <li>Terms of Use</li>
                
              </ul>
            </Col>
            <Col>
              <ul>
                <li>Privacy</li>
               
              </ul>
            </Col>
          </Row>

        </div>
      </footer>
    </div>
  )

}

export default Login