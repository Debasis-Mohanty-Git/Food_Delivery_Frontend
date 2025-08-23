import React, { useEffect } from 'react'
import "../Home/Home.css"
import MultiItemCarousel from './MultiItemCarousel'
import RestaurantCard from '../Restaurant/RestaurantCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRestaurants } from '../../State/Restaurant/Action'
import { useNavigate } from 'react-router-dom'
import { findCart } from '../../State/Cart/Action'

const Home = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant } = useSelector(store => store);
  const navigate = useNavigate();

  useEffect(() => {
    if (jwt) {
      dispatch(getAllRestaurants(jwt));
      dispatch(findCart(jwt));
    }
  }, [jwt]);

  return (
    <div className='pb-10'>

      <section className="banner relative flex flex-col justify-center items-center h-[90vh] px-4 text-center overflow-hidden">
        {/* Background overlay */}
        <div className="cover absolute inset-0 bg-black/50 pointer-events-none"></div>

        <div className="z-10 w-full max-w-md md:max-w-2xl lg:max-w-4xl">
          <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold py-5">
            Tummy Time
          </p>
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-4xl leading-relaxed">
            Your meals, your moments — delivered fresh, fast & right on time⏰ 
          </p>
        </div>

        
        <div className="fadout absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/70 to-transparent"></div>
      </section>

      {jwt && (
        <>
          <section className='p-10 lg:py-10 lg:px-20'>
            <p className='text-2xl font-semibold text-gray-400 py-3 pb-10 text-left'>Top Meals</p>
            <MultiItemCarousel />
          </section>

          <section className='px-5 lg:px-20'>
            <h1 className='text-2xl font-semibold text-gray-400 py-3 text-left'>
              Order From our Handpicked Favorites
            </h1>
            <div className='flex flex-wrap items-center justify-around gap-5'>
              {restaurant.restaurants?.map((item) => (
                <RestaurantCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  )
}

export default Home;
