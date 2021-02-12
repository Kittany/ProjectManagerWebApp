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
          manageProjectIsOpen:false,
          projectManagingAtTheMoment:"",
          notes:[], // this.props.user.notes, this array should begin with user notes by default (add it after you finish the database)
          userProjects:[
            {id:1111,name:"Skype",tasks:"15/19",openDate:"2020-05-30",deadline:"2021-10-20",users:[],descreption:"bla bla bla",status:true},
            {id:2222,name:"Facebook",tasks:"15/19",openDate:"2020-05-30",deadline:"2021-10-20",users:[],descreption:"bla bla bla",status:true},
            {id:3333,name:"Youtube",tasks:"15/19",openDate:"2020-05-30",deadline:"2021-10-20",users:[],descreption:"bla bla bla",status:false},
            {id:4444,name:"Google",tasks:"15/19",openDate:"2020-05-30",deadline:"2021-10-20",users:[],descreption:"bla bla bla",status:false}

          ] // change to this.props.user.projects
      
        }
  }

//Switch between the notes and the projects tab
btnChangeTabs = (bool) =>{
    if (bool)
    this.setState({tabOpened:"Projects"})

    else 
    this.setState({tabOpened:"Notes"})

}

//get input from user when he types in the note window
getNoteData = (datafromChild) =>{

if (datafromChild.descreptionInput.trim() != "" && datafromChild.titleInput.trim() != "")
    this.setState({notes:[...this.state.notes,datafromChild],createNoteIsOpen: false})
}


//if you click around the create note div it will close the window
closeNoteWindow = (event) => {
    
     if (event.target.id === "CCCreateNote")
    this.setState({createNoteIsOpen: false})
}


openProjectManagement = (project) =>{

this.setState({manageProjectIsOpen:true,projectManagingAtTheMoment:project})
}


closeProjectManageWindow = (event) =>{

    if (event.target.id === "FCManageProject")
    this.setState({manageProjectIsOpen: false})
}


    render() {
        return (
            <div id="CCUserProjects">
                 {this.state.manageProjectIsOpen && <FCManageProject closeProjectManageWindow={this.closeProjectManageWindow} projectManagingAtTheMoment = {this.state.projectManagingAtTheMoment} />}
                {this.state.createNoteIsOpen && <CCCreateNoteWindow closeNoteWindow={this.closeNoteWindow} sendNoteData={this.getNoteData}/> }
                <div id="CCUserProjectsFirstChild">
                <FCNav btnChangeTabs={this.btnChangeTabs}/>
                {this.state.tabOpened === "Notes" && <Button onClick={e => this.setState({createNoteIsOpen:true})} id="CCUserProjectsFirstChildBtn" variant="contained" color="primary" disableElevation>Add note</Button>}</div>
                <div id="CCUserProjectsSecondChild">
                    {this.state.tabOpened === "Notes"?<CCNotes notes={this.state.notes}/>:<FCProjects userProjects={this.state.userProjects} openProjectManagement={this.openProjectManagement}/>}
                </div>
            </div>
        )
    }
}


