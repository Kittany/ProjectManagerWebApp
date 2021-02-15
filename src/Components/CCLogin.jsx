import React, { Component } from "react";
import "../Styles/CCLogin.css";
import {withRouter} from 'react-router-dom'


class CCLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: "",
      passwordInput: "",
      error: "",
      user: "",
    };
  }



  


  getEmailAdress = (e) => {
    this.setState({ emailInput: e.target.value });
  };
  getPassword = (e) => {
    this.setState({ passwordInput: e.target.value });
  };


 handleLogin = async(e)=>{
  e.preventDefault()


}




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
            <button type="button" onClick={this.handleLogin}>Next</button>
          </div>
        </div>
        <div className="loginDivChild">
          <img width="100%" height="40%" src="loginPageImage.png" alt=""></img>
        </div>
      </div>
    );
  }
}


export default withRouter(CCLogin)