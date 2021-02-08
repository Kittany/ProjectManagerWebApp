import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function FCUserFullDetails() {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();
  //Don't add the button to the database, make a loop that adds it to each object in the code
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "yolo@squad.com",
    role: "programmer",
    country: "earth",
    address: "no where",
    state:"Hifa",
    zip:"3010000"
  };
  return (
    <div id="FCUserFullDetails">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              First Name
            </TableCell>
            <TableCell align="center">{user.firstName}</TableCell>
          </TableHead>
          <TableHead>
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              Last Name
            </TableCell>
            <TableCell align="center">{user.lastName}</TableCell>
          </TableHead>
          <TableHead>
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              Email
            </TableCell>
            <TableCell align="center">{user.email}</TableCell>
          </TableHead>
          <TableHead>
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              Country
            </TableCell>
            <TableCell align="center">{user.country}</TableCell>
          </TableHead>
          <TableHead>
            <TableCell align="center" style={{ fontWeight: "bold" }}>
              Address
            </TableCell>
            <TableCell align="center">{user.address}</TableCell>
          </TableHead>
          <TableBody>
            <TableRow key={user.name}></TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
