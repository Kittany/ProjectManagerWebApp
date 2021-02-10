import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Form } from 'react-bootstrap';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Location
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="city" label="City" fullWidth autoComplete="city" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="address"
            label="Address"
            fullWidth
            type="text"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required type="number" id="zip" label="Zip" fullWidth/>
        </Grid>
        <Grid item xs={12} md={6}>
        <Form.Row style={{width:"250%"}}>
        <Form.Group as="Col" controlId="state" style={{width:"40%"}}>
        <Form.Label>State</Form.Label>
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