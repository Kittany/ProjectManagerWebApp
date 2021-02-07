import React, { Component } from 'react'
import '../Styles/CCSidebar.css'

export default class FCSidebar extends Component {
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

  render() {
    return (
      <nav id="sidebar">
      <div className="p-4 pt-5">
        <img className="img logo rounded-circle mb-5" style={{backgroundImage: 'url(KittyWithGlasses.jpg)'}} alt=""/> 
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
      </div>
    </nav>
    )
  }
}

