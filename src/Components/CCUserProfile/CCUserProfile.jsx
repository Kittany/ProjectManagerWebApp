import React, { Component } from "react";
import "../../Styles/CCUserProfile.css";
import { Button } from "@material-ui/core";
import FCHotWindow from "./FCHotWindow";
import FCUserStatics from "./FCUserStatics";
import FCUserFullDetails from "./FCUserFullDetails";
import FCUserProfileProjects from "./FCUserProfileProjects";

export default class CCUserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      userName: "" /*this should be equal to current user from the DB */,
      users: ["3bood", "momo", "fofo"],
    };
  }
  CCUserProfileUserNameInput = async (e) => {
    await this.setState({ userInput: e.target.value });
  };

  CCUserProfileBtnSearch = () => {
    let check = this.state.users.find((user) => user === this.state.userInput);
    if (check !== undefined) this.setState({ userName: check });
    else alert("Please enter a valid username");
  };

  render() {
    return (
      <div id="CCUserProfile">
        <div id="CCUserProfileFirstChild">
          <input
            type="text"
            placeholder="Username"
            onChange={this.CCUserProfileUserNameInput}
          ></input>
          <Button
            onClick={this.CCUserProfileBtnSearch}
            id="CCUserProfileFirstChildBtn"
            variant="contained"
            color="primary"
            disableElevation
          >
            Search
          </Button>
        </div>

        <div id="CCUserProfileSecondChild">
          <div id="CCUserProfileSecondChildLeftChild">
            <FCHotWindow userName={this.state.userName} />
            {/* sends user name to childer and get the rest of data from the database by this unic username */}
            <FCUserStatics userName={this.state.userName} />
          </div>
          <div id="CCUserProfileSecondChildRightChild">
            <FCUserFullDetails userName={this.state.userName} />
            <FCUserProfileProjects userName={this.state.userName} />
          </div>
        </div>
      </div>
    );
  }
}
