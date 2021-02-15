import React from "react";
import { Button } from "@material-ui/core";
import '../../Styles/CCUserProfile.css'

export default function FCHotWindow(props) {
  return (
      <div id="FCHotWindow">
        <img
          id="img"
        src={`https://i.postimg.cc/Y0SNb0G0/001-woman.png`}
          alt=""
        ></img>
        <div id="userDetails">
          <h2 id="username">{props.userName}</h2>
          <p id="userRole">Full Stack Developer</p>
          <p>Country, <span>Address</span></p>
          <Button id="btnMessage" variant="contained" color="primary" disableElevation>
            Message
          </Button>
        </div>
      </div>
  );
}
