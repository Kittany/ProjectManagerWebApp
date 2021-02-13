import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,

  },});



export default function FCProjects(props) {
  const classes = useStyles();

//Add manage button for each project                                    //Change false to user.isAdmin
 props.userProjects.forEach(project => project.action = 
 <Button onClick={e => props.openProjectManagement(project)}   disabled={project.status === "Closed" && !false}  variant="outlined" color="primary" disableElevation>Manage</Button>)


  return (
    <div id="CCProjects">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{fontWeight:"bold",fontFamily:"poppins"}}>Project</TableCell>
            <TableCell align="center" style={{fontWeight:"bold",fontFamily:"poppins"}}>Tasks</TableCell>
            <TableCell align="center" style={{fontWeight:"bold",fontFamily:"poppins"}}>Deadline</TableCell>
            <TableCell align="center" style={{fontWeight:"bold",fontFamily:"poppins"}}>Users</TableCell>
            <TableCell align="center" style={{fontWeight:"bold",fontFamily:"poppins"}}>Status</TableCell>
            <TableCell align="center" style={{fontWeight:"bold",fontFamily:"poppins"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.userProjects.map((project) => (
            <TableRow key={project.name}>
              <TableCell align="center" style={{fontFamily:"poppins"}}>{project.name}</TableCell>
              <TableCell align="center" style={{fontFamily:"poppins"}}>{project.tasks.length}</TableCell>
              <TableCell align="center" style={{fontFamily:"poppins"}}>{project.deadline}</TableCell>
              <TableCell align="center" style={{fontFamily:"poppins"}}>{project.users.length}</TableCell>
              <TableCell align="center" style={{fontFamily:"poppins",color:`${project.status?"green":"red"}`,fontWeight:"bold"}}>{project.status?"Open":"Closed"}</TableCell>
              <TableCell align="center">{project.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}