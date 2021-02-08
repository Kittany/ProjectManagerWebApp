import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class CCAccountSecurity extends Component {
    
    render() {
        return (
            <div id="CCAccountSecurity">
                <h5>Account Security</h5>
                 <Form id="form">
                 <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Confirm Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Row  style={{width:"99%", marginLeft:"0.5%"}}>
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                <Form.Text id="passwordHelpBlock" muted style={{marginBottom:"2%"}}>
                    Your password must be 8-20 characters long, contain letters and numbers, and
                    must not contain spaces, special characters, or emoji.
                </Form.Text>
               </Form.Row>
               <Form.Row  style={{width:"99%", marginLeft:"0.5%"}}>
                <Form.Label htmlFor="inputPassword5">Confirm Password</Form.Label>
                <Form.Control
                    type="confirmPassword"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                <Form.Row  style={{width:"99%", marginLeft:"0.5%", display:"flex",justifyContent:"center",alignItems:"center",marginTop:"5%"}}>
                <Form.Group as="Col" controlId="formGridZip">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control />
                </Form.Group>
                </Form.Row>
                <Form.Row className="row">
                <Button variant="primary" type="submit" style={{marginTop:"3%"}}>
                  Confirm Changes
                </Button>
               </Form.Row>


               </Form.Row>
              </Form>
            </div>
        )
    }
}
