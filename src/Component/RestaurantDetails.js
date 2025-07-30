import React, { useState } from 'react';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import MenuCart from './Restaurant/MenuCart';

const categories = [
  "Pizza",
  "Biriyani",
  "Burger",
  "chicken",
  "Rice"
]

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegeterian only", value: "Vegetarian" },
  { label: "Non Vegetarian", value: "Nonveg" },
  { label: "Seasonal", value: "seasonal" },
]

const menu=[1,1,1,1,1];

const RestaurantDetails = () => {

  const [foodType, setFoodType] = useState("all");

  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name)
  }

  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-400 py-1 mt-10 text-left">Home/Country/indian Restaurant Name/3</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
          <div className="col-span-1 lg:col-span-2">
            <img
              className="w-full h-[40vh] object-cover"
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3Dhttps://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>

          <div>
            <img
              className="w-full h-[40vh] object-cover"
              src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>

          <div>
            <img
              className="w-full h-[40vh] object-cover"
              src="https://cloudfront-eu-central-1.images.arcpublishing.com/williamreed/JCP6P4IVAVOC3GLMJEZ3WQBFTM.png"
              alt=""
            />
          </div>
        </div>

        <div className='px-5 lg:px-20 py-8 bg-gray-400 shadow-md rounded-xl'>
          <section className='space-y-4'>
            <h1 className='text-4xl font-bold text-gray-800'>Restaurant Name</h1>

            <p className='text-gray-600 text-lg leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aspernatur!
            </p>

            <div className='flex items-center text-gray-500 text-base'>
              <LocationPinIcon className='text-green-500' />
              <span className='ml-2'>123 Food Street, Food City</span>
            </div>

            <div className='flex items-center text-gray-500 text-base'>
              <CalendarMonthIcon className='text-blue-500' />
              <span className='ml-2'>July 30, 2025</span>
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
                  name="food_type" value={foodType}>
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
                Food Type
              </Typography>

              <FormControl className='space-y-5 py-10' component={"fieldset"}>
                <RadioGroup onChange={handleFilter}
                  name="food_type" value={foodType}>
                  {categories.map((item) => <FormControlLabel
                    Key={item}
                    value={item}
                    control={<Radio />}
                    label={item} />)}
                </RadioGroup>
              </FormControl>

            </div>
          </div>
        </div>

        <div className='space-y-5 lg:w-[80%] lg:pl-10 text-left'>
          {menu.map(()=><MenuCart />)}
        </div>

      </section>
    </div>
  );
};

export default RestaurantDetails;
