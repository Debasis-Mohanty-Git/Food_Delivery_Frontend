import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateRestaurantForm from '../../AdminComponemt/CreateRestaurantForm/CreateRestaurantForm'
import Admin from '../../AdminComponemt/Admin/Admin'
import { useSelector } from 'react-redux'

const AdminRoute = () => {

  const { restaurant } = useSelector(store => store);
  return (
    <div>
      <Routes>
        <Route path='/*' element={
          !restaurant.userRestaurant ?
            <CreateRestaurantForm /> : <Admin />}>

        </Route>
      </Routes>
    </div>
  )
}

export default AdminRoute

