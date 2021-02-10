import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




export default function FCSmallUser(props) {


  return (
    <Card  variant="outlined" style={{padding:"2%"}}>
      <CardContent style={{padding:0, width:"100%", height:"50%",marginBottom:"1%",userSelect:"none"}}>
        <Typography variant="h5" component="h2">
          <p style={{display:"flex",alignItems:"center",justifyContent:"space-around", width:"100%", fontFamily:"poppins",fontSize:"20px"}}>
            <p style={{fontWeight:"bold",margin:0,width:"30%"}}>{props.user.username}</p>  
            <p style={{margin:0,width:"30%"}}>{props.user.role}</p> <Button size="small" color="secondary" variant="outlined" style={{marginLeft:"5%"}}>Assign</Button></p>
        </Typography>
      </CardContent>
    </Card>
  );
}
