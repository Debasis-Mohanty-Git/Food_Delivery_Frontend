import { Chip, IconButton } from '@mui/material';
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className='px-5 py-4'>
      <div className='flex items-start gap-4'>
        <img
          className='h-20 w-20 object-cover rounded'
          src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />

        <div className='flex flex-col w-full gap-2'>
          <div className='flex justify-between'>
            <p className='text-base font-semibold'>Biriyani</p>
            <p className='text-sm text-gray-600 pr-7'>Price</p>
          </div>

          <div className='flex items-center gap-2'>
            <IconButton size='small'>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className='w-6 text-center text-sm'>5</span>
            <IconButton size='small'>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>

          {/* Chips */}
          <div className='flex gap-2 flex-wrap'>
            {[1, 1, 1].map((_, i) => (
              <Chip key={i} label="bread" size="small" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
