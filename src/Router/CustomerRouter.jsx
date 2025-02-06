import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../customer/components/Cart/Cart'
import  Navigation  from '../customer/components/navigation/Navigation'
import Product from '../customer/components/Product/Product'
import Footer from '../customer/components/footer/footer'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import HomePage from '../customer/pages/Homepage/HomePage'
import CheckOut from '../customer/components/CheckOut/CheckOut'
import Order from '../customer/components/Order/Order'
import OrderDetail from '../customer/components/Order/OrderDetails'
import RegistrationForm from '../customer/Auth/RegistrationForm'
import LoginForm from '../customer/Auth/loginForm'

function CustomerRouter() {
  return (
    <div>
      <div> <Navigation/></div>
      <Routes>
      <Route path='/register' element={<RegistrationForm/>}></Route>
      <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:levelOne/:levelTwo/:levelThre' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<CheckOut/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetail/>}></Route>
      </Routes>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default CustomerRouter
