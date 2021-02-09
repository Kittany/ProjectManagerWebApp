import React, { Component } from 'react'
import '../../Styles/CCAdminPage.css'
import FCUser from './FCUser.jsx'

export default class CCUsers extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            users:this.props.users,
            filter:""
        }
    
    }

 tempUsers = [{username:"3bbod",role:"FullStack",avatar:"1"},{username:"meow",role:"Backend",avatar:"2"},{username:"lolo",role:"Designer",avatar:"3"}];
 

 changeFilter = (event) => {this.setState({filter:event.target.value.toLowerCase()})}


    render() {
        return (
            <div id="CCUsers">
                <input onChange={this.changeFilter}type="text" placeholder="Search for a username / role"></input>
             <div id="UserGrid"> {/* this is temp, use map when ready*/}
                {this.tempUsers.filter(user => user.username.toLowerCase().indexOf(this.state.filter) != -1 || user.role.toLowerCase().indexOf(this.state.filter) != -1).map(user => <FCUser user={user}/>)}
            </div>
            </div>
        )
    }
}


















