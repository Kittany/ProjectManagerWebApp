import React, { Component } from "react";

export default class CCChatGUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "Jonny",
      contactName: "fofo",
      messages: [],
    };
    // add all users to the chat list
    this.chatContainer = React.createRef();
  }
  sendMessage = () => {
    let messages = [...this.state.messages, this.state.value];



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

  componentDidMount(){
    let idz = document.getElementById("tempID");
    setInterval(() => {
      idz.style.top = 0;
      idz.style.left = 0;
      idz.style.behavior = "smooth";
      },2000);
  }

  render() {
    return (
      <div id="CCChatGUI">
        <div id="CCChatGUIFirstChild">
          <h3 style={{color:"black", fontWeight:"bold"}}>Chat</h3>
        </div>
        <div ref={this.chatContainer} id="CCChatGUISecondChild">
          <div className="ChatContainer">
            <img name="1" src="https://i.postimg.cc/Y0SNb0G0/001-woman.png" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>

            <p>Hello. How are you today?</p>
            <span className="time-right">11:00</span>
          </div>

          <div className="ChatContainer darker">
            <img name="2" src="https://i.postimg.cc/hv3LwnTr/002-man.png" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Hey! I'm fine. Thanks for asking!</p>
            <span className="time-left">11:01</span>
          </div>

          <div className="ChatContainer">
            <img name="3" src="https://i.postimg.cc/Y0SNb0G0/001-woman.png" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Sweet! So, what do you wanna do today?</p>
            <span className="time-right">11:02</span>
          </div>

          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/hv3LwnTr/002-man.png" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/Y0SNb0G0/001-woman.png" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/hv3LwnTr/002-man.png" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/Y0SNb0G0/001-woman.png" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/Y0SNb0G0/001-woman.png" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/hv3LwnTr/002-man.png" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/Y0SNb0G0/001-woman.png" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/hv3LwnTr/002-man.png" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/Y0SNb0G0/001-woman.png" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/hv3LwnTr/002-man.png" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="Ahttps://i.postimg.cc/Y0SNb0G0/001-woman.png" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/hv3LwnTr/002-man.png" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/Y0SNb0G0/001-woman.png" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/hv3LwnTr/002-man.png" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/Y0SNb0G0/001-woman.png" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/hv3LwnTr/002-man.png" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/Y0SNb0G0/001-woman.png" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/hv3LwnTr/002-man.png" width="10%" height="10%" alt="" />
            <h3>{this.state.currentUser}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div className="ChatContainer darker">
            <img name="4" src="https://i.postimg.cc/Y0SNb0G0/001-woman.png" width="10%" height="10%" alt="" />
            <h3>{this.state.contactName}</h3>
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span className="time-left">11:05</span>
          </div>
          <div id="tempID" style={{width:"1%", height:"1%"}}>a</div>
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

