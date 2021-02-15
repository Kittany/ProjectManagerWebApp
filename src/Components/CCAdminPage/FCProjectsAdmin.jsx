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




export default function FCProjectsAdmin(props) {
  const classes = useStyles();


//Add manage button for each project                               
props.allProjects.forEach(project => project.action = 
  <Button onClick={e => props.openProjectManageWindow(project)}   variant="outlined" color="primary" disableElevation>Manage</Button>)




  return (
    <div id="CCProjectsAdmin">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:"bold",fontFamily:"poppins"}} align="center">Project</TableCell>
            <TableCell style={{fontWeight:"bold",fontFamily:"poppins"}} align="center">Tasks</TableCell>
            <TableCell style={{fontWeight:"bold",fontFamily:"poppins"}} align="center">Deadline</TableCell>
            <TableCell style={{fontWeight:"bold",fontFamily:"poppins"}} align="center">Users</TableCell>
            <TableCell style={{fontWeight:"bold",fontFamily:"poppins"}} align="center">Status</TableCell>
            <TableCell style={{fontWeight:"bold",fontFamily:"poppins"}} align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.allProjects.map((project) => (
            <TableRow key={project.name}>
              <TableCell align="center" style={{fontFamily:"poppins"}}>{project.name}</TableCell>
              <TableCell align="center" style={{fontFamily:"poppins"}}>{project.tasks.length}</TableCell>
              <TableCell align="center" style={{fontFamily:"poppins"}}>{project.deadline}</TableCell>
              <TableCell align="center" style={{fontFamily:"poppins"}}>{project.users.length}</TableCell>
              <TableCell align="center" style={{fontFamily:"poppins",color:`${project.status?"green":"red"}`,fontWeight:"bold"}}>{project.status?"Open":"Closed"}</TableCell>
              <TableCell align="center" style={{fontFamily:"poppins"}}>{project.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}