import React, { Component } from 'react'
import '../Styles/CCLogin.css'



export default class CCLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div id="CCLogin">
                <div className="loginDivChild">
                    <div id="childOne"><div><img width="50px" src="ProjectManagerLogo.png" alt=""></img><p>&nbsp; Project Manager</p></div><h1>Welcome back</h1></div>
                    <div id="childTwo">
                        <form>
                            <p>Email Address</p>
                            <input type="text" placeholder="Username"></input>
                            <p>Password</p>
                            <input type="password" placeholder="Password"></input>
                        </form>
                        <button onClick={this.btnLogin}>Next</button>
                    </div>
                </div>
                <div className="loginDivChild"><img width="100%" height="40%" src="loginPageImage.png" alt=""></img></div>
            </div>
        )
    }
}

