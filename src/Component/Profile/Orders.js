import React, { useEffect, useState } from 'react';
import OrderCard from './OrderCard';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersOrder } from '../../State/Order/Action';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const [showAll, setShowAll] = useState(false);
  const orders = [1, 1, 1, 1, 1];
  const navigate = useNavigate();
  const { auth, cart,order } = useSelector(store => store);
  const jwt = localStorage.getItem("jwt");
  const visibleOrders = showAll ? orders : orders.slice(0, 3);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersOrder(jwt));
  }, [auth.jwt]);

  return (
    <div className="flex items-center flex-col">
      <h1 className="text-xl text-center py-7 font-semibold">My Orders</h1>

      <div className="space-y-5 w-full lg:w-1/2">
        {order.orders?.map((order) =>order.items.map((item)=>
          <OrderCard  item={item} order={order}/>
        ))}

        {orders.length > 3 && (
          <div className="flex justify-center pt-2">
            <Button
              variant="outlined"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
