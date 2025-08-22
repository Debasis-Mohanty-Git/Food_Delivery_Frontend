import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createIngredient, createIngredientCategory } from '../../State/Ingredients/Action';

const CreateIngredientForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        categoryId: ""
    });
    const jwt = localStorage.getItem("jwt");
    const dispatch = useDispatch();
    const { restaurant, ingredients } = useSelector(store => store);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            ...formData,
            restaurantId: restaurant.userRestaurant.id
        };
        console.log("Restaurant from Redux:", restaurant.userRestaurant);

        dispatch(createIngredient({ data, jwt }))
        console.log(data);

    }
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData, [name]: value
        })

    }

    return (
        <div className=''>
            <div className='p-5'>
                <h1 className='text-gray-400 text-center text-xl pb-10'>Create Category</h1>

                <form onSubmit={handleSubmit} className='space-y-4'>

                    <TextField
                        fullWidth
                        id='name'
                        name='name'
                        label="Name"
                        variant='outlined'
                        onChange={handleInputChange}
                        value={formData.name}
                    />

                    <FormControl sx={{ minWidth: 294 }}>
                        <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            value={formData.categoryId}
                            label="Category"
                            onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                        >
                            {ingredients.category.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>

                    </FormControl>

                    <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                        <Button variant="contained" color="primary" type="submit">
                            Create INgredient
                        </Button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default CreateIngredientForm
