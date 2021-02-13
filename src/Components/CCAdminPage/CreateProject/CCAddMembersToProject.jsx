import React, { Component } from 'react'
import '../../../Styles/CCAdminPage.css'
import FCSmallUser from '../CreateProject/FCSmallUser.jsx'

export default class CCAddMembersToProject extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            /*change this to users in database, not temp users*/
            users: [{username:"3bbod",role:"FullStack",avatar:"1"},{username:"meow",role:"Backend",avatar:"2"},{username:"lolo",role:"Designer",avatar:"3"}],
            filter:"",
            
        }
    
    }

 

 changeFilter = (event) => {this.setState({filter:event.target.value.toLowerCase()})}
  


    render() {
        return (
            <div id="CCAddMembersToProject">
                <input onChange={this.changeFilter}type="text" placeholder="Search for a username / role"></input>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center", width:"100vh"}}>
               <div className="CCAddMembersToProjectUserGrid"> 
               {this.state.users.filter(user => this.props.newProject.users.every(userInProject => userInProject.username !== user.username)).filter(user => user.username.toLowerCase().indexOf(this.state.filter) != -1 || user.role.toLowerCase().indexOf(this.state.filter) != -1).map(user => <FCSmallUser user={user} newProject={this.props.newProject} manageNewProject={this.props.manageNewProject}/>)} 
              </div>
              <div className="CCAddMembersToProjectUserGrid">
               {this.props.newProject.users.map(user => <FCSmallUser user={user} newProject={this.props.newProject}  manageNewProject={this.props.manageNewProject}/>)}
              {/*this.state.users.filter((user) => this.props.projectManagingAtTheMoment.users.some((userInProject) => userInProject.username === user.username)) */}
              </div>
              </div>
           
            </div>
        )
    }
}





   















