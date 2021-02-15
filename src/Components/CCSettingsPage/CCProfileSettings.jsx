import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import CCImageTab from './CCImageTab';


export default class CCProfileSettings extends Component {

    constructor(props)
    {
      super(props);

      this.state = {
        imageTab:false,
        imageSelected:this.props.tempAccountSettings.avatar

      }
    }


    selectImage = (dataFromChild) =>{
        if (dataFromChild == null) //If the user clicks outside the box, we will send the value of null through the function we passed
        {
            this.setState({imageTab:false})
            return;
        }
 


        this.props.setTempAccountSettings(prevState => ({...prevState,avatar:dataFromChild.target.src}))
        this.setState({imageSelected:dataFromChild.target.src,imageTab:false}) 

 
    }


    openImageTab = () =>{
    this.setState({imageTab: true});
    }

  
    render() {
        return (
            <div id="CCProfileSettings">
                {this.state.imageTab && <CCImageTab selectImage={this.selectImage} imageSelected={this.state.imageSelected}/> }

                <div id="CCProfileSettingsFirstChild" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <img onClick={this.openImageTab} src={this.props.tempAccountSettings.avatar} with="50%" height="50%" alt="" style={{cursor:"pointer"}}/>
                  <p style={{fontSize:30, userSelect:"none"}}>Click on the image to change your avatar</p>
                  </div>
                <div id="CCProfileSettingsSecondChild">
                <h5>Profile Settings</h5>
                <Form id="form">
                <Form.Row className="row">
                <Form.Group as="Col" controlId="role" style={{width:"40%"}}>
                    <Form.Label>Role</Form.Label>
                    <Form.Control onChange={e => this.props.setTempAccountSettings(prevState => ({...prevState,role:e.target.value}))} as="select" defaultValue={this.props.tempAccountSettings.role}>
                    <option>Fullstack</option>
                    <option>Backend</option>
                    <option>Design</option>
                    <option>Database Manager</option>
                    <option>Quality Assurance</option>
                    </Form.Control>
                  </Form.Group>
               </Form.Row>
                  <Form.Row className="row">
                  <Form.Group as="Col" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={e => this.props.setTempAccountSettings(prevState => ({...prevState,firstName:e.target.value}))} type="text" placeholder="First Name" value={this.props.tempAccountSettings.firstName}/>
                  </Form.Group>
                  <Form.Group as="Col" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={e => this.props.setTempAccountSettings(prevState => ({...prevState,lastName:e.target.value}))} type="text" placeholder="Last Name" value={this.props.tempAccountSettings.lastName} />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="row">
                <Form.Group controlId="formGridAddress1" style={{width:"80%"}}>
                  <Form.Label>Address</Form.Label>
                  <Form.Control onChange={e => this.props.setTempAccountSettings(prevState => ({...prevState,address:e.target.value}))} placeholder="1234 Main St" value={this.props.tempAccountSettings.address}/>
                </Form.Group>
                </Form.Row>
                <Form.Row className="row">
                <Form.Group as="Col" controlId="formGridState" style={{width:"40%"}}>
                    <Form.Label>State</Form.Label>
                    <Form.Control onChange={e => this.props.setTempAccountSettings(prevState => ({...prevState,state:e.target.value}))} as="select" defaultValue={this.props.tempAccountSettings.state}>
                      {["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"].map(state => <option>{state}</option>)}
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row className="row">
                <Form.Label style={{color:"red",fontWeight:"bold",fontFamily:"poppins",fontSize:"20px",marginTop:"3%"}}>{this.props.profilePageErrorMessage}</Form.Label>
                </Form.Row>
               <Form.Row className="row">
               </Form.Row>
              </Form>

                </div>
            </div>
        )
    }
}
