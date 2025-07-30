import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
  return (
    <Card className='w-[18rem]'>
      <div className={`${true ? 'cursor-pointer' : "cursor-not-allowed"} relative`}>
        <img className='w-full h-[10rem] rounded-t-md object-cover'
          src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />

        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={true ? "success" : "error"}
          label={true ? "open" : "closed"}
        />
      </div>
      <div className='p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
          <p className='font-semibold text-lg'>Restaurant Name</p>
           <p className='text-gray-500 text-sm'>Description</p>
        </div>

        <div>
          <IconButton>
            {true?<FavoriteIcon />:<FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>

  )
}

export default RestaurantCard
