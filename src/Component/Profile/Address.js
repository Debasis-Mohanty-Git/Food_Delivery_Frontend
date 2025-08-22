import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useSelector } from "react-redux";

const Address = () => {
  const { order } = useSelector((store) => store);
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="w-full max-w-md mx-auto mt-10 ml-4 space-y-4">
      {order.orders?.map((ord) => (
        <Card
          key={ord.id}
          className="w-full shadow-lg rounded-2xl border border-gray-200"
        >
          <CardContent className="flex items-start gap-3">
            <LocationOnIcon className="text-red-500 mt-1" />

            <div>
              <Typography variant="h6" className="font-semibold text-gray-800">
                Delivery Address
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                {user?.fullName}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                {ord.deliveryAddress?.streetAddress}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                {ord.deliveryAddress?.stateProvince},{" "}
                {ord.deliveryAddress?.postalCode}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                {user?.email}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Address;
