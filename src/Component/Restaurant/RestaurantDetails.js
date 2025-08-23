import React, { useEffect, useState } from 'react';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import MenuCart from './MenuCart';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById, getRestaurantCategory } from '../../State/Restaurant/Action';
import { grtMenuItemByRestaurantId } from '../../State/Menu/Action';

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegeterian only", value: "Vegeterian" },
  { label: "Non Vegetarian", value: "Nonveg" },
  { label: "Seasonal", value: "Seasonal" },
]

const menu = [1, 1, 1, 1, 1];

const RestaurantDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth, restaurant, menuItem } = useSelector(store => store)

  const { id, city } = useParams();
  const [foodType, setFoodType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("");


  const handleFilter = (e) => {
    setFoodType(e.target.value);
    console.log(e.target.value, e.target.name);
  }

  const handleFilterCategory = (e,value) => {
    setSelectedCategory(value);
    console.log(e.target.value, e.target.name,value);
  }

  console.log("Restaurant", restaurant);
  useEffect(() => {
    dispatch(getRestaurantById({ jwt, restaurantId: id }));
    dispatch(getRestaurantCategory({ jwt, restaurantId: id }));

  }, [])

  useEffect(() => {
    dispatch(grtMenuItemByRestaurantId({
      jwt, 
      restaurantId: id,
      vegetarian: foodType==="Vegetarian",
      nonveg: foodType==="Nonveg",
      seasonal: foodType==="Seasonal",
      foodCategory: selectedCategory,
    }))
  }, [selectedCategory,foodType])

  return (

    <div className="px-5 lg:px-20">
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
          <div className="col-span-1 lg:col-span-2">
            <img
              className="w-full h-[40vh] object-cover"
              src={restaurant.restaurant?.images[0]}
              alt=""
            />
          </div>

          <div>
            <img
              className="w-full h-[40vh] object-cover"
              src="https://cdn.pixabay.com/photo/2017/02/12/16/38/scotch-2060499_1280.jpg"
              alt=""
            />
          </div>

          <div>
            <img
              className="w-full h-[40vh] object-cover"
              src={restaurant.restaurant?.images[2]}
              alt=""
            />
          </div>
        </div>

        <div className='px-5 lg:px-20 py-8 bg-gray-400 shadow-md rounded-xl'>
          <section className='space-y-4'>
            <h1 className='text-4xl font-bold text-gray-800'>{restaurant.restaurant?.name}</h1>

            <p className='text-gray-600 text-lg leading-relaxed'>
              {restaurant.restaurant?.description}
            </p>

            <div className='flex items-center text-gray-500 text-base'>
              <LocationPinIcon className='text-green-500' />
              <span className='ml-2'>{restaurant.restaurant?.address?.city}</span>,
              <span className='ml-2'>{restaurant.restaurant?.address?.streetAddress}</span>
            </div>

            <div className='flex items-center text-gray-500 text-base'>
              <CalendarMonthIcon className='text-blue-500' />
              <span className='ml-2'>{restaurant.restaurant?.openingHours}</span>
            </div>
          </section>
        </div>
      </section>
      <br />
      <Divider />

      <section className='pt-[2rem] lg:flex relative'>
        <div className='space-y-10 lg:w-[20%] filter text-left'>
          <div className='box space-y-5 lg:sticky top-28'>
            {/* Food Type */}
            <div>
              <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>

              <FormControl className='space-y-5 py-10' component={"fieldset"}>
                <RadioGroup onChange={handleFilter}
                  name="food_category"
                  value={foodType}
                >
                  {foodTypes.map((item) => <FormControlLabel
                    key={item.value}
                    value={item.value}
                    control={<Radio />} label={item.label} />)}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            {/*Food Category */}
            <div>
              <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>

              <FormControl className='space-y-5 py-10' component={"fieldset"}>
                <RadioGroup onChange={handleFilterCategory}
                  name="food_type" 
                  value={selectedCategory}
                  >
                  {restaurant.categories.map((item) => <FormControlLabel
                    Key={item}
                    value={item.name}
                    control={<Radio />}
                    label={item.name}
                  />)}
                </RadioGroup>
              </FormControl>

            </div>
          </div>
        </div>

        <div className='space-y-5 lg:w-[80%] lg:pl-10 text-left'>
          {menuItem.menuItems.map((item) => <MenuCart item={item} />)}
        </div>

      </section>
    </div>
  );
};

export default RestaurantDetails;
