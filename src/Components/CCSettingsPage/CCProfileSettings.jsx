import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import CCImageTab from './CCImageTab';


export default class CCProfileSettings extends Component {

    constructor(props)
    {
      super(props);

      this.state = {
        imageTab:false,
        imageSelected:1 //change this to this.props.user.avatar

      }
    }


    selectImage = (dataFromChild) =>{
        if (dataFromChild == null) //If the user clicks outside the box, we will send the value of null through the function we passed
        {
            this.setState({imageTab:false})
            return;
        }
 


        this.setState({imageSelected:dataFromChild.target.name,imageTab:false}) 

 
    }


    openImageTab = () =>{
    this.setState({imageTab: true});
    }

  
    render() {
        return (
            <div id="CCProfileSettings">
                {this.state.imageTab && <CCImageTab selectImage={this.selectImage} imageSelected={this.state.imageSelected}/> }




                <div id="CCProfileSettingsFirstChild" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                  <img onClick={this.openImageTab} src={`Avatars/${this.state.imageSelected}.svg`} with="50%" height="50%" alt="" style={{cursor:"pointer"}}/>
                  <p style={{fontSize:30, userSelect:"none"}}>Click the image to change your avatar</p>
                  </div>
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
