import React from 'react'
import AdminSideBar from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Orders from '../Orders/Orders'
import FoodCategory from '../FoodCategory/FoodCategory'
import Ingredients from '../Ingredients/Ingredients'
import Event from '../Events/Event'
import RestaurantDetails from './RestaurantDetails'
import Menu from '../Menu/menu'

const Admin = () => {
    const handleClose=()=>{

    }
    return (
        <div>
            <div className='lg:flex justify-between'>

                <div>
                    <AdminSideBar handleClose={handleClose}/>
                </div>

                <div className='lg:w-[80%] text-left'>

                    <Routes>
                        <Route path='/' element={<Dashboard />}/>
                        <Route path='/orders' element={<Orders />}/>
                        <Route path='/menu' element={<Menu />}/>
                        <Route path='/category' element={<FoodCategory />}/>
                        <Route path='/ingredients' element={<Ingredients />}/>
                        <Route path='/event' element={<Event />}/>
                        <Route path='/details' element={<RestaurantDetails />}/>
                    </Routes>

                </div>
            </div>
        </div>
    )
}

export default Admin
