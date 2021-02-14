import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class CCAccountSecurity extends Component {
    
    render(props) {
        return (
            <div id="CCAccountSecurity">
                <h5>Account Security</h5>
                 <Form id="form">
                 <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>                  
                    <Form.Control onChange={e => this.props.setSecurityPageInput(prevState => ({...prevState,email:e.target.value}))} type="email" placeholder="Enter email" value={this.props.securityPageInput.email}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Confirm Email address</Form.Label>
                    <Form.Control onChange={e => this.props.setSecurityPageInput(prevState => ({...prevState,confirmEmail:e.target.value}))} type="email" placeholder="Confirm email" value={this.props.securityPageInput.confirmEmail}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Row  style={{width:"99%", marginLeft:"0.5%"}}>
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                onChange={e => this.props.setSecurityPageInput(prevState => ({...prevState,password:e.target.value}))}
                    type="password"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Password"
                    value={this.props.securityPageInput.password}
                />
                <Form.Text id="passwordHelpBlock" muted style={{marginBottom:"2%"}}>
                    Your password must be 8-20 characters long, contain letters and numbers, and
                    must not contain spaces, special characters, or emoji.
                </Form.Text>
               </Form.Row>
               <Form.Row  style={{width:"99%", marginLeft:"0.5%"}}>
                <Form.Label htmlFor="inputPassword5">Confirm Password</Form.Label>
                <Form.Control
                onChange={e => this.props.setSecurityPageInput(prevState => ({...prevState,confirmPassword:e.target.value}))}
                    aria-describedby="passwordHelpBlock"
                    placeholder="Confirm Password"
                    type="password"
                    value={this.props.securityPageInput.confirmPassword}
                />
                <Form.Row className="row">
               </Form.Row>
               <Form.Row className="row">
                <Form.Label style={{color:"red",fontWeight:"bold",fontFamily:"poppins",fontSize:"20px",marginTop:"3%"}}>{this.props.securityPageInput.errorMessage}</Form.Label>
                </Form.Row>
               </Form.Row>
              </Form>
            </div>
        )
    }
}
