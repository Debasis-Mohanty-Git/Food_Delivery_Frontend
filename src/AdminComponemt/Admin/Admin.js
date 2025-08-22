import React, { useEffect } from 'react'
import AdminSideBar from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Orders from '../Orders/Orders'
import FoodCategory from '../FoodCategory/FoodCategory'
import Ingredients from '../Ingredients/Ingredients'
import Event from '../Events/Event'
import RestaurantDetails from './RestaurantDetails'
import Menu from '../Menu/menu'
import CreateMenuForm from '../Menu/CreateMenuForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurantOrder } from '../../State/RestaurantOrder/Action'
import { getRestaurantCategory } from '../../State/Restaurant/Action'

const Admin = () => {
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    const {restaurant}=useSelector(store=>store);
    const handleClose=()=>{

    }

    useEffect(()=>{
    if (restaurant.userRestaurant?.id) { 
        dispatch(getRestaurantCategory({
            jwt,
            restaurantId: restaurant.userRestaurant.id
        }));
        dispatch(fetchRestaurantOrder({
            jwt,
            restaurantId: restaurant.userRestaurant.id,           
        }))
    }
}, []);
// dispatch, jwt, restaurant.userRestaurant?.id
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
                        <Route path='/add-menu' element={<CreateMenuForm />}/>
                    </Routes>

                </div>
            </div>
        </div>
    )
}

export default Admin
