import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { BasketContext } from "../context/BasketContext";

export default function ProductCard({ title, image, price, buy }) {
  return (
    <Card style={{ width: "70%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {price} TND
          </Typography>
          <Button variant="contained" onClick={buy} sx={{ ml: 16 }} >
            BUY
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
