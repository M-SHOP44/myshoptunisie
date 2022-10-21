import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import axios from 'axios';
import IP from "../../utils/api"
import { BasketContext } from "../../context/BasketContext";
import '../../App.css'
import Basket from "../../components/Basket";

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
    let  data = [...basket]
    const x = data.find( product => product._id == item._id)
    if ( x ) {
      basket.map( product => {
        if ( product._id == item._id ) {
          product.qty ++
        }
        return product 
      })
    } else {
      data.push(item)
    }
      setBasket(data)
      localStorage.setItem('basket',JSON.stringify(data))
  }

  return (
   
   <div  className="container">
   <div className="products">
      {
        products.map((product)=> <ProductCard buy={() => buyItem({...product , qty: 1 })} image={"http://localhost:3636/"+product.image} title={product.title} price={product.price}/>)
      }
   
    </div>
    <div className="sidebar-basket">
      {
        basket.length == 0 ?
        <div>
        <span></span>
        <h2>your cart is empty</h2>
       </div>
      :
      <Basket/>
      
      }
   
   </div>
   </div>
   
   
    
  );
  }
