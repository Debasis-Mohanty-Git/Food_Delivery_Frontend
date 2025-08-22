import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import RestaurantDetails from '../Restaurant/RestaurantDetails'
import Cart from '../Cart/Cart'
import Profile from '../Profile/Profile'
import Home from '../Home/Home'
import Auth from '../Auth/Auth'
import PaymentSuccess from '../PaymentSuccess/PaymentSuccess'
import SearchResults from '../Navbar/SearchResults '
 

const CustomerRouter = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/account/:register" element={<Home />}></Route>
        <Route path="/restaurant/:city/:title/:id" element={<RestaurantDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/my-profile/*" element={<Profile />}></Route>
        <Route path="/payment/success/:id" element={<PaymentSuccess />}></Route>
        <Route path="/search" element={<SearchResults />}></Route>
      </Routes>

      <Auth />
    </div>
  )
}

export default CustomerRouter
