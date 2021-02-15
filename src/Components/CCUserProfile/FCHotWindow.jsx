import React from "react";
import { Button } from "@material-ui/core";
import '../../Styles/CCUserProfile.css'
import User from '../../Objects/User'

export default function FCHotWindow(props) {

  let user = User.getCurrentUser()
  return (
      <div id="FCHotWindow">
        <img
          id="img"
        src={`https://i.postimg.cc/Y0SNb0G0/001-woman.png`}
          alt=""
        ></img>
        <div id="userDetails">
        <h2 id="username">{user.username}</h2>
          <p id="userRole">{user.role}</p>
          <p>{user.state}, <span> {user.address}</span></p>
          <Button id="btnMessage" variant="contained" color="primary" disableElevation>
            Message
          </Button>
        </div>
      </div>
  );
}
