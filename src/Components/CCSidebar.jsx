import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import '../Styles/CCSidebar.css'

export default class CCSidebar extends Component {
constructor(props)
{
  super(props);
  this.state = {
    selected:"My Projects"
  }
}


changeSelected = (tabName) =>{
this.setState({selected:tabName})
}

  render(props) {
    return (
      <nav id="sidebar">
      <div className="p-4 pt-5" id="sidebarTop">
      <div id="userInfo">
      <img className="img logo rounded-circle mb-3" src="Avatars/1.svg" width="100%" height="100%" alt=""/> 
      <p style={{fontWeight:"bold", fontSize:"25px"}}>username</p>
      <p style={{color:"goldenrod", fontSize:"20px"}}>status</p>     
      </div>
        <ul className="list-unstyled components mb-5">
          <li onClick={e => this.changeSelected("My Projects")} className={this.state.selected === "My Projects"?"active":null}>
            <a>My Projects</a>
          </li>
          <li onClick={e => this.changeSelected("Project Management")} className={this.state.selected === "Project Management"?"active":null}>  
            {true?<a style={{color:'goldenrod'}}>Project Management</a> : null} {/*if the user is an admin render it*/}
          </li>
          <li onClick={e => this.changeSelected("Chat")} className={this.state.selected === "Chat"?"active":null}>
            <a>Chat</a>
          </li>
          <li onClick={e => this.changeSelected("Profile Page")} className={this.state.selected === "Profile Page"?"active":null}>
            <a>Profile Page</a>
          </li>
          <li onClick={e => this.changeSelected("Account Settings")} className={this.state.selected === "Account Settings"?"active":null}>
            <a>Account Settings</a>
          </li>
        </ul>
        <div id="sidebarBottom"><Button  variant="contained" color="secondary" disableElevation style={{fontFamily:"poppins",fontWeight:"bold"}}>Signout</Button></div>
      </div>
    </nav>
    )
  }
}

