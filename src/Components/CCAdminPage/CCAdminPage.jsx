import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import '../../Styles/CCAdminPage.css'
import FCNav from './FCNav.jsx'
import CCUsers from './CCUsers.jsx'
import CCProjects from './CCProjects.jsx'



export default class CCUserProjects extends Component {
  constructor(props){
      super(props);
      this.state = {
          tabOpened:"Users"
      }
  }

btnChangeTabs = (bool) =>{
    if (bool)
    this.setState({tabOpened:"ManageProjects"})

    else 
    this.setState({tabOpened:"Users"})

}

    render() {
        return (
            <div id="CCAdminPage">
                <div id="firstChild">
                <FCNav btnChangeTabs={this.btnChangeTabs}/>
                {this.state.tabOpened === "Users"?
                <Button id="btn" variant="contained" color="primary" disableElevation>Create Account</Button>:
                <Button id="btn" variant="contained" color="primary" disableElevation>Start A Project</Button>}
                </div>
                <div id="secondChild">
                    {this.state.tabOpened === "Users"?<CCUsers users={this.props.users}/>:<CCProjects/>}
                </div>
            </div>
        )
    }
}


