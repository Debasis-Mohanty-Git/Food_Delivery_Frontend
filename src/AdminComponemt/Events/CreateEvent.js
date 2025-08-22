import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent, getRestaurantEvent } from "../../State/Restaurant/Action";
import LocationPinIcon from '@mui/icons-material/LocationPin';
const CreateEvent = () => {
  const { restaurant } = useSelector((store) => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (restaurant?.userRestaurant?.id) {
      dispatch(
        getRestaurantEvent({
          jwt,
          restaurantId: restaurant.userRestaurant.id,
        })
      );
    }
  }, [jwt, restaurant?.userRestaurant?.id, dispatch]);

  return (
    <div className="min-h-screen p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurant?.restaurantEvents && restaurant.restaurantEvents.length > 0 ? (
          restaurant.restaurantEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden"
            >
              <img
                src={event.imageUrl}
                alt={event.eventName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {event.eventName}
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                  <span className="font-semibold">StartAt:</span>{" "}
                  {event.endDate}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">EndAt:</span>{" "}
                  {event.startDate}
                </p>
                <p className="text-gray-600 mt-2 text-sm"><LocationPinIcon /> {event.location}</p>

                <div className="mt-auto flex justify-end">
                  <button
                    onClick={() => dispatch(deleteEvent({ jwt, eventId: event.id }))}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Delete
                  </button>
                </div>

              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No events available
          </p>
        )}

      </div>
    </div>
  );
};

export default CreateEvent;
