import React, { Component } from "react";
import "../../Styles/CCUserProfile.css";
import { Button } from "@material-ui/core";
import FCHotWindow from "./FCHotWindow";
import FCUserStatics from "./FCUserStatics";
import FCUserFullDetails from "./FCUserFullDetails";
import FCUserProfileProjects from "./FCUserProfileProjects";

export default class CCUserProfile extends Component {
  render() {
    return (
      <div id="CCUserProfile">
        <div id="CCUserProfileFirstChild">
          <input type="text" placeholder="Username"></input>
          <Button id="CCUserProfileFirstChildBtn" variant="contained" color="primary" disableElevation>
            Search
          </Button>
        </div>

        <div id="CCUserProfileSecondChild">
          <div id="CCUserProfileSecondChildLeftChild">
          <FCHotWindow />
          <FCUserStatics/>
          </div>
          <div id="CCUserProfileSecondChildRightChild">
            <FCUserFullDetails/>
            <FCUserProfileProjects/>
          </div>
        </div>
      </div>
    );
  }
}
