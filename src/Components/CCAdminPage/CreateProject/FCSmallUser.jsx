import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




export default function FCSmallUser(props) {
//This basically checks if the user is assigned or not, 0 means the array is empty therfore the user hasn't been AssignedOrNot yet, we use it to define which type of button we give the user (Assign or remove)
 let AssignedOrNot  = props.newProject.users.length === 0? true :props.newProject.users.filter(userInProject => userInProject.username === props.user.username).length === 0


  return (
    <Card  variant="outlined" style={{padding:"2%",background:"rgb(238, 238, 238)",marginBottom:"1%"}}>
      <CardContent style={{padding:0, width:"100%", height:"50%",marginBottom:"1%",userSelect:"none"}}>
        <Typography variant="h5" component="h2">
          <p style={{display:"flex",alignItems:"center",justifyContent:"space-around", width:"100%", fontFamily:"poppins",fontSize:"20px"}}>
            <p style={{fontWeight:"bold",margin:0,width:"30%"}}>{props.user.username}</p>  
            <p style={{margin:0,width:"30%"}}>{props.user.role}</p> 
            <Button onClick={e => AssignedOrNot? props.manageNewProject((prevState) => ({...prevState,users:[...props.newProject.users,{username:props.user.username}]})): props.manageNewProject((prevState) => ({...prevState,users:[...props.newProject.users.filter(user=> user.username != props.user.username )]}))} size="small" color="secondary" variant="outlined" style={{marginLeft:"5%"}}>{AssignedOrNot?"Assign":"Remove"}</Button>
            </p>
        </Typography>
      </CardContent>
    </Card>
  );
}


// this.props.manageNewProject((prevState) => ({...prevState,tasks:[...this.props.newProject.tasks,this.state.taskInput]}))