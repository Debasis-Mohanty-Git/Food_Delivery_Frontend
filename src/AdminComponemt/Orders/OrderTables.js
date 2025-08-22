import { Avatar, AvatarGroup, Box, Button, Card, CardHeader, Chip, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantOrder, updateOrderStatus } from '../../State/RestaurantOrder/Action';

const orderStatus=[
    {label:"pending",value:"PENDING"},
    {label:"completed",value:"COMPLETED"},
    {label:"out for delivery",value:"OUT_FOR_DELIVERY"},
    {label:"delivered",value:"DELIVERED"},
]

const OrderTables = () => {
    const jwt = localStorage.getItem("jwt");
    const dispatch = useDispatch();
    const { restaurant, ingredients, menu, restaurantOrder, order } = useSelector(store => store);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        dispatch(fetchRestaurantOrder({
            jwt,
            restaurantId: restaurant.userRestaurant.id
        }))
    }, []);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleUpdateOrder=(orderId,orderStatus)=>{
        dispatch(updateOrderStatus({
            orderId,
            orderStatus,
            jwt:localStorage.getItem("jwt")
        }))
        handleClose();
    }

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    title={"All Orders"}
                    sx={{ pt: 2, alignItems: "center" }}
                />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Image</TableCell>
                                <TableCell align="right">Customer(Email)</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Ingredients</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Update</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurantOrder.orders?.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.id}
                                    </TableCell>
                                    <TableCell align="right">
                                        <AvatarGroup>
                                            {item.items.map((orderItem) => <Avatar src={orderItem.food.images[0]} />)}
                                        </AvatarGroup>
                                    </TableCell>
                                    <TableCell align="right">{item.customer?.fullName}</TableCell>
                                    <TableCell align="right">{item.totalPrice}</TableCell>
                                    <TableCell align="right">{item.items.map((orderItem) => <p>{orderItem.food?.name}</p>)}</TableCell>
                                    <TableCell align="right">
                                        {item.items.map((orderItem) =>
                                            <div>
                                                {orderItem.ingredients.map((ingredient) => <Chip label={ingredient} />)}
                                            </div>
                                        )}
                                    </TableCell>
                                    <TableCell align="right">{item.orderStatus}</TableCell>
                                    <TableCell align='right'>
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                            Update
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            slotProps={{
                                                list: {
                                                    'aria-labelledby': 'basic-button',
                                                },
                                            }}
                                        >
                                            {orderStatus.map((status)=><MenuItem onClick={()=>handleUpdateOrder(item.id,status.value)}>{status.label}</MenuItem>)}
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    )
}

export default OrderTables
