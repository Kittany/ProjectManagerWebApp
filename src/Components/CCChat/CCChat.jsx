import React, { Component } from "react";
import "../../Styles/CCChat.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CCChatGUI from "./CCChatGUI";
export default class CCChat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  users = [
    { username: "3bbod", role: "FullStack", avatar: "1" },
    { username: "meow", role: "Backend", avatar: "2" },
    { username: "lolo", role: "Designer", avatar: "3" },
  ];

  render() {
    let classes = makeStyles((theme) => ({
      root: {
        width: "100%",
        maxWidth: "36ch",
        backgroundColor: theme.palette.background.paper,
      },
      inline: {
        display: "inline",
      },
    }));
    return (
      <div id="CCChat">
        <div class="CCChatFirstChild">
          <h2>Chat</h2>
          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="3bbod"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      FullStack
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Sharef hehehehe"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Backend
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="abonader"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      FullStack
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </div>
        <div class="CCChatFirstSecond">
          <CCChatGUI />
        </div>
      </div>
    );
  }
}
