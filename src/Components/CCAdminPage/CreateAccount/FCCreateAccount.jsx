import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FCAccountSecuritySetup from './FCAccountSecuritySetup';
import CCAccountLocationSetup from './FCAccountLocationSetup';
import CCAccountAvatarSetup from './CCAccountAvatarSetup';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: '100%',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(550 + theme.spacing(2) * 2)]: {
      width: 550,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Account Security', 'Location', 'Profile Picture'];


export default function FCCreateAccount(props) {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  
  //Account Creation
  const [newAccount,setNewAccount] = React.useState({username:"",firstName:"",lastName:"",email:"",password:"",avatar:"1",role:"Fullstack",isAdmin:false,state:"Afghanistan",address:"",projects:[],notes:[]})
  const [childComponentInput,setChildComponentInput] = React.useState({email:"",confirmEmail:"",password:"",confirmPassword:"",errorMessage:""})
  const [passedAdminTest,setPassedAdminTest] = React.useState(false);
  let secretCode = "create should have an extra e, createe" //ha, it's not a secret anymore


  //form Validation
  const formValidation = () =>{
    
    setChildComponentInput(prevState => ({...prevState,errorMessage:""}))

    if (childComponentInput.email === "" || childComponentInput.confirmEmail == "" || childComponentInput.password === "" || childComponentInput.confirmPassword === "" || newAccount.username === "" )
    {    
      setChildComponentInput(prevState => ({...prevState,errorMessage:"Please fill the empty fields"}))
      return;
    }
   else if (childComponentInput.email !== childComponentInput.confirmEmail)
    {
      setChildComponentInput(prevState => ({...prevState,errorMessage:"Emails do not match!"}))
      return;
    }

    else if (childComponentInput.password !== childComponentInput.confirmPassword)
    {     
      setChildComponentInput(prevState => ({...prevState,errorMessage:"Passwords do not match!"}))
      return;
    }

    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(childComponentInput.email))
    {    
      setChildComponentInput(prevState => ({...prevState,errorMessage:"Incorrect email format!"}))
      return;
    }  
    
    else if(!passedAdminTest)
      if (newAccount.isAdmin)
          if (prompt("You are trying to create an admin account, please enter the secret code") !== secretCode)
           {
            setChildComponentInput(prevState => ({...prevState,errorMessage:"invalid code, you cannot create an admin until you pass the correct one!"}))
            return;
           }
           else 
           setPassedAdminTest(true);
    

    
    setNewAccount(prevState => ({...prevState,email:childComponentInput.email}))
    setNewAccount(prevState => ({...prevState,password:childComponentInput.password}))
    
    handleNext()
  }


   const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <FCAccountSecuritySetup newAccount={newAccount} setNewAccount={setNewAccount} childComponentInput={childComponentInput} setChildComponentInput={setChildComponentInput} />;
      case 1:
        return <CCAccountLocationSetup  newAccount={newAccount} setNewAccount={setNewAccount}/>;
      case 2:
        return <CCAccountAvatarSetup newAccount={newAccount} setNewAccount={setNewAccount}/>;
      default:
        throw new Error('Unknown step');
    }
  }



  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div id="FCCreateAccount" onMouseDown={props.closeCreateAccountWindow}>
      <div id="FCCreateAccoutChild">
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout} >
        <Paper className={classes.paper} style={{margin:0}}>
          <Typography component="h1" variant="h4" align="center" style={{fontFamily:"poppins"}}>
            Create Account
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper} > 
            {steps.map((label) => (
              <Step key={label} >
                <StepLabel >{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom style={{fontFamily:"poppins"}}>
                <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Account Created Successfully
               </Alert>
                  
                </Typography>
                <Button variant="contained" color="primary" disableElevation style={{fontFamily:"poppins"}}>Close</Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button} style={{fontFamily:"poppins"}}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length-1?e => (props.updateProjectData(newAccount,"CreateAccount")) : formValidation}
                    className={classes.button}
                    style={{fontFamily:"poppins"}}
                  >
                    {activeStep === steps.length - 1 ? 'Create Account' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
    </div>
    </div>
  );
}