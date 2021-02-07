import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PeopleIcon from '@material-ui/icons/People';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const useStyles = makeStyles({
  root: {
    width: 400,
    background:"transparent",
    fontWeight:"bold",
    fontFamily:"Segoe UI"
},});

export default function FCNav(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation value={value} onChange={(event, newValue) => {setValue(newValue);}}  className={classes.root}>
       <BottomNavigationAction label="Users" icon={<PeopleIcon fontSize={"large"} />}  className={classes.root}  onClick={e => props.btnChangeTabs(false)}/> {/*Add on click here*/ }
      <BottomNavigationAction label="Manage Projects" icon={<WhatshotIcon fontSize={"large"} /> } className={classes.root} onClick={e => props.btnChangeTabs(true)}/>
    </BottomNavigation>
  );
}
