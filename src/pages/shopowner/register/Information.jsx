import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


export default function AddressForm({formData,setFormData}) {
  


 
 
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={11} md={6}>
        <TextField  
              required
              fullWidth
              id="Adress (1)"
              label="Address "
              name="Adress (1)"
              autoComplete="Address"
              autoFocus
              value={formData.address} 
              onChange={event => {setFormData({...formData, address:event.target.value})}}
              />
      </Grid>
      <Grid item sm={11} md={6}>
        <TextField  
              required
              fullWidth
              id="Postal code"
              label="Postal code"
              name="Postal code"
              autoComplete="Postal code"
              autoFocus
              value={formData.postalcode} 
              onChange={event => {setFormData({...formData, postalcode:event.target.value})}}
            />
          </Grid>
          <Grid item sm={11} >
        <TextField  
              required
              fullWidth
              id="City"
              label="Ville"
              name="City"
              autoComplete="City"
              autoFocus
              value={formData.city} 
              onChange={event => {setFormData({...formData, city:event.target.value})}}
            />
        </Grid> 
   
        
        <Grid item sm={11} >
        <TextField  
              required
              fullWidth
              id="Full name of business owner"
              label="Full name of business owner"
              name="Full name of business owner"
              autoComplete="Full name of business owner"
              autoFocus
              value={formData.Fullname} 
              onChange={event => {setFormData({...formData, Fullname:event.target.value})}}
            />
        </Grid>
        <Grid item xs={11} >
          <TextField 
                required
                fullWidth
                id="Tax identification number"
                label="Tax identification number"
                name="Tax identification number"
                autoComplete="Tax identification number"
                autoFocus
                value={formData.tax} 
                onChange={event => {setFormData({...formData, tax:event.target.value})}}
              />
        </Grid> 
      </Grid>
    </React.Fragment>
  );
}

