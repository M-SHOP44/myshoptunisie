import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from 'axios';
import IP from "../utils/api.js"



export default function MultiActiCard() {
  const [products, setProducts] = useState([]);
 

  
  useEffect(() => {
    
    axios.get(`${IP}/product/`)
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container" >
      {
        products.map((product)=> <ProductCard image={"http://localhost:3636/"+product.image} title={product.title} price={product.price}/>)
      }
    </div>

  );
  }
