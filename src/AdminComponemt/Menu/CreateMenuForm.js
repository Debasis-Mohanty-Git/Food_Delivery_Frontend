import { Box, Button, Chip, CircularProgress, FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { uploadImageToCloudinary } from '../util/UploadToCloudinary';
import { useDispatch, useSelector } from 'react-redux';
import { createMenuItem } from '../../State/Menu/Action';
import { getIngredientsOfRestaurant } from '../../State/Ingredients/Action';
import { useParams } from 'react-router-dom';

const initialValues = {
    name: "",
    description: "",
    price: "",
    category: "",
    restaurantId: "",
    vegetarian: true,
    seasonal: false,
    ingredients: [],
    images: [],
}



const CreateMenuForm = () => {
    const [uploadImage, setUploadImage] = useState(false);
    const jwt = localStorage.getItem("jwt")
    const { restaurant, ingredients } = useSelector(store => store);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            values.restaurantId = restaurant.userRestaurant.id;
            dispatch(createMenuItem({
                menu: values,
                jwt
            }));
            console.log("data:", values);
        }
    });


    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        setUploadImage(true);
        const image = await uploadImageToCloudinary(file);
        console.log("image", image)
        formik.setFieldValue("images", [...formik.values.images, image]);
        setUploadImage(false);
    }
    const handleRemoveImage = (index) => {
        const updatedImages = [...formik.values.images];
        updatedImages.splice(index, 1);
        formik.setFieldValue("images", updatedImages);
    }

    useEffect(() => {
        dispatch(getIngredientsOfRestaurant({
            jwt,
            id: restaurant.userRestaurant.id
        }))

    }, []);

    return (
        <div className='py-10 lg:flex items-center justify-center min-h-screen p-5'>
            <div className='lg:max-w-4xl w-full'>
                <h1 className='text-2xl text-center py-2 font-bold'>Add New Menu</h1>

                <form onSubmit={formik.handleSubmit} className='space-y-4'>

                    {/* Image Upload Section */}
                    <div className='flex flex-wrap gap-5'>
                        <input
                            type='file'
                            id='fileInput'
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                            accept='image/*'
                        />
                        <label htmlFor="fileInput" className='relative'>
                            <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600'>
                                <AddPhotoAlternateIcon className='text-white' />
                            </span>
                            {uploadImage && (
                                <div className='absolute left-0 right-0 bottom-0 w-24 h-24 flex justify-center items-center'>
                                    <CircularProgress />
                                </div>
                            )}
                        </label>

                        {/* Preview Images */}
                        <div className='flex flex-wrap gap-2'>
                            {formik.values.images.map((image, index) => (
                                <div key={index} className='relative'>
                                    <img
                                        className='w-24 h-24 object-cover'
                                        src={image}
                                        alt=""
                                    />
                                    <IconButton
                                        size='small'
                                        sx={{ position: 'absolute', top: 0, right: 0, outline: "none" }}
                                        onClick={() => handleRemoveImage(index)}
                                    >
                                        <HighlightOffIcon sx={{ fontSize: "1.3rem", color: "red" }} />
                                    </IconButton>
                                </div>
                            ))}
                        </div>
                    </div>

                    <TextField
                        fullWidth
                        id='name'
                        name='name'
                        label="Name"
                        variant='outlined'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />

                    <TextField
                        fullWidth
                        id='description'
                        name='description'
                        label="Description"
                        variant='outlined'
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {/* Ingredients */}
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="ingredients-label">Ingredients</InputLabel>
                            <Select
                                labelId="ingredients-label"
                                id="ingredients-select"
                                name='ingredients'
                                multiple
                                value={formik.values.ingredients}
                                onChange={formik.handleChange}
                                input={<OutlinedInput id="select-multiple-chip" label="Ingredients" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            // assuming you store the whole ingredient object in formik.values.ingredients
                                            <Chip key={value.id} label={value.name} />
                                        ))}
                                    </Box>
                                )}
                            >
                                {ingredients.ingredients?.map((item) => (
                                    <MenuItem key={item.id} value={item}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>


                        {/* Category */}
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                value={formik.values.category}
                                label="Category"
                                onChange={formik.handleChange}
                                name='category'
                            >
                                {restaurant.categories?.map((item) => <MenuItem value={item}>{item.name}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </div>


                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {/* Is Vegetarian */}
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="vegetarian-label">Is Vegetarian</InputLabel>
                            <Select
                                labelId="vegetarian-label"
                                id="vegetarian-select"
                                value={formik.values.vegetarian}
                                onChange={formik.handleChange}
                                name='vegetarian'
                            >
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Is Seasonal */}
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="seasonal-label">Is Seasonal</InputLabel>
                            <Select
                                labelId="seasonal-label"
                                id="seasonal-select"
                                value={formik.values.seasonal}
                                onChange={formik.handleChange}
                                name='seasonal'
                            >
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <TextField
                        fullWidth
                        id='price'
                        name='price'
                        label="Price"
                        variant='outlined'
                        onChange={formik.handleChange}
                        value={formik.values.price}
                    />


                    {/* Submit */}
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                        <Button variant="contained" color="primary" type="submit">
                            Create Menu Item
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateMenuForm;
