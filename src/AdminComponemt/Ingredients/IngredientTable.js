import { Box, Button, Card, CardActions, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIngredientForm from './CreateIngredientForm';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsOfRestaurant, updateIngredientStock } from '../../State/Ingredients/Action';
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
const orders = [1, 1, 1, 1, 1];

const IngredientTable = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const jwt = localStorage.getItem("jwt");
    const dispatch = useDispatch();
    const {restaurant,ingredients}=useSelector(store=>store)
    useEffect(()=>{
        dispatch(getIngredientsOfRestaurant({
            jwt,
            id:restaurant.userRestaurant.id
        }))

    },[]);

    const handleUpdateStock=(id)=>{
        dispatch(updateIngredientStock({
            id,
            jwt
        }))
    }

    return (
        <Box>
            <Card className='mt-5'>
                <CardHeader
                    action={
                        <IconButton aria-label='settings' onClick={handleOpen}>
                            <CreateIcon />Edit
                        </IconButton>
                    }
                    title={"Ingredient"}
                    sx={{ pt: 2, alignItems: "center" }}
                />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" sx={{ bgcolor: '#22d3ee' }}>Id</TableCell>
                                <TableCell align="left" sx={{ bgcolor: '#22d3ee' }}>Name</TableCell>
                                <TableCell align="left" sx={{ bgcolor: '#22d3ee' }}>Category</TableCell>
                                <TableCell align="left" sx={{ bgcolor: '#22d3ee' }}>Availability</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {ingredients.ingredients.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">{item.id}</TableCell>
                                    <TableCell align="left">{item.name}</TableCell>
                                    <TableCell align="left">{item.category.name}</TableCell>
                                    <TableCell align="left">
                                        <Button onClick={()=>handleUpdateStock(item.id)}>
                                            {item.inStoke?"in_Stoke":"out_of_stoke"}
                                        </Button>
                                    </TableCell>
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
                        <CreateIngredientForm />
                    </Typography>

                </Box>
            </Modal>
        </Box>
    )
}

export default IngredientTable
