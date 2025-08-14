import { Chip, IconButton } from '@mui/material';
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../State/Cart/Action';

const CartItem = ({ item }) => {
  const navigate = useNavigate();
  const { auth, cart } = useSelector(store => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleUpdateCartItem = (value) => {
    if (value === -1 && item.quantity === 1) {
      handleRemoveCartItem();
      return;
    }

    const reqData = {
      data: { cartItemId: item.id, quantity: item.quantity + value },
      jwt: auth.jwt || jwt
    };

    dispatch(updateCartItem(reqData));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem({ cartItemId: item.id, jwt: auth.jwt || jwt }));
  };


  return (
    <div className='px-5 py-4'>
      <div className='flex items-start gap-4'>
        <img
          className='h-20 w-20 object-cover rounded'
          src={item.food.images[0]}
          alt=""
        />

        <div className='flex flex-col w-full gap-2'>
          <div className='flex justify-between'>
            <p className='text-base font-semibold'>{item.food.name}</p>
            <p className='text-sm text-gray-600 pr-7'>₹ {item.totalPrice}</p>
          </div>

          <div className='flex items-center gap-2'>
            <IconButton size='small' onClick={() => handleUpdateCartItem(-1)}>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className='w-6 text-center text-sm'>{item.quantity}</span>
            <IconButton size='small' onClick={() => handleUpdateCartItem(1)}>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>

          {/* Chips */}
          <div className='flex gap-2 flex-wrap'>
            {item.ingredients?.map((ingredient) => (
              <Chip label={ingredient} size="small" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
