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
            <TableCell align="center" style={{fontWeight:"bold"}}>ID</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Project</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Tasks</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Deadline</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Users</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Status</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.userProjects.map((project) => (
            <TableRow key={project.name}>
              <TableCell component="th" scope="row" align="center">
                {project.id}
              </TableCell>
              <TableCell align="center">{project.name}</TableCell>
              <TableCell align="center">{project.tasks}</TableCell>
              <TableCell align="center">{project.deadline}</TableCell>
              <TableCell align="center">{project.users.length}</TableCell>
              <TableCell align="center">{project.status}</TableCell>
              <TableCell align="center">{project.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}