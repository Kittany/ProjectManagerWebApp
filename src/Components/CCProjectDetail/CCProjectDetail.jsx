import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import '../../Styles/CCProjectDetail.css'
import FCNav from './FCNav.jsx'
import CCNotes from './CCNotes.jsx'
import FCProjects from './FCProjects.jsx'



export default class CCProjectDetail extends Component {
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
//CCUserProjects
    render() {
        return (
            <div id="CCProjectDetail">
                <div id="CCProjectDetailFirstChild">
                <FCNav btnChangeTabs={this.btnChangeTabs}/>
                {this.state.tabOpened === "Notes"?<Button id="CCUserProjectsFirstChildBtn" variant="contained" color="primary" disableElevation>Add note</Button>:null}
                </div>
                <div id="CCProjectDetailSecondChild">
                    {this.state.tabOpened === "Notes"?<CCNotes user={this.props.user}/>:<FCProjects/>}
                </div>
            </div>
        )
    }
}


