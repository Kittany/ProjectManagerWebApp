import React, { Component } from "react";
import "../Styles/CCLogin.css";
import fire from "../FireBase/firebase";
import "firebase/auth"
import CCSidebar from "./CCSidebar";
export default class CCLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: "",
      passwordInput: "",
      error: "",
      user: "",
    };
  }

  componentDidMount = () => {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) this.setState({ user });
      else {
        this.setState({ user: null });
      }
    });
  };

  btnLogin = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(
        this.state.emailInput,
        this.state.passwordInput
      )
      .then((u) => {
        alert("YES")
      })
      .catch((error) => {
        console.log("NO");
      });

  };

  getEmailAdress = (e) => {
    this.setState({ emailInput: e.target.value });
    console.log(this.state.elem);
  };
  getPassword = (e) => {
    this.setState({ passwordInput: e.target.value });
  };

  render() {
    return (
      <div id="CCLogin">
        {/* {this.state.emailInput ? (<CCSidebar/>) : (<CCLogin/>)} */}
        <div className="loginDivChild">
          <div id="childOne">
            <div>
              <img width="50px" src="ProjectManagerLogo.png" alt=""></img>
              <p>&nbsp; Project Manager</p>
            </div>
            <h1>Welcome back</h1>
          </div>
          <div id="childTwo">
            <form>
              <p>Email Address</p>
              <input
                type="text"
                placeholder="Username"
                onChange={this.getEmailAdress}
              ></input>
              <p>Password</p>
              <input
                type="password"
                placeholder="Password"
                onChange={this.getPassword}
              ></input>
            </form>
            <button type="submit" onClick={this.btnLogin}>Next</button>
          </div>
        </div>
        <div className="loginDivChild">
          <img width="100%" height="40%" src="loginPageImage.png" alt=""></img>
        </div>
      </div>
    );
  }
}
