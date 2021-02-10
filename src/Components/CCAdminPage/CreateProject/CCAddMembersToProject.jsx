import React, { Component } from 'react'
import '../../../Styles/CCAdminPage.css'
import FCSmallUser from '../CreateProject/FCSmallUser.jsx'

export default class CCAddMembersToProject extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            users:this.props.users,
            filter:""
        }
    
    }

 tempUsers = [{username:"3bbod",role:"FullStack",avatar:"1"},{username:"meow",role:"Backend",avatar:"2"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"},{username:"lolo",role:"Designer",avatar:"3"}];
 

 changeFilter = (event) => {this.setState({filter:event.target.value.toLowerCase()})}


    render() {
        return (
            <div id="CCAddMembersToProject">
                <input onChange={this.changeFilter}type="text" placeholder="Search for a username / role"></input>
               <div id="CCAddMembersToProjectUserGrid"> {/* this is temp, use map when ready*/}
               {this.tempUsers.filter(user => user.username.toLowerCase().indexOf(this.state.filter) != -1 || user.role.toLowerCase().indexOf(this.state.filter) != -1).map(user => <FCSmallUser user={user}/>)}
              </div>
            </div>
        )
    }
}





   















