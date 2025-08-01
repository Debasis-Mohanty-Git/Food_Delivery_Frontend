import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
    return (
        <Card className="flex flex-col sm:flex-row justify-between items-center gap-4 p-5 bg-white shadow-md rounded-xl">
            {/* Left Section */}
            <div className="flex items-center gap-5">
                <img
                    className="h-20 w-20 rounded-lg object-cover"
                    src="https://assets.zeezest.com/blogs/PROD_world%20famous%20biryani%20cover_1705647173650.jpg"
                    alt="Biryani"
                />

                <div className="text-left">
                    <p className="text-lg font-semibold">Name: Biryani</p>
                    <p className="text-gray-600">Price: ₹809</p>
                </div>
            </div>

            
            <Button
                className="cursor-not-allowed"
                sx={{ fontWeight: 'bold', px: 3 }}
            >
                Status
            </Button>
        </Card>

    )
}

export default OrderCard
