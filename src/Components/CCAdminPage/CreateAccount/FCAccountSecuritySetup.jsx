import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Form } from 'react-bootstrap';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Account Security
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
            required
            id="emailConfirm"
            name="emailConfirm"
            label="Confirm Email Address"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Password"
            name="Password"
            label="Password"
            type="password"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="PasswordConfirm" name="PasswordConfirm" label="Confirm Password" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Form.Row style={{width:"250%"}}>
        <Form.Group as="Col" controlId="role" style={{width:"40%"}}>
        <Form.Label>Role</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
        </Form.Control>
         </Form.Group>
        </Form.Row>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}