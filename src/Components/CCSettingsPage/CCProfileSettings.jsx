import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class CCProfileSettings extends Component {
    render() {
        return (
            <div id="CCProfileSettings">
                <div id="CCProfileSettingsFirstChild">Upload a new photo should be here</div>
                <div id="CCProfileSettingsSecondChild">
                <h5>Profile Settings</h5>
                <Form id="form">
                <Form.Row className="row">
                <Form.Group as="Col" controlId="role" style={{width:"40%"}}>
                    <Form.Label>Role</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
               </Form.Row>
                  <Form.Row className="row">
                  <Form.Group as="Col" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                  </Form.Group>
                  <Form.Group as="Col" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="row">
                <Form.Group controlId="formGridAddress1" style={{width:"80%"}}>
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>
                </Form.Row>
                <Form.Row className="row">
                <Form.Group as="Col" controlId="formGridState" style={{width:"30%"}}>
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as="Col" controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group as="Col" controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>
               <Form.Row className="row">
                <Button variant="primary" type="submit" style={{marginTop:"3%"}}>
                  Confirm Changes
                </Button>
               </Form.Row>
              </Form>

                </div>
            </div>
        )
    }
}
