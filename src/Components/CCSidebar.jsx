import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import '../Styles/CCSidebar.css'
import {withRouter} from 'react-router-dom'




class CCSidebar extends Component {
constructor(props)
{
  super(props);
  this.state = {
    selected:"My Projects"
  }
}


changeSelected = (tabName) =>{
this.setState({selected:tabName},() => {this.props.history.push(tabName)})

}




  render(props) {
    return (
      <nav id="sidebar">
      <div className="p-4 pt-5" id="sidebarTop">
      <div id="userInfo">
      <img className="img logo rounded-circle mb-3" src={window.location.origin + '/Avatars/1.svg'} width="100%" height="100%" alt=""/> 
      <p style={{fontWeight:"bold", fontSize:"25px"}}>username</p>
      <p style={{color:"goldenrod", fontSize:"20px"}}>status</p>     
      </div>
        <ul className="list-unstyled components mb-5">
          <li onClick={e => this.changeSelected("/projectmanager/userprojects")} className={this.state.selected === "/projectmanager/userprojects"?"active":null}>
            <a>My Projects</a>
          </li>
          <li onClick={e => this.changeSelected("/projectmanager/administrator")} className={this.state.selected === "/projectmanager/administrator"?"active":null}>  
            {true?<a style={{color:'goldenrod'}}>Project Management</a> : null} {/*if the user is an admin render it*/}
          </li>
          <li onClick={e => this.changeSelected("/projectmanager/chat")} className={this.state.selected === "/projectmanager/chat"?"active":null}>
            <a>Chat</a>
          </li>
          <li onClick={e => this.changeSelected("/projectmanager/profiles")} className={this.state.selected === "/projectmanager/profiles"?"active":null}>
            <a>Profile Page</a>
          </li>
          <li onClick={e => this.changeSelected("/projectmanager/settings")} className={this.state.selected === "/projectmanager/settings"?"active":null}>
            <a>Account Settings</a>
          </li>
        </ul>
        <div id="sidebarBottom"><Button onClick={this.handleLogout} variant="contained" color="secondary" disableElevation style={{fontFamily:"poppins",fontWeight:"bold"}}>Signout</Button></div>
      </div>
    </nav>
    )
  }
}

export default withRouter(CCSidebar)