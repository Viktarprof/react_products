import React from 'react'
import s from './ProductsPages.module.css'
import Products from '../../Products/Products'

function ProductsPages(props) {
  const { products } = props
  console.log(products);

  return (
    <div className={s.products_container}>
        {products.map((el) => 
                    <Products
                        key={el.id}
                        id = {el.id}
                        title={el.title}
                        price={el.price}
                        image={el.image}
                        rating={el.rating.rate}
                    />)}
    </div>
  )
}

export default ProductsPages