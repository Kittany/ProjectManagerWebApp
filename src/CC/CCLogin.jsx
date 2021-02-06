import React, { Component } from 'react'
import '../style.css'


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
                    <div id="childOne"><div><img width="50px" src="ProjectManagerLogo.png"></img><p>&nbsp; Project Manager</p></div><h1>Welcome back</h1></div>
                    <div id="childTwo">
                        <form>
                            <p>Email Address</p>
                            <input type="text" placeholder="Username" onChange={}></input>
                            <p>Password</p>
                            <input type="password" placeholder="Password" onChange={}></input>
                        </form>
                        <button onClick={this.btnLogin}>Next</button>
                    </div>
                </div>
                <div className="loginDivChild"><img width="100%" height="40%" src="loginPageImage.png"></img></div>
            </div>
        )
    }
}

