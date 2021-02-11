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


const rows = [
  {id:1111,project:"Skype",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Facebook",tasks:"15/19",deadline:"10/20/2021",users:4,status:"opened",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>},
  {id:2222,project:"Twitter",tasks:"15/19",deadline:"10/20/2021",users:4,status:"closed",action:<Button variant="outlined" color="primary" disableElevation>Manage</Button>}


];

export default function FCProjects() {
  const classes = useStyles();

  return (
    <div id="CCProjectsAdmin">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:"bold"}} align="center" >ID</TableCell>
            <TableCell style={{fontWeight:"bold"}} align="center">Project</TableCell>
            <TableCell style={{fontWeight:"bold"}} align="center">Tasks</TableCell>
            <TableCell style={{fontWeight:"bold"}} align="center">Deadline</TableCell>
            <TableCell style={{fontWeight:"bold"}} align="center">Users</TableCell>
            <TableCell style={{fontWeight:"bold"}} align="center">Status</TableCell>
            <TableCell style={{fontWeight:"bold"}} align="center">Action</TableCell>
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
              <TableCell align="center">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}