import React, { Component } from "react";
import "../Styles/CCLogin.css";
import {withRouter} from 'react-router-dom'
import User from "../Objects/User";


class CCLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: "",
      errorMessage: "",
    };
  }



  


  getUsername = (e) => {
    this.setState({ usernameInput: e.target.value });
  };
  getPassword = (e) => {
    this.setState({ passwordInput: e.target.value });
  };


 handleLogin = async(e)=>{
  this.setState({errorMessage:""})
  e.preventDefault()
  User.signIn(this.state.usernameInput,this.state.passwordInput)?this.props.history.push('/projectmanager/userprojects'):this.setState({errorMessage:"Incorrect information"})
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
              <p>Username</p>
              <input
                type="text"
                placeholder="Username"
                onChange={this.getUsername}
              ></input>
              <p>Password</p>
              <input
                type="password"
                placeholder="Password"
                onChange={this.getPassword}
              ></input>
            </form>
            <button type="button" onClick={this.handleLogin}>Next</button>
            <h5 style={{color:"red",fontWeight:"bold",fontFamily:"poppins",marginTop:"3%"}}>{this.state.errorMessage}</h5>
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