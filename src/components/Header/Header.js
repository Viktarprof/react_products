import React from 'react'
import s from './Header.module.css'
import { FaShopify } from 'react-icons/fa';

function Header() {
  return (
    <div> 
        <div className={s.header_container}>
            
              <a href='/'><FaShopify className={s.logo}/> </a> 
        
            <div className={s.header_links}>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/products'>Products</a>
                <a href='/contacts'>Contacts</a>
            </div>
        </div>
    </div>
  )
}

export default Header