import React from "react";
import { Button } from "@material-ui/core";

export default function FCHotWindow(props) {
  return (
      <div id="FCHotWindow">
        <img
          id="userImg"
          src="KittyWithGlasses.jpg"
          alt=""
          style={{ width: "30%",height:"30%" }}
        ></img>
        <div id="userDetails">
          <h2 id="username">John Doe</h2>
          <p id="userRole">Full Stack Developer</p>
          <p>Country, <span>Adress</span></p>
          <Button id="btnMessage" variant="contained" color="primary" disableElevation>
            Message
          </Button>
        </div>
      </div>
  );
}
