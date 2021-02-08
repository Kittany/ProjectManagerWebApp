import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import '../../Styles/CCAdminPage.css'
import FCNav from './FCNav.jsx'
import CCUsers from './CCUsers.jsx'
import FCProjects from './FCProjects.jsx'



export default class CCAdminPage extends Component {
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
                <div id="CCAdminPageFirstChild">
                <FCNav btnChangeTabs={this.btnChangeTabs}/>
                {this.state.tabOpened === "Users"?
                <Button id="CCAdminPageFirstChildBtn" variant="contained" color="primary" disableElevation>Create Account</Button>:
                <Button id="CCAdminPageFirstChildBtn" variant="contained" color="primary" disableElevation>Start A Project</Button>}
                </div>
                <div id="CCAdminPageSecondChild">
                    {this.state.tabOpened === "Users"?<CCUsers users={this.props.users}/>:
                    <div id="ManageProjectsTab">
                        <div id="adminStatics">Static diagram should be here</div>
                        <FCProjects/>
                        </div>}
                </div>
            </div>
        )
    }
}


