import React, { Component } from "react";
import "../../Styles/CCChat.css";
import CCChatGUI from "./CCChatGUI";
import CCUsersChatList from "./CCUsersChatList";
export default class CCChat extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  users = [
    { username: "3bbod", role: "FullStack", avatar: "1" },
    { username: "meow", role: "Backend", avatar: "2" },
    { username: "lolo", role: "Designer", avatar: "3" },
  ];
  render() {
    return (
      <div id="CCChat">
        <div className="CCChatFirstChild">
          <CCUsersChatList />
        </div>
        <div className="CCChatFirstSecond">
          <CCChatGUI />
        </div>
      </div>
    );
  }
}
