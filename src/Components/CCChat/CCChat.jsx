import React, { Component } from "react";
import "../../Styles/CCChat.css";
import CCChatGUI from "./CCChatGUI";
import CCUsersChatList from "./CCUsersChatList";
export default class CCChat extends Component {
  constructor(props) {
    super(props);
    this.state = { searchNameInput: "" };
  }
  users = [
    { username: "3bbod", role: "FullStack", avatar: "1" },
    { username: "meow", role: "Backend", avatar: "2" },
    { username: "lolo", role: "Designer", avatar: "3" },
  ];
   
  inputHandler = async(e) =>{
    this.setState(await {searchNameInput:e.target.value});
    console.log(this.state.searchNameInput);
  }
  render() {
    return (
      <div id="CCChat">
        <div className="CCChatFirstChild">
          <h2 style={{ marginTop: "9%" }}>Chat</h2>
          <div>
            <label style={{ display: "block" }}>Search </label>
            <input style={{ display: "block" }} type="text" onChange={this.inputHandler} />
          </div>
          <CCUsersChatList />
        </div>
        <div className="CCChatFirstSecond">
          <CCChatGUI />
        </div>
      </div>
    );
  }
}
