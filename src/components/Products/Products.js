import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom'
import s from './Products.module.css'

function Products(props) {
  const {id, title, image, rating} = props;

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < Math.round(rating)) {
      stars.push(<FaStar key={i} className={s.star} />);
    } else {
      stars.push(<FaStar key={i} className={s.emptyStar} />);
    }
  }

  return (
    <div className={s.card}>
      <Link to={`/products/${id}`}>
        <h3>{title}</h3>
      </Link>
      <img width={200} src={image} alt={title} />
      <div>{stars}</div>
      <p>Текущий рейтинг: {Math.round(rating)}</p>
    </div>
  );
}

export default Products;
