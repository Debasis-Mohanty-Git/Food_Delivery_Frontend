import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = ({item,order}) => {
    return (
        <Card className="flex flex-col sm:flex-row justify-between items-center gap-4 p-5 bg-white shadow-md rounded-xl">
            {/* Left Section */}
            <div className="flex items-center gap-5">
                <img
                    className="h-20 w-20 rounded-lg object-cover"
                    src={item.food?.images[0]}
                    alt="Biryani"
                />

                <div className="text-left">
                    <p className="text-lg font-semibold">Name: {item.food?.name}</p>
                    <p className="text-gray-600">Price: {item.totalPrice}</p>
                </div>
            </div>

            
            <Button
                className="cursor-not-allowed"
                sx={{ fontWeight: 'bold', px: 3 }}
            >
                {order.orderStatus}
            </Button>
        </Card>

    )
}

export default OrderCard
