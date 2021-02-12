import React, { Component } from "react";

export default class CCChatGUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "abonaderZ",
      contactName: "3bod",
      messages: [],
    };
    // add all users to the chat list
    this.chatContainer = React.createRef();
  }
  sendMessage = () => {
    let messages = [...this.state.messages, this.state.value];

    console.log("MESSAGES", messages);

    this.setState(
      {
        messages,
      },
      () => this.scrollToMyRef()
    );
  };

  scrollToMyRef = () => {
    const scroll =
      this.chatContainer.current.scrollHeight -
      this.chatContainer.current.clientHeight;
    this.chatContainer.current.scrollTo(0, scroll);
  };

  render() {
    return (
      <div id="CCChatGUI">
        <div id="CCChatGUIFirstChild">
          <h3 style={{color:"black", fontWeight:"bold"}}>Chat</h3>
        </div>
        <div ref={this.chatContainer} id="CCChatGUISecondChild">
          <div className="ChatContainer">
            <img name="1" src="Avatars/1.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>

            <p>Hello. How are you today?</p>
            <span className="time-right">11:00</span>
          </div>

          <div className="ChatContainer darker">
            <img name="2" src="Avatars/2.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Hey! I'm fine. Thanks for asking!</p>
            <span className="time-left">11:01</span>
          </div>

          <div className="ChatContainer">
            <img name="3" src="Avatars/3.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Sweet! So, what do you wanna do today?</p>
            <span className="time-right">11:02</span>
          </div>

          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Avatars/4.svg" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
        </div>
        <div className="chat__form">
          <form id="chat__form">
            <input
              id="text-message"
              type="text"
              placeholder="Type your message here ..."
            />
            <button className="btnSendMessage" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

