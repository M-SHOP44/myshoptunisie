import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { BasketContext } from "../context/BasketContext";

export default function ProductCard({ title, image, price, buy }) {
  return (
    <Card style={{ width: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          className="card-media"
          image={image}
          alt="green iguana"
         
        />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {price} TND
          </Typography>
          <Button style={{color:'white'}} variant="contained"  onClick={buy} sx={{ ml: 15 }}>
            BUY
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
