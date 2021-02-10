import React, { Component } from "react";

export default class CCChatGUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "abonaderZ",
    };
  }
  render() {
    return (
      <div id="CCChatGUI">
        <div id="CCChatGUIFirstChild">
          <h1>{this.state.userName}</h1>
        </div>
        <div id="CCChatGUISecondChild"></div>
      </div>
    );
  }
}
