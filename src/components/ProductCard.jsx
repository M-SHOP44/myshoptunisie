import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { BasketContext } from '../context/BasketContext';
import { Margin } from '@mui/icons-material';
import Grid from '@mui/material/Grid';


export default function ProductCard({title,image,price}) {
  const { products , setProducts } = React.useContext(BasketContext);

  return (
<Grid container spacing={1} >  
 <Card style={{width:'70%'}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {price}
          </Typography>
          <Button color='primary'>ADD</Button>
        </CardContent>
      </CardActionArea>
    </Card> 
</Grid>

   
     );
}