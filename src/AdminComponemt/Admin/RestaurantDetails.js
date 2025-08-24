import React from 'react'
import { Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useDispatch, useSelector } from 'react-redux';
import { updateRestaurantStatus } from '../../State/Restaurant/Action';

const RestaurantDetails = () => {
  const isOpen = true;
  const { restaurant } = useSelector(store => store);
  const dispatch=useDispatch();
  console.log("restaurant details",restaurant)
  const handleRestaurantStatus = () => {
    dispatch(updateRestaurantStatus({
      restaurantId:restaurant.userRestaurant.id,
      jwt:localStorage.getItem("jwt")
    }));
  }
  return (
    <div className='lg:px-20 px-5'>
      <div className='py-5 flex justify-center items-center gap-5'>
        <h1 className='text-2xl lg:text-6xl text-center font-bold p-5'>{restaurant.userRestaurant?.name}</h1>
        <div>
          <Button className='py-[1rem] px-[2rem]' color={!restaurant.userRestaurant?.open ? "primary" : "error"}
            onClick={handleRestaurantStatus} size='large' variant='contained'>
            {restaurant.userRestaurant?.open ? "close" : "open"}

          </Button>
        </div>
      </div>

      <div className="w-full my-4">
        {/* Restaurant */}
        <Card className="w-full">
          <CardHeader
            title={<span className="text-gray-300 text-lg font-semibold">Restaurant</span>}
          />
          <CardContent>
            <div className="space-y-4 text-gray-200">

              <div className="flex">
                <p className="w-48 font-medium">Owner</p>
                <p className="text-gray-400">- {restaurant.userRestaurant?.owner?.fullName}</p>
              </div>

              <div className="flex">
                <p className="w-48 font-medium">Restaurant Name</p>
                <p className="text-gray-400">- {restaurant.userRestaurant?.name}</p>
              </div>

              <div className="flex">
                <p className="w-48 font-medium">Cuisine Type</p>
                <p className="text-gray-400">- {restaurant.userRestaurant?.cuisinType}</p>
              </div>

              <div className="flex">
                <p className="w-48 font-medium">Opening Hours</p>
                <p className="text-gray-400">- {restaurant.userRestaurant?.openingHours}</p>
              </div>

              <div className="flex">
                <p className="w-48 font-medium">Status</p>
                <p className="text-gray-400">
                  {restaurant.userRestaurant?.open? (
                    <span className="px-5 py-2 rounded-full bg-green-400 text-gray-950">
                      Open
                    </span>
                  ) : (
                    <span className="px-5 py-2 rounded-full bg-red-400 text-gray-50">
                      Closed
                    </span>
                  )}
                </p>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-4">

        {/* Address */}
        <div className="w-full lg:w-1/2">
          <Card className="w-full">
            <CardHeader
              title={<span className="text-gray-300 text-lg font-semibold">Address</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">

                <div className="flex">
                  <p className="w-48 font-medium">Country</p>
                  <p className="text-gray-400">- {restaurant.userRestaurant?.address?.country}</p>
                </div>

                <div className="flex">
                  <p className="w-48 font-medium">City</p>
                  <p className="text-gray-400">- {restaurant.userRestaurant?.address?.city}</p>
                </div>

                <div className="flex">
                  <p className="w-48 font-medium">Postal Code</p>
                  <p className="text-gray-400">- {restaurant.userRestaurant?.address?.postalCode}</p>
                </div>

                <div className="flex">
                  <p className="w-48 font-medium">Street Address</p>
                  <p className="text-gray-400">- {restaurant.userRestaurant?.address?.streetAddress}</p>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <div className="w-full lg:w-1/2">
          <Card className="w-full">
            <CardHeader
              title={<span className="text-gray-300 text-lg font-semibold">Contact</span>}
            />
            <CardContent>
              <div className="space-y-3 text-gray-200">

                <div className="flex">
                  <p className="w-48 font-medium">Email</p>
                  <p className="text-gray-400">- {restaurant.userRestaurant?.contactInformation?.email}</p>
                </div>

                <div className="flex">
                  <p className="w-48 font-medium">Mobile</p>
                  <p className="text-gray-400">- {restaurant.userRestaurant?.contactInformation?.mobile}</p>
                </div>

                <div className="flex items-center gap-3">
                  <p className="w-48 font-medium">Around With</p>
                  <div className="flex gap-3 text-gray-400">
                    <a href={restaurant.userRestaurant?.contactInformation?.instagram}><InstagramIcon sx={{ fontSize: "2rem" }} /></a>
                    <a href="#"><LinkedInIcon sx={{ fontSize: "2rem" }} /></a>
                    <a href={restaurant.userRestaurant?.contactInformation?.whatsapp}><WhatsAppIcon sx={{ fontSize: "2rem" }} /></a>
                    <a href="#"><TwitterIcon sx={{ fontSize: "2rem" }} /></a>
                    <a href="#"><FacebookIcon sx={{ fontSize: "2rem" }} /></a>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  )
}

export default RestaurantDetails
