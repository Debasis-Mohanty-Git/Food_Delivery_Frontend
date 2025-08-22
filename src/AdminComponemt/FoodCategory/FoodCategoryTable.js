import { Box, Card, CardActions, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateFoodCategoryForm from './CreateFoodCategoryForm';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantCategory } from '../../State/Restaurant/Action';
const orders = [1, 1, 1, 1, 1];
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const FoodCategoryTable = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch=useDispatch();
    const {restaurant}=useSelector(store=>store);
    const jwt=localStorage.getItem("jwt")

    useEffect(()=>{
        if (restaurant.userRestaurant?.id) { 
            dispatch(getRestaurantCategory({
                jwt,
                restaurantId: restaurant.userRestaurant.id
            }));    
        }
    }, []);
    return (
        <Box>
            <Card className='mt-12'>
                <CardHeader
                    action={
                        <IconButton aria-label='settings' onClick={handleOpen}>
                            <CreateIcon />Edit
                        </IconButton>
                    }
                    title={"Food Category"}
                    sx={{ pt: 2, alignItems: "center" }}
                />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" sx={{ bgcolor: '#22d3ee' }}>Id</TableCell>
                                <TableCell align="left" sx={{ bgcolor: '#22d3ee' }}>Name</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurant.categories.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">{item.id}</TableCell>
                                    <TableCell align="left">{item.name}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <CreateFoodCategoryForm />
                    </Typography>

                </Box>
            </Modal>
        </Box>


    )
}

export default FoodCategoryTable
