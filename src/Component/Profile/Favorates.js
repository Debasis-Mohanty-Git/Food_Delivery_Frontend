import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'
import { store } from '../../State/Store'
import { useSelector } from 'react-redux'

const Favorates = () => {
    const {auth}=useSelector(store=>store)

  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center z-10'>My Favorites</h1>
      <div className='flex flex-wrap justify-center gap-5'>
          {auth.favorites.map((item)=><RestaurantCard item={item}/>)}
      </div>
    </div>
  )
}

export default Favorates
