import React, { Component } from 'react'
import '../../Styles/CCManageProject.css'
import FCSmallUser from './FCSmallUser.jsx'


export default class CCManageMembersInProject extends Component {
    constructor(props)
    {
         
      
        
        super(props);
        this.state = {
            filter:"",
            /*remove this and use users in database using a method*/
            users: [{username:"meow",role:"Backend",avatar:"2"},{username:"lolo",role:"Designer",avatar:"3"},{username:"3bbod",role:"Fullstack",avatar:"20"}]

        }
    
    }
 
  //This basically displays the users who match the search input
 changeFilter = (event) => {this.setState({filter:event.target.value.toLowerCase()})}
  

 render() {

    return (
        <div id="CCManageMembersInProject">
            <input onChange={this.changeFilter}type="text" placeholder="Search for a username / role"></input>
             <div id="CCManageMembersInProjectChild">
             <div className="CCManageMembersInProjectUserGrid"> 
             {/*this basically renders the users based on what's written in the filter input & filters the users array from the users who already exist in the project (so we can't see them in the assign list)*/}
             {this.state.users.filter(user => this.props.projectManagingAtTheMoment.users.every(userInProject => userInProject.username !== user.username)).filter(user => user.username.toLowerCase().indexOf(this.state.filter) != -1 || user.role.toLowerCase().indexOf(this.state.filter) != -1).map(user => <FCSmallUser user={user} projectManagingAtTheMoment={this.props.projectManagingAtTheMoment} updateProjectData={this.props.updateProjectData}/>)} 
             </div>


             <div className="CCManageMembersInProjectUserGrid">
             {/*This renders the users from the users array who are only assigned in the project */}
             {this.state.users.filter((user) => this.props.projectManagingAtTheMoment.users.some((userInProject) => userInProject.username === user.username)).map(user => <FCSmallUser user={user} projectManagingAtTheMoment={this.props.projectManagingAtTheMoment} updateProjectData={this.props.updateProjectData}/>)}
             
            {/*The some() method tests whether at least one element in the array passes the test implemented by the provided function */}
             

             </div>
             </div>
        </div>
    )
}
}



// this.props.projectManagingAtTheMoment.users.every(userInProject => userInProject.username === user.username)).map(user => )

   
















