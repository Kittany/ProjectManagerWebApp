import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: "3%",
    minHeight:"30vh",
    margin:15,
    position:"relative"


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

export default function FCNote() {
  const classes = useStyles();


  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Date
        </Typography>
        <Typography variant="h5" component="h2">
          Title
        </Typography>
        <Typography variant="body2" component="p">
          Descreption
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="Secondary" style={{position:"absolute", bottom:"0", right:"0"}}>Delete</Button>
      </CardActions>
    </Card>
  );
}
