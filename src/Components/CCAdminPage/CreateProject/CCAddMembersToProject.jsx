import React, { Component } from 'react'
import '../../../Styles/CCAdminPage.css'
import FCSmallUser from '../CreateProject/FCSmallUser.jsx'

export default class CCAddMembersToProject extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            /*change this to users in database, not temp users*/
            users: [{username:"3bbod",role:"FullStack",avatar:"1"},{username:"meow",role:"Backend",avatar:"2"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"}],
            filter:"",
            chosenUsersForProject: []
        }
    
    }

 
 

 changeFilter = (event) => {this.setState({filter:event.target.value.toLowerCase()})}
  
 addUserToProject = (dataFromChild) => 
 {
     //add the user to the array
     this.setState({chosenUsersForProject:[...this.state.chosenUsersForProject,dataFromChild]})

     //remove him from the users array so we cant add him again
     this.setState({users:[...this.state.users.filter(user => user != dataFromChild)]})
}

 removeUserFromProject = (dataFromChild) =>{
     //add the user back to the users array
    this.setState({users:[...this.state.users,dataFromChild]})


     //remove him from the chosen users array
    this.setState({chosenUsersForProject:[...this.state.chosenUsersForProject.filter(user => user != dataFromChild)]})

 }


    render() {
        return (
            <div id="CCAddMembersToProject">
                <input onChange={this.changeFilter}type="text" placeholder="Search for a username / role"></input>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center", width:"100vh"}}>
               <div className="CCAddMembersToProjectUserGrid"> 
               {this.state.users.filter(user => user.username.toLowerCase().indexOf(this.state.filter) != -1 || user.role.toLowerCase().indexOf(this.state.filter) != -1).map(user => <FCSmallUser user={user} chosenUsersForProject={this.state.chosenUsersForProject} addUserToProject={this.addUserToProject}/>)} 
              </div>
              <div className="CCAddMembersToProjectUserGrid">
               {this.state.chosenUsersForProject.map(user => <FCSmallUser user={user} chosenUsersForProject={this.state.chosenUsersForProject} removeUserFromProject={this.removeUserFromProject}/>)}
              </div>
              </div>
           
            </div>
        )
    }
}





   















