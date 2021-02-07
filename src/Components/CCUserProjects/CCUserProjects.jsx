import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import '../../Styles/CCUserProjects.css'
import FCNav from './FCNav.jsx'
import CCNotes from './CCNotes'
import CCProjects from './CCProjects'



export default class CCUserProjects extends Component {
  constructor(props){
      super(props);
      this.state = {
          tabOpened:"Notes"
      }
  }

btnChangeTabs = (bool) =>{
    if (bool)
    this.setState({tabOpened:"Projects"})

    else 
    this.setState({tabOpened:"Notes"})

}

    render() {
        return (
            <div id="CCUserProjects">
                <div id="CCUserProjectsFirstChild">
                <FCNav btnChangeTabs={this.btnChangeTabs}/>
                {this.state.tabOpened === "Notes"?<Button id="CCUserProjectsFirstChildBtn" variant="contained" color="primary" disableElevation>Add note</Button>:null}
                </div>
                <div id="secondChild">
                    {this.state.tabOpened === "Notes"?<CCNotes user={this.props.user}/>:<CCProjects/>}
                </div>
            </div>
        )
    }
}


