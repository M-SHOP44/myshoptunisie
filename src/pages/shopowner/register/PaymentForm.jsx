import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';


export default function PaymentForm() {

  const [formData, setFormData] = useState({
    cardname: '',
    cardnum: '',
    expirydate: '',
    cvv: ''
  })

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={11} md={6}>
      <TextField 
              required
              fullWidth
              id="Name or card"
              label="Name or card"
              name="Name or card"
              autoComplete="Name or card"
              autoFocus
              value={formData.cardname} 
              onChange={event => {setFormData({...formData, cardname:event.target.value})}}
            />
        </Grid>
        <Grid item xs={11} md={6}>
      <TextField 
              required
              fullWidth
              id="Card number"
              label="Card number"
              name="Card number"
              autoComplete="Card number"
              autoFocus
              value={formData.cardnum} 
              onChange={event => {setFormData({...formData, cardnum:event.target.value})}}
            />
        </Grid>
        <Grid item xs={11} md={6}>
      <TextField 
              required
              fullWidth
              id="Expiry date"
              label="Expiry date"
              name="Expiry date"
              autoComplete="Expiry date"
              autoFocus
              value={formData.expirydate} 
              onChange={event => {setFormData({...formData, expirydate:event.target.value})}}
            />
        </Grid>
        <Grid item xs={11} md={6}>
      <TextField 
              required
              fullWidth
              id="CVV"
              label="CVV"
              name="CVV"
              autoComplete="CVV"
              autoFocus
              value={formData.cvv} 
              onChange={event => {setFormData({...formData, cvv:event.target.value})}}
            />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="success" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}