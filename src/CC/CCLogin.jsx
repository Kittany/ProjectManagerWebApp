import React, { Component } from 'react'
import '../style.css'
import fire from '../config/fire';

export default class CCLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            passwordInput: '',
            warningMessage: ''
        }
    }
    getUsername = (e) => { this.setState({ user: e.target.value }) }
    getUserPassword = (e) => { this.setState({ passwordInput: e.target.value }) }




    btnLogin = () => {
        let user = this.state.user;
        let password = this.state.passwordInput;

        fire.auth().signInWithEmailAndPassword(user, password).then(u => console.log("Good")).catch((err) => console.log("Error") + err.toString())
    }

    render() {
        return (
            <div id="CCLogin">
                <div className="loginDivChild">
                    <div id="childOne"><div><img width="50px" src="ProjectManagerLogo.png"></img><p>&nbsp; Project Manager</p></div><h1>Welcome back</h1></div>
                    <div id="childTwo">
                        <form>
                            <p>Email</p>
                            <input type="text" placeholder="Username" onChange={this.getUsername}></input>
                            <p>Password</p>
                            <input type="password" placeholder="Password" onChange={this.getUserPassword}></input>
                        </form>
                        <button onClick={this.btnLogin}>Next</button>
                    </div>
                </div>
                <div className="loginDivChild"><img width="100%" height="40%" src="loginPageImage.png"></img></div>
            </div>
        )
    }
}

