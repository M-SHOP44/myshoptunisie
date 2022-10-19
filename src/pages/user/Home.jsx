import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import axios from 'axios';
import IP from "../../utils/api"
import { BasketContext } from "../../context/BasketContext";



export default function MultiActiCard() {
  const [products, setProducts] = useState([]);
  const { basket, setBasket } = React.useContext(BasketContext);

  
  useEffect(() => {
    
    axios.get(`${IP}/product/`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const buyItem = ( item ) => {
    const data = [...basket , item ]
      setBasket(data)
      localStorage.setItem('basket',JSON.stringify(data))
  }

  return (
    <div className="container" >
      {
        products.map((product)=> <ProductCard buy={() => buyItem({ title: product.title })} image={"http://localhost:3636/"+product.image} title={product.title} price={product.price}/>)
      }
    </div>

  );
  }
