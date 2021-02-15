import React, { Component, useRef } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CCChatGUISecondChild from "./CCChatGUI";
import User from '../../Objects/User'
export default class CCUsersChatList extends Component {
  constructor(props){
    super(props);
    this.state={
      users: User.getAllUsersInDatabase(),
      searchNameInput: ""
    }
  }
  inputHandler = async (e) => {
    this.setState(await { searchNameInput:e.target.value });
  };

  ScrollDown =()=>{
    
  }

  render() {
    return (
      <div id="CCUsersChatList">
        <div
          style={{
            width: "100%",
            height: "13%",
            display: "flex",
            flexDirection: "column",
            justifyContent:"center"
          }}
        >
          <h4
            style={{
              paddingLeft: "3%",
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Search&nbsp;{" "}
          </h4>
          <input
            id="chatUserSearchInput"
            style={{
              width: "90%",
              marginLeft: "5%",
            }}
            type="text"
            onChange={this.inputHandler}
          />
        </div>
        <div id="CCUsersChatListContainer" style={{overflowY:"scroll",display:"block"}}>
          {this.state.users.filter(user => user.username.toLowerCase().substring(0, this.state.searchNameInput.length) == this.state.searchNameInput).map(user => 
            <div className="ChatContainer darker" style={{ cursor: "pointer"}} handleScroll={this.ScrollDown()}>
              <img style={{ width: "15%" }} name="1" src="https://i.postimg.cc/SKvzkdJS/050-woman.png" width="10%" height="10%" alt="" />
              <h3>{user.firstName} <span style={{ fontSize: "14px", color: "rgb(122, 151, 255)",fontWeight:"bold"}}>{user.role}</span></h3>
              
            </div>
          )}
      </div>
      </div>
    );
  }
}
