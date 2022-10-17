import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import SelectVariants from '../../../components/select';
// import InputAdornments from '../../../components/password';
import SelectCountry from '../../../components/selectcountry';
import SelectIdentity from '../../../components/select';
import SelectMatricule from '../../../components/matricule';


export default function Information() {
  return (
    <React.Fragment >
      <Typography variant="h6" gutterBottom>
        User's Info
      </Typography>
      <Grid container spacing={3} >
        <Grid item xs={11} md={6}>
          <TextField
            required
            id="Adresse (1) "
            name="Adresse (1) "
            label="Adresse (1) "
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={11} md={6}>
          <TextField
            required
            id="Postal code"
            name="Postal code"
            label="Postal code"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={11} md={6}>
          <TextField
            required
            id="City"
            name="City"
            label="City"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={11} md={6}>
          <SelectCountry/>
        </Grid>
        <Grid item xs={11} md={6}>
          <TextField
            required
            id="Full name of business owner"
            name="Full name of business owner"
            label="Full name of business owner"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={11} md={6}>
          <SelectIdentity/>
        </Grid>
        <Grid item xs={11} md={6} >
          <SelectMatricule/>
        </Grid>
        <Grid item xs={11} md={6}>
          <TextField
            required
            id="Tax identification number"
            name="Tax identification number"
            label="Tax identification number"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}

