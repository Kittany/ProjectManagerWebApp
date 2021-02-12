import React, { Component, useRef } from 'react'
import { makeStyles } from "@material-ui/core/styles";
export default class CCUsersChatList extends Component {
  constructor(props){
    super(props);
    this.state={
      users:["3bbod","ahmad","fofo","koko","momo"],
      searchNameInput: ""
    }
  }

  inputHandler = async (e) => {
    this.setState(await { searchNameInput:e.target.value });
  };



  render() {
    return (
      <div id="CCUsersChatList">
        <div
          style={{
            width: "100%",
            height: "7%",
            marginTop: "8%",
            display: "flex",
            flexDirection: "column",
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
        <div style={{ width: "100%", height: "100%", overflowY:"scroll",display:"block",marginTop:"5%"}}>
          {this.state.users.filter(user => user.toLowerCase().substring(0, this.state.searchNameInput.length) == this.state.searchNameInput).map(user => <p>{user}</p> )}
      </div>
      </div>
    );
  }
}
