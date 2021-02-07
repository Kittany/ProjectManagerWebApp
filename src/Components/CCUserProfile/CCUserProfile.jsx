import React, { Component } from "react";
import "../../Styles/CCUserProfile.css";
import { Button } from "@material-ui/core";
import FCHotWindow from "./FCHotWindow";
import FCUserStatics from "./FCUserStatics";
import FCUserFullDetail from "./FCUserFullDetail";

export default class CCUserProfile extends Component {
  render() {
    return (
      <div id="CCUserProfile">
        <div id="firstChild">
          <input type="text" placeholder="Username"></input>
          <Button id="btn" variant="contained" color="primary" disableElevation>
            Search
          </Button>
        </div>

        <div id="secondChild">
          <div id="leftChild">
          <FCHotWindow />
          <FCUserStatics/>
          </div>
          <div id="rightChild">
          <FCUserFullDetail/>
          </div>
        </div>
      </div>
    );
  }
}
