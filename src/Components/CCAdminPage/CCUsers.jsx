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

 tempUsers = [{username:"3bbod"},{username:"meow"},{username:"lolo"}];
 

 changeFilter = (event) => {this.setState({filter:event.target.value})}


    render() {
        return (
            <div id="CCUsers">
                <input onChange={this.changeFilter}type="text" placeholder="Filter by username"></input>
             <div id="UserGrid"> {/* this is temp, use map when ready*/}
                {this.tempUsers.filter(user => user.username.indexOf(this.state.filter) != -1).map(user => <FCUser user={user}/>)}
            </div>
            </div>
        )
    }
}

let test = "lol";

test.indexOf()














