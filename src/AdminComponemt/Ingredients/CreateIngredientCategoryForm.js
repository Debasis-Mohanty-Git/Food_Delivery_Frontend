import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createIngredientCategory } from '../../State/Ingredients/Action';

const CreateIngredientCategoryForm = () => {
    const [formData, setFormData] = useState({ name: "" });
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    const {restaurant}=useSelector(store=>store);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data={name:formData.name,restaurantId:restaurant.userRestaurant.id}
        console.log(formData);
        dispatch(createIngredientCategory({data,jwt}));
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
                <h1 className='text-gray-400 text-center text-xl pb-10'>Create Ingredient Category</h1>

                <form onSubmit={handleSubmit} className='space-y-4'>

                    <TextField
                        fullWidth
                        id='name'
                        name='name'
                        label="Food Category"
                        variant='outlined'
                        onChange={handleInputChange}
                        value={formData.name}
                    />

                    <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                        <Button variant="contained" color="primary" type="submit">
                            Create Category
                        </Button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default CreateIngredientCategoryForm
