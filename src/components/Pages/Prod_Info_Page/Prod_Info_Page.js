import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import s from './Prod_Info_Page.module.css'

function Prod_Info_Page() {

  
  let [products, setProducts] = useState([])
  let {id} = useParams()


  useEffect(()=>{
    let url = `https://fakestoreapi.com/products/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
  },[])


  const stars = [];
  if (products.rating && products.rating.rate) { // проверяем наличие свойства 'rating' и 'rate' в объекте "products"
    for(let i = 1; i <= 5; i++){
      if(i <= Math.round(products.rating.rate)){
        stars.push(<FaStar key={i} className={s.star} />);
      } else {
        stars.push(<FaStar key={i} className={s.emptyStar} />);
      }
    }
  }

  const styles = {color: products.price > 100 ? '#ff5561' : '#28ca41'}

  return (
  <div className={s.prod_info}>
  <div className={s.card}>
        <div className={s.btns}>
          <button className={s.close_button}></button>
          <button></button>
          <button><AiOutlineArrowsAlt className={s.btn_arowe}/></button>
        </div>
        <div className={s.info}>
            <h3>{products.title}</h3>
            <img width={100} src={products.image} alt={products.title}/>
            <p style={styles}>Price: {products.price} $</p>
            <p>Descriptions: {products.description}</p>
            <p>{stars}</p>
        </div>
      </div>
  </div>
  )
}

export default Prod_Info_Page