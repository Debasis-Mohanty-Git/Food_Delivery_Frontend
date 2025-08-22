import { Button, Card } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { useSelector } from 'react-redux';

const AddressCard = ({ item, showButton, handleSelectAddress }) => {
  const { order } = useSelector((store) => store);
  const { user } = useSelector((store) => store.auth);
  return (
    <Card className='flex flex-col gap-4 w-64 p-5 bg-[#1e1e1e] text-gray-400 shadow-lg rounded-xl'>
      <div className='flex items-center gap-3'>
        <HomeIcon className='text-white' />
        <h1 className='font-semibold text-lg text-white'>{user.fullName}</h1>
      </div>


      <p className='text-sm leading-relaxed'>
        {item.deliveryAddress?.streetAddress},{item.deliveryAddress?.stateProvince}
        ,{item.deliveryAddress?.city},{item.deliveryAddress?.postalCode}
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
