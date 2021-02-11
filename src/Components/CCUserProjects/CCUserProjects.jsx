import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import '../../Styles/CCUserProjects.css'
import FCNav from './FCNav.jsx'
import CCNotes from './CCNotes.jsx'
import FCProjects from './FCProjects.jsx'
import FCManageProject from '../CCManageProject/FCManageProject.jsx'
import CCCreateNoteWindow from './CreateNote/CCCreateNoteWindow.jsx'

export default class CCUserProjects extends Component {
  constructor(props){
      super(props);
      this.state = {
          tabOpened:"Notes",
          createNoteIsOpen:false,
          notes:[] // this.props.user.notes, this array should begin with user notes by default (add it after you finish the database)
      }
  }

btnChangeTabs = (bool) =>{
    if (bool)
    this.setState({tabOpened:"Projects"})

    else 
    this.setState({tabOpened:"Notes"})

}


getNoteData = (datafromChild) =>{

if (datafromChild.descreptionInput.trim() != "" && datafromChild.titleInput.trim() != "")
    this.setState({notes:[...this.state.notes,datafromChild],createNoteIsOpen: false})
}



closeWindow = (event) => {
    
     if (event.target.id === "CCCreateNote")
    this.setState({createNoteIsOpen: false})

}


    render() {
        return (
            <div id="CCUserProjects">
               <FCManageProject/>
                {this.state.createNoteIsOpen && <CCCreateNoteWindow closeWindow={this.closeWindow} sendNoteData={this.getNoteData}/> }
                <div id="CCUserProjectsFirstChild">
                <FCNav btnChangeTabs={this.btnChangeTabs}/>
                {this.state.tabOpened === "Notes" && <Button onClick={e => this.setState({createNoteIsOpen:true})} id="CCUserProjectsFirstChildBtn" variant="contained" color="primary" disableElevation>Add note</Button>}</div>
                <div id="CCUserProjectsSecondChild">
                    {this.state.tabOpened === "Notes"?<CCNotes notes={this.state.notes}/>:<FCProjects/>}
                </div>
            </div>
        )
    }
}


