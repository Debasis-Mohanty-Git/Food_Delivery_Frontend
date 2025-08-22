import { Avatar, Box, Card, CardActions, CardHeader, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFood, grtMenuItemByRestaurantId } from '../../State/Menu/Action';

const MenuTable = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { restaurant, ingredients, menuItem } = useSelector(store => store);

    useEffect(() => {
        dispatch(grtMenuItemByRestaurantId({
            restaurantId: restaurant.userRestaurant.id,
            jwt: localStorage.getItem("jwt"),
            vegetarian: false,
            seasonal: false,
            nonveg: false,
            foodCategory: ""
        }));
    }, []);

    const handleDeleteFood = (foodId) => {
        dispatch(deleteFood({
            foodId,
            jwt
        }))
    }

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    action={
                        <IconButton onClick={() => navigate("/admin/restaurant/add-menu")} aria-label='settings'>
                            <CreateIcon />Create Menu
                        </IconButton>
                    }
                    title={"Menu"}
                    sx={{ pt: 2, alignItems: "center" }}
                />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Ingredients</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Avaibilty</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {menuItem.menuItems.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left"><Avatar src={item.images[0]} /></TableCell>
                                    <TableCell align="left">{item.name}</TableCell>
                                    <TableCell align="left">{item.ingredientsItems?.map((ingredientsItems) => <Chip label={ingredientsItems.name} />)}</TableCell>
                                    <TableCell align="left">₹ {item.price}</TableCell>
                                    <TableCell align="left">{item.available ? "in_stoke" : "out_of_stoke"}</TableCell>
                                    <TableCell align="left">
                                        <IconButton color='error' onClick={()=>handleDeleteFood(item.id)}>
                                            <DeleteIcon />
                                        </IconButton>
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

export default MenuTable
