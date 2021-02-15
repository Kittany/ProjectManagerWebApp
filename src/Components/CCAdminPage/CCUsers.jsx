import React, { Component } from 'react'
import '../../Styles/CCAdminPage.css'
import FCUser from './FCUser.jsx'
import User from '../../Objects/User'

export default class CCUsers extends Component {
    constructor(props)
    {
        let users = JSON.parse(localStorage.getItem('users'));
        super(props);
        this.state = {
            users:users,
            filter:""
        }
    
    }


 

 changeFilter = (event) => {this.setState({filter:event.target.value.toLowerCase()})}


    render() {
      
        return (
            <div id="CCUsers">
                <input onChange={this.changeFilter}type="text" placeholder="Search for a username / role"></input>
             <div id="UserGrid"> {/* this is temp, use map when ready*/}
                    {this.state.users.filter(user => user.username.toLowerCase().indexOf(this.state.filter) != -1 || user.role.toLowerCase().indexOf(this.state.filter) != -1).map(user => <FCUser user={user} getCurrentUserName={this.props.getCurrentUserName} openAssignUserWindow={this.props.openAssignUserWindow}/>)}
            </div>
            </div>
        )
    }
}


















