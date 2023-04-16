import React, { useEffect, useState } from 'react'
import './App.css'
import { product_req } from './components/request/Request'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import HomePages from './components/Pages/HomePages/HomePages'
import AboutPages from './components/Pages/AboutPages/AboutPages'
import ContactsPages from './components/Pages/ContactsPages/ContactsPages'
import ProductsPages from './components/Pages/ProductsPages/ProductsPages'
import NotFoundPages from './components/Pages/NotFoundPages/NotFoundPages'
import Prod_Info_Page from './components/Pages/Prod_Info_Page/Prod_Info_Page'
import Footer from './components/Footer/Footer'

export { useParams } from "react-router-dom"

function App() {
    const [products, setProduct] = useState([])
    useEffect(()=>{
        localStorage.setItem('products', JSON.stringify(products))
    },[products])

    useEffect(()=>{
        let productItem = JSON.parse(localStorage.getItem('products'));
        setProduct(productItem);
        product_req(setProduct)
    },[])

  return (
    <div>
        <Header/>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePages/>}/>
                    <Route path='/about' element={<AboutPages/>}/>
                    <Route path='/contacts' element={<ContactsPages/>}/>
                    <Route path='/products' element={<ProductsPages 
                        products = {products}/>}/>
                    <Route path='/products/:id' element={<Prod_Info_Page 
                        products = {products}/>}/>
                    <Route path='*' element={<NotFoundPages/>}/>
                </Routes>
            </Router>
        <Footer/>
    </div>
  )
}

export default App