import React, { Component } from "react";
import "../../Styles/CCUserProfile.css";
import { Button } from "@material-ui/core";
import FCHotWindow from "./FCHotWindow";
import FCUserStatics from "./FCUserStatics";
import FCUserFullDetails from "./FCUserFullDetails";
import FCUserProfileProjects from "./FCUserProfileProjects";
import User from '../../Objects/User'

export default class CCUserProfile extends Component {
  constructor(props) {
    super(props);
    let projects = User.getAllUsersInDatabase()
    this.state = {
      userInput: "",
      allProjects:projects,
  
    };
  }
  CCUserProfileUserNameInput = async (e) => {
    await this.setState({ userInput: e.target.value });
  };

  // CCUserProfileBtnSearch = () => {
  //   let check = this.state.users.filter((user) => user === this.state.userInput);
  //   console.log(this.state.userInput);
  //   if (check !== undefined) this.setState({ userInput: check });
  //   else alert("Please enter a valid username");
  // };

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
            // onClick={this.CCUserProfileBtnSearch}
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
            <FCHotWindow username={this.state.userInput} />
            {/* sends user name to childer and get the rest of data from the database by this unic username */}
            <FCUserStatics username={this.state.userInput} allProjects={this.state.allProjects} />
          </div>
          <div id="CCUserProfileSecondChildRightChild">
            <FCUserFullDetails username={this.state.userInput} />
            <FCUserProfileProjects username={this.state.userInput} />
          </div>
        </div>
      </div>
    );
  }
}
