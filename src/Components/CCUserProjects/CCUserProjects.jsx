import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import '../../Styles/CCUserProjects.css'
import FCNav from './FCNav.jsx'
import FCNotes from './FCNotes.jsx'
import FCProjects from './FCProjects.jsx'
import FCManageProject from '../CCManageProject/FCManageProject.jsx'
import CCCreateNoteWindow from './CreateNote/CCCreateNoteWindow.jsx'

export default class CCUserProjects extends Component {
  constructor(props){
      super(props);
      this.state = {
          tabOpened:"Notes",
          errorMessage:"",
          createNoteIsOpen:false,
          manageProjectIsOpen:false,
          projectManagingAtTheMoment:null,
         
          
          //useContext: (it will get all the projects for this specific user)
          //userProjects: allProjectsInDatabase.filter((project) => userInDatabase.projects.some((userProject) => project.name === userProject.name))
          userNotes:[], // this.props.user.notes, this array should begin with user notes by default (add it after you finish the database)
          userProjects:[
            {name:"Skype",openDate:"2020-05-30",deadline:"2021-10-20",users:[{username:"3bbod"},{username:"lolo"}],tasks:["task1"],notes:["note1"],descreption:"bla bla bla",status:true},
            {name:"Facebook",tasks:"15/19",openDate:"2020-05-30",deadline:"2021-10-20",users:[],descreption:"bla bla bla",status:true},
            {name:"Youtube",tasks:"15/19",openDate:"2020-05-30",deadline:"2021-10-20",users:[],descreption:"bla bla bla",status:false},
            {name:"Google",tasks:"15/19",openDate:"2020-05-30",deadline:"2021-10-20",users:[],descreption:"bla bla bla",status:false}

          ] 
      
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
   //reset error message when user clicks on button so it doesn't appear again when he tries to add another note
   this.setState({errorMessage:""})

if (this.state.userNotes.some(note => note.titleInput === datafromChild.titleInput ))
{
    this.setState({errorMessage:"You already have a note with that title, try another!"})
    return   
} 

if (datafromChild.descreptionInput.trim() !== "" && datafromChild.titleInput.trim() !== "")
    this.setState({userNotes:[...this.state.userNotes,datafromChild],createNoteIsOpen: false})


//update usernotes in database here

}

deleteNoteData = (datafromChild) => 
{
    this.setState({userNotes:[...this.state.userNotes.filter(note => note.titleInput !== datafromChild.titleInput)]})
    //update usernotes in database here
}




//if you click around the create note div it will close the window
closeNoteWindow = (event) => {
    
     if (event.target.id === "CCCreateNote")
    this.setState({createNoteIsOpen: false})

}



openProjectManagement = (project) => this.setState({manageProjectIsOpen:true,projectManagingAtTheMoment:project})


closeProjectManageWindow = (event) =>{

    if (event.target.id === "FCManageProject")
    this.setState({manageProjectIsOpen: false})


     //update the project values in the database with the new ones here using the this.state.projectManagingAtTheMoment
}


//updates the project data based on the event triggered (deadline change, member added...)
updateProjectData = (eventOrValue,action) =>{

    let tempProject = this.state.projectManagingAtTheMoment


    if (action === "addTask")
    {
     if (eventOrValue.trim() === "" ||tempProject.tasks.filter(task => task == eventOrValue).length == 1)
        return;
 
        tempProject.tasks.push(eventOrValue)
    }
    else if (action === "delTask")
        tempProject.tasks = tempProject.tasks.filter(task => task != eventOrValue)


    else if (action === "addNote")
    {
        if (eventOrValue.trim() === "" ||tempProject.notes.filter(note => note == eventOrValue).length == 1)
        return;
 
        tempProject.notes.push(eventOrValue)
    }

    else if (action === "delNote")
         tempProject.notes = tempProject.notes.filter(note => note != eventOrValue)


    else if (action === "addUser")
        tempProject.users.push({username:eventOrValue})
    

    else if (action === "delUser")
        tempProject.users = tempProject.users.filter(user => user.username != eventOrValue)


    else if (eventOrValue.target.name === "deadline")
        tempProject.deadline = eventOrValue.target.value


    else if (eventOrValue.target.name === "descreption")
        tempProject.descreption = eventOrValue.target.value
        
    else if (eventOrValue.target.innerText === 'CLOSE PROJECT')
    {
    tempProject.status = false
    tempProject.deadline = new Date().toISOString().substring(0,10)
    }

    else if (eventOrValue.target.innerText === 'OPEN AGAIN')
    {
    tempProject.status = true
    let tomorrow = new Date();
    tomorrow.setDate(new Date().getDate()+1)
    tempProject.deadline = tomorrow.toISOString().substring(0,10);
    }



    this.setState({projectManagingAtTheMoment:tempProject})

}



    render() {
        return (
            <div id="CCUserProjects">
                 {this.state.manageProjectIsOpen && <FCManageProject closeProjectManageWindow={this.closeProjectManageWindow} projectManagingAtTheMoment = {this.state.projectManagingAtTheMoment} updateProjectData={this.updateProjectData} />}
                {this.state.createNoteIsOpen && <CCCreateNoteWindow closeNoteWindow={this.closeNoteWindow} sendNoteData={this.getNoteData} errorMessage={this.state.errorMessage}/> }
                <div id="CCUserProjectsFirstChild">
                <FCNav btnChangeTabs={this.btnChangeTabs}/>
                {this.state.tabOpened === "Notes" && <Button onClick={e => this.setState({createNoteIsOpen:true})} id="CCUserProjectsFirstChildBtn" variant="contained" color="primary" disableElevation>Add note</Button>}</div>
                <div id="CCUserProjectsSecondChild">
                    {this.state.tabOpened === "Notes"?<FCNotes userNotes={this.state.userNotes} deleteNoteData={this.deleteNoteData} />:<FCProjects userProjects={this.state.userProjects} openProjectManagement={this.openProjectManagement}/>}
                </div>
            </div>
        )
    }
}


