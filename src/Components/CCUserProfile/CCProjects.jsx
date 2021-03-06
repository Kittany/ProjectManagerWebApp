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

  },
});

//Don't add the button to the database, make a loop that adds it to each object in the code
const rows = [
  { id: 1111, project: "Skype", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Facebook", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "opened" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" },
  { id: 2222, project: "Twitter", tasks: "15/19", deadline: "10/20/2021", users: 4, status: "closed" }


];

export default function CCProjects() {
  const classes = useStyles();

  return (
    <div id="CCProjectsUserProfile">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: "bold" }}>ID</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>Project</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>Tasks</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>Deadline</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>Users</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" align="center">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.project}</TableCell>
                <TableCell align="center">{row.tasks}</TableCell>
                <TableCell align="center">{row.deadline}</TableCell>
                <TableCell align="center">{row.users}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}