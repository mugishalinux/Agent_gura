import React from "react";
import "./index.css";
import balanse from "./balanse-logo.png";
import { useNavigate } from 'react-router-dom';
const Index = () => {
  const navigate = useNavigate()
  const login = () => {
    navigate('/login')
  }
  return (

    <>
      <div className="banner-top">
      </div>
      <div className="index-logo-login-button">
        <div className="logo">
          <img src={balanse}></img>
        </div>
        <div className="btn">
          <button onClick={login}>Login</button>
        </div>
      </div>
      <div className="title-balanse">
        <h4>Balanse Payments Beyond Payments</h4>
      </div>
      <div className="content">
        <h4>Mission</h4>
        <p>To build an inclusive diverse eco-system of tech based<br></br>
          economical infrastructures that enables individuals<br></br>
          and organisations to be relevant in the global market. </p>
        <h4>Vision</h4>
        <p>To be the genuine leading payment company globally<br></br>
          that is reliable, trusted and predictable. </p>
        <h4>Vision</h4>
        <ul>
          <li>Respect</li>
          <li>Integrity</li>
          <li>Exellence</li>
        </ul>
        <h4>Contact Us</h4>
        <p>Email: balansepayments@gmail.com</p>
        <p>Contact: +250788966437</p>
        <p>Instagram: @balanse_payments</p>
      </div>
      <div className="footer-index">
        <p>Copyright @ Balanse payments. Beyond Payments</p>
      </div>
    </>
  );
};

export default Index;