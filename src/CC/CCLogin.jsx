import React, { Component, useRef, useState } from 'react';
import '../style.css';
import { AuthProvider } from '../contexts/AuthContext';

export default class CCLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailInput: "",
            passwordInput: "",
            error: "",

        }

    }
    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            this.setState({ error: "" })
            this.setState({ loading: true })
            await AuthProvider.login(this.state.emailInput, this.state.passwordInput)
            console.log("working");
        } catch {
            console.log("not");
        }
    }

    getEmailAdress = (e) => { this.setState({ emailInput: e.target.value }) }
    getPassword = (e) => { this.setState({ passwordInput: e.target.value }) }

    render() {
        return (
            <div id="CCLogin">
                <div className="loginDivChild">
                    <div id="childOne"><div><img width="50px" src="ProjectManagerLogo.png" alt=""></img><p>&nbsp; Project Manager</p></div><h1>Welcome back</h1></div>
                    <div id="childTwo">
                        <form onSubmit={this.handleSubmit}>
                            <p>Email Address</p>
                            <input type="text" placeholder="Username" onChange={this.getEmailAdress} ></input>
                            <p>Password</p>
                            <input type="password" placeholder="Password" onChange={this.getPassword}></input>
                        </form>
                        <button type="submit">Next</button>
                    </div>
                </div>
                <div className="loginDivChild"><img width="100%" height="40%" src="loginPageImage.png" alt=""></img></div>
            </div>
        )
    }
}

