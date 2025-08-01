import React, { useState } from 'react';
import OrderCard from './OrderCard';
import { Button } from '@mui/material';

const Orders = () => {
  const [showAll, setShowAll] = useState(false);
  const orders = [1, 1, 1, 1, 1];

  const visibleOrders = showAll ? orders : orders.slice(0, 3);

  return (
    <div className="flex items-center flex-col">
      <h1 className="text-xl text-center py-7 font-semibold">My Orders</h1>

      <div className="space-y-5 w-full lg:w-1/2">
        {visibleOrders.map((item, index) => (
          <OrderCard key={index} />
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
