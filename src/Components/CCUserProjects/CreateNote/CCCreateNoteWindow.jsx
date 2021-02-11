import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

export default class CCCreateNoteWindow extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            titleInput:"",
            descreptionInput:"",
            date:new Date().toDateString()
        }
    }



changeTitleInput = (event) =>{
this.setState({titleInput:event.target.value})
}


changeDescreptionInput = (event) =>{
    this.setState({descreptionInput:event.target.value})
}

    render() {
        console.log(this.state.date);
        return (
            <div id="CCCreateNote" onClick={this.props.closeWindow}>
                <div id="CCCreateNoteChild">
                <h4 style={{color:"white",fontWeight:"bold",alignSelf:"center",marginTop:"5%"}}>Create Note</h4>
                <Form.Row className="row" style={{height:"20%",margin:0}}>
                <Form.Group controlId="formGridAddress1" style={{width:"80%", height:"20%"}}>
                  <Form.Label style={{color:"white", fontWeight:"bold", fontSize:"15px"}}>Title</Form.Label>
                  <Form.Control placeholder="Title" onChange={this.changeTitleInput} />
                </Form.Group>
                </Form.Row>
                  <Form.Label style={{color:"white", fontWeight:"bold", fontSize:"15px", width:"80%",marginLeft:"10%"}}>Descreption</Form.Label>
                  <textarea onChange={this.changeDescreptionInput} style={{width:"80%",height:"40%",alignSelf:"center"}}></textarea>
         
               <Form.Row className="row" style={{width:"100%",height:"10%"}}>
                <Button onClick={e => this.props.sendNoteData(this.state)} variant="contained"  type="submit" style={{marginTop:"3%",color:"black",fontWeight:"bold",fontFamily:"poppins"}}>
                  Confirm Changes
                </Button>
               </Form.Row>
                </div>
                 </div>
        )
    }
}
