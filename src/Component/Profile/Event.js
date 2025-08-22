import React, { useEffect } from 'react'
import EventCard from './EventCard'
import { getAllEvents } from '../../State/Restaurant/Action';
import { useDispatch, useSelector } from 'react-redux';

const Event = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const { restaurant } = useSelector(store => store);

  useEffect(() => {
    dispatch(getAllEvents({ jwt }));
  }, [dispatch, jwt]);
  return (
    <div className='mt-5 px-5 flex flex-wrap gap-5'>
      {restaurant.restaurantEvents && restaurant.restaurantEvents.length > 0 ? (
        restaurant.restaurantEvents.map((event) => <EventCard key={event.id} event={event} />)
      ) : (
        <p className="text-center text-gray-500">No events available</p>
      )}
    </div>
  )
}

export default Event
