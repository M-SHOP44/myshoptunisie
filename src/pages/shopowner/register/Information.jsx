import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SelectVariants from '../../../Component/select';
import InputAdornments from '../../../Component/password';
import SelectCountry from '../../../Component/selectcountry';
import SelectIdentity from '../../../Component/select';
import SelectMatricule from '../../../Component/matricule';


export default function Information() {
  return (
    <React.Fragment >
      <Typography variant="h6" gutterBottom>
        User's Info
      </Typography>
      <Grid container spacing={3} >
        <Grid item xs={12} md={6}>
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
        
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={6}>
          <SelectCountry/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="First and last names of the owner of the company or legal representative"
            name="First and last names of the owner of the company or legal representative"
            label="First and last names of the owner of the company or legal representative"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SelectIdentity/>
        </Grid>
        <Grid item xs={12} md={6} >
          <SelectMatricule/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="Identifiant fiscal"
            name="Identifiant fiscal"
            label="Identifiant fiscal"
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

