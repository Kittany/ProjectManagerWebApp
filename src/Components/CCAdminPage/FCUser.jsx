import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Route } from 'react-router-dom'
import CCUserProfile from '../CCUserProfile/CCUserProfile';

const useStyles = makeStyles({
  root: {
    minWidth: "3%",
    minHeight:"30vh",
    margin:15,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    textAlign:"center",


  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    
  },
  pos: {
    marginBottom: 12,
  },
});

export default function FCUser(props) {
  const classes = useStyles();

  const handleBtnClick = (username) => {
    props.openAssignUserWindow()
    props.getCurrentUserName(username)
  }

  return (
    <Card className={classes.root} variant="outlined" style={{padding:"2%"}}>
        <div id="imageContainer" className="img logo rounded-circle mb-5" style={{backgroundImage: `url(${props.user.avatar}.svg)`}} alt=""></div>
      <CardContent style={{padding:0, width:"100%", height:"50%",marginBottom:"1%",userSelect:"none"}}>
        <Typography variant="h5" component="h2">
          {props.user.username}
        </Typography>
        <Typography variant="body2" component="p" color="gold" style={{fontWeight:"bold"}}>
          {props.user.role}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.user.isAdmin?"Admin":"Member"}
        </Typography>
        <Button size="small" color="primary" variant="outlined" style={{marginTop: "5%"}}>Visit Profile</Button>
      </CardContent>
    </Card>
  );
}
