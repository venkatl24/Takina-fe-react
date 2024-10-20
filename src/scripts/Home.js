import React, { Component } from "react";
import "../css/home.css";
import logo from "../images/logo.png";
// import landingPage from "../images/TS_landing_page.png"
export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <img src={landingPage} alt="home"/> */}
        <header className="Home-heading">
          <img src={logo} alt="Logo" className="logo" />
          <p className="title">TAKINA SPACE</p>
          <div className="menu">
            <p >PrivacyPolicy      Events    ContactUs</p>
          </div>
          <div>
            <button className="signin-button">Sign In</button>
            <button className="tryforfree-button">Try for Free</button>
          </div>
        </header>
        <section></section>
        <footer></footer>
      </div>
    );
  }
}
