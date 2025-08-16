import React from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { green } from '@mui/material/colors';

const PaymentSuccess = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="bg-gray-400 shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
                <div className="flex justify-center">
                    <TaskAltIcon sx={{ fontSize: "5rem", color: green[500] }} />
                </div>

                <h1 className="mt-4 text-3xl font-bold text-green-600">
                    Order Successful!
                </h1>

                <p className="mt-3 text-gray-700 text-lg">
                    Thank you for your order! We truly appreciate your trust and can’t wait to delight you with our food.
                </p>

                <p className="mt-2 text-gray-500 text-base">
                    Have a great day and see you again soon!
                </p>

                <button
                    onClick={() => window.location.href = '/'}
                    className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow-md transition duration-200"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default PaymentSuccess;
