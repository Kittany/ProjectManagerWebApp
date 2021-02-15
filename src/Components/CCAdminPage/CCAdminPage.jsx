import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import '../../Styles/CCAdminPage.css'
import FCNav from './FCNav.jsx'
import CCUsers from './CCUsers.jsx'
import FCProjectsAdmin from './FCProjectsAdmin.jsx'
import FCCreateAccount from './CreateAccount/FCCreateAccount.jsx'
import FCCreateProject from './CreateProject/FCCreateProject.jsx'
import FCManageProject from '../CCManageProject/FCManageProject.jsx'
import FCAssignUser from "./FCAssignUser";
import { Bar, Line, Pie } from 'react-chartjs-2';
import Project from '../../Objects/Project'
import User from '../../Objects/User'

export default class CCAdminPage extends Component {
  constructor(props){

      super(props);
      this.state = {
          tabOpened:"Users",
          manageProjectIsOpen:false,
          createProjectIsOpen:false,
          createAccountIsOpen:false,
          projectManagingAtTheMoment:null,
          assignUserIsOpen: false,
          currentUserName: "",
          chartData: {
              labels: ['Skype', 'Google', 'Youtube'], // change this to user project array from DB
              datasets: [
                  {
                      label: "",
                      data: [
                      ],
                      backgroundColor: [
                          'green',

                      ]
                  }
              ]
            },
          allUsers:[]
      }
  }


//Switches between users tab & project management
btnChangeTabs = (bool) =>{
    if (bool){
    this.setState({tabOpened:"ManageProjects"})

        const allProjectsName = JSON.parse(localStorage.getItem('projects')).map((project) => project.name)
        const allProjectStatus = JSON.parse(localStorage.getItem('projects')).map((project) => project.status)
        const allProjectTasks = JSON.parse(localStorage.getItem('projects')).map((project) => project.tasks.length)
         const projectStatusColor = allProjectStatus.map((status) => status == true ? 'green' : 'red')
        allProjectTasks.push(0)
        this.setState(prevState => ({
            chartData: {
                labels: allProjectsName, // change this to user project array from DB
                datasets: [
                    {
                        label: "Tasks",
                        data: allProjectTasks,
                        backgroundColor: projectStatusColor
                    }
                ]
            }
        }))
    }

    else 
    this.setState({tabOpened:"Users"})
}

//opens the project management window
openProjectManageWindow = (project) =>{ this.setState({manageProjectIsOpen:true,projectManagingAtTheMoment:project}) }
    
//closes the project management window
closeProjectManageWindow = (event) =>{
    
        if (event.target.id === "FCManageProject")
        this.setState({manageProjectIsOpen: false})

        //Update project
        Project.updateProject(this.state.projectManagingAtTheMoment)
        



}
    
//opens the create project window
openCreateProjectWindow = () => this.setState({createProjectIsOpen:true})

//closes the create project window
closeCreateProjectWindow = (event) =>{ 
    if (event === "CreateProject" || event.target.id === "FCCreateProject" || event.target.innerText === "CLOSE")
    this.setState({createProjectIsOpen:false})}


openCreateAccountWindow = () => this.setState({createAccountIsOpen:true})
        

closeCreateAccountWindow = (event) =>{ 
    if (event === "CreateAccount" || event.target.id === "FCCreateAccount" || event.target.innerText === "CLOSE")
    this.setState({createAccountIsOpen:false})}



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
        if (eventOrValue.trim() === "" ||tempProject.notes.filter(note => note == eventOrValue).length == 1 )
        return;
 
        tempProject.notes.push(eventOrValue)
    }

    else if (action === "delNote")
         tempProject.notes = tempProject.notes.filter(note => note != eventOrValue)


    else if (action === "addUser")
        tempProject.users.push({username:eventOrValue})
    

    else if (action === "delUser")
        tempProject.users = tempProject.users.filter(user => user.username != eventOrValue)

    else if (action === "CreateProject")
    {
            Project.Create(eventOrValue)
            this.closeCreateProjectWindow("CreateProject")
            setTimeout(() => {
                alert('Project has been sucessfully created!')
            }, 300);
    }

    else if (action === "CreateAccount")
    {

            User.Create(eventOrValue)
            this.closeCreateAccountWindow("CreateAccount")
            setTimeout(() => {
                alert('User has been sucessfully created!')
            }, 300);
    }
        

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
    getCurrentUserName = (username) => {
        this.setState({ currentUserName: username });
    };

    openAssignUserWindow = () => this.setState({ assignUserIsOpen: true });

    closeAssignUserWindow = (e) => {
        if (e.target.id === "FCAssignUser")
            this.setState({ assignUserIsOpen: false });
    };


    render() {
        return (
            <div id="CCAdminPage">
                {this.state.assignUserIsOpen && (<FCAssignUser username={this.state.currentUserName} closeAssignUserWindow={this.closeAssignUserWindow}/>
                )}
                {this.state.createAccountIsOpen && <FCCreateAccount closeCreateAccountWindow={this.closeCreateAccountWindow} updateProjectData={this.updateProjectData}/>}
                {this.state.createProjectIsOpen && <FCCreateProject closeCreateProjectWindow={this.closeCreateProjectWindow} updateProjectData={this.updateProjectData}/>}
                {this.state.manageProjectIsOpen && <FCManageProject closeProjectManageWindow={this.closeProjectManageWindow} projectManagingAtTheMoment = {this.state.projectManagingAtTheMoment} updateProjectData={this.updateProjectData} />}
                <div id="CCAdminPageFirstChild">
                <FCNav btnChangeTabs={this.btnChangeTabs}/>
                {this.state.tabOpened === "Users"?
                <Button onClick={this.openCreateAccountWindow} id="CCAdminPageFirstChildBtn" variant="contained" color="primary" disableElevation>Create Account</Button>:
                <Button onClick={this.openCreateProjectWindow} id="CCAdminPageFirstChildBtn" variant="contained" color="primary" disableElevation>Start A Project</Button>}
                </div>
                <div id="CCAdminPageSecondChild">
                    {this.state.tabOpened === "Users" ? <CCUsers users={this.props.users} getCurrentUserName={this.getCurrentUserName} openAssignUserWindow={this.openAssignUserWindow}/>:
                    <div id="ManageProjectsTab">
                        <div id="adminStatics">
                                <Bar
                                    data={this.state.chartData}
                                    width={100}
                                    height={50}
                                    options={{ maintainAspectRatio: false }}
                                />
                        </div>
                        <FCProjectsAdmin allProjects={JSON.parse(localStorage.getItem('projects'))} openProjectManageWindow={this.openProjectManageWindow}/>
                        </div>}
                </div>
            </div>
        )
    }
}


