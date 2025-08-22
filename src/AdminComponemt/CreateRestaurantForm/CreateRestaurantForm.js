import { Button, CircularProgress, IconButton, TextField } from '@mui/material';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { uploadImageToCloudinary } from '../util/UploadToCloudinary';
import { useDispatch } from 'react-redux';
import { createRestaurant } from '../../State/Restaurant/Action';

const initialValues = {
  name: "",
  description: "",
  cuisinType: "",
  streetAddress: "",
  city: "",
  stateProvince: "",
  postalCode: "",
  country: "",
  email: "",
  mobile: "",
  linkedin: "",
  instagram: "",
  facebook: "",
  whatsapp: "",
  openingHours: "Mon-Sun:9.00Am - 12.00pm",
  images: [],
}

const CreateRestaurantForm = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");

  const formik = useFormik({
  initialValues,
  onSubmit: (values) => {
    const data = {
      name: values.name,
      description: values.description,
      cuisinType: values.cuisinType, 
      address: {
        streetAddress: values.streetAddress,
        city: values.city,
        stateProvince: values.stateProvince,
        postalCode: values.postalCode,
        country: values.country,
      },
      contactInformation: {
        email: values.email,
        mobile: values.mobile,
        whatsapp: values.whatsapp,
        instagram: values.instagram,
      },
      openingHours: values.openingHours,
      images: values.images,
    };

    console.log("data:", data);
    dispatch(createRestaurant({ data, jwt }));
  },
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

  return (
    <div className='py-10 lg:flex items-center justify-center min-h-screen p-5'>
      <div className='lg:max-w-4xl w-full'>
        <h1 className='text-2xl text-center py-2 font-bold'>Add New Restaurant</h1>

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
                    <HighlightOffIcon sx={{ fontSize: "1.3rem",color:"red" }} />
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

          <TextField
            fullWidth
            id='cuisinType'
            name='cuisinType'
            label="Cuisine Type"
            variant='outlined'
            onChange={formik.handleChange}
            value={formik.values.cuisinType}
          />

          <TextField
            fullWidth
            id='openingHours'
            name='openingHours'
            label="Opening Hours"
            variant='outlined'
            onChange={formik.handleChange}
            value={formik.values.openingHours}
          />

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <TextField
              fullWidth
              id='streetAddress'
              name='streetAddress'
              label="Street Address"
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.streetAddress}
            />
            <TextField
              fullWidth
              id='city'
              name='city'
              label="City"
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.city}
            />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <TextField
              fullWidth
              id='stateProvince'
              name='stateProvince'
              label="State/Province"
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.stateProvince}
            />
            <TextField
              fullWidth
              id='postalCode'
              name='postalCode'
              label="Postal Code"
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.postalCode}
            />

            <TextField
              fullWidth
              id='country'
              name='country'
              label="Country"
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.country}
            />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <TextField
              fullWidth
              id='email'
              name='email'
              label="Email"
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <TextField
              fullWidth
              id='mobile'
              name='mobile'
              label="Mobile"
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.mobile}
            />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <TextField
              fullWidth
              id='whatsapp'
              name='whatsapp'
              label="WhatsApp No."
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.whatsapp}
            />
            <TextField
              fullWidth
              id='instagram'
              name='instagram'
              label="Instagram"
              variant='outlined'
              onChange={formik.handleChange}
              value={formik.values.instagram}
            />

          </div>
          <Button variant='contained' color='primary' type='submit'>Create Restaurant</Button>
        </form>
      </div>
    </div>
  )
}

export default CreateRestaurantForm;
