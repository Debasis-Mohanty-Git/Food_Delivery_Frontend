import { Button, Card } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

const AddressCard = ({ item, showButton, handleSelectAddress }) => {
  return (
    <Card className='flex flex-col gap-4 w-64 p-5 bg-[#1e1e1e] text-gray-400 shadow-lg rounded-xl'>
      <div className='flex items-center gap-3'>
        <HomeIcon className='text-white' />
        <h1 className='font-semibold text-lg text-white'>Home</h1>
      </div>

      <p className='text-sm leading-relaxed'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, dolores?
      </p>

      {showButton && (
        <Button
          variant='outlined'
          fullWidth
          onClick={() => handleSelectAddress(item)}
        >
          Select
        </Button>
      )}
    </Card>
  );
};

export default AddressCard;
