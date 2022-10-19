import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SelectMatricule from '../../../components/matricule'

export default function AddressForm() {
  
  const [country, setcountry] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChanges = (event) => {
    setcountry(event.target.value);
  };
 

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

 
  const [formData, setFormData] = useState({
    adress: '',
    postalcode: '',
    city: '',
    name: '',
    Fullname: '',
    tax: '',
  })
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
              label="Adress (1)"
              name="Adress (1)"
              autoComplete="Address"
              autoFocus
              value={formData.adress} 
              onChange={event => {setFormData({...formData, adress:event.target.value})}}
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
          <Grid item sm={11} md={6} >
        <TextField  
              required
              fullWidth
              id="City"
              label="City"
              name="City"
              autoComplete="City"
              autoFocus
              value={formData.city} 
              onChange={event => {setFormData({...formData, city:event.target.value})}}
            />
        </Grid> 
        <Grid item xs={11} md={6} >
         <FormControl sx={{  width: '100%' }}>
        <InputLabel id="demo-controlled-open-select-label">Country *</InputLabel>
        <Select
          required
          fullWidth
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={country}
          label="Country"
          onChange={handleChanges}
        >
          <MenuItem value={10}>Tunisia</MenuItem>
          <MenuItem value={20}>France</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={11} >
         <SelectMatricule/>
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

