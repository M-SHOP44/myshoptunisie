import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import IP from "../utils/api.js"
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function MultiActiCard() {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    axios
      .get(`${IP}/product/`)
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', margin: '8rem',paddingTop: '2rem', gap:'1rem'}}>
   <div> 
    <Card style={{}}  sx={{ maxWidth: 345 } } >
      <CardActionArea>
        <CardMedia 
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt=" " />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
        Add to Cart
      </Button>
    </CardActions> 
  </Card>
 </div> 

  <div>
    <Card style={{}} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt=" " />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
      <Button size="small" color="primary">
        Add to Cart
      </Button>
    </CardActions>
      </Card>
    </div>

    <div>
    <Card style={{}}  sx={{ maxWidth: 345 } } >
      <CardActionArea>
        <CardMedia 
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt=" " />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    
      <CardActions>
      <Button size="small" color="primary">
        Add to Cart
      </Button>
    </CardActions>
  </Card>
  </div>
  <div>
    <Card style={{}}  sx={{ maxWidth: 345 } } >
      <CardActionArea>
        <CardMedia 
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt=" " />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    
      <CardActions>
      <Button size="small" color="primary">
        Add to Cart
      </Button>
    </CardActions>
  </Card>
  </div>
</div>
  );
  }
