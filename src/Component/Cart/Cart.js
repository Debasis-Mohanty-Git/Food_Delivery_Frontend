import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../State/Order/Action';


export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  stateProvince: "",
  postalCode: "",
  city: ""
}


const items = [1, 1, 1]
const Cart = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpenAddressModal = () => setOpen(true);
  const { cart, auth,order } = useSelector(store => store);
  const dispatch = useDispatch();
  const createOrderUsingSelecteAdddress = () => {

  }

  const handleSubmit = (value) => {
    const data = {
      order: {
        restaurantId: cart.cart?.item[0]?.food?.restaurant?.id,
        deliveryAddress: {
          fullName: auth.user?.fullName,
          streetAddress: value.streetAddress,
          city: value.city,
          stateProvince: value.stateProvince,
          postalCode: value.postalCode,
          country: "India"
        }
      },
      jwt: localStorage.getItem("jwt")
    };

    dispatch(createOrder(data));

    console.log("Address Form value", value);
  };

  return (
    <>
      <main className='lg:flex justify-between'>
        <section className='lg:w-[30%] space-y-3 lg:min-h-screen pt-8'>
          {cart.cart?.item.map((item) => <CartItem item={item} />)}
          <Divider />

          <div className='billdetails px-5 text-sm'>
            <p className='py-5 text-left font-extrabold'>Bill Details</p>

            <div className='space-y-3'>
              <div className='flex justify-between text-gray-400'>
                <p>Item Total</p>
                <p>₹ {cart.cart?.total}</p>
              </div>

              <div className='flex justify-between text-gray-400'>
                <p>Deliver Fee</p>
                <p>₹ 9</p>
              </div>

              <div className='flex justify-between text-gray-400'>
                <p>GST & Restaurant Charges</p>
                <p>₹ 29</p>
              </div>

              <Divider />
            </div>

            <div className='flex justify-between text-gray-400'>
              <p>Total Price</p>
              <p>₹ {cart.cart?.total + 9 + 29}</p>
            </div>
          </div>
        </section>

        <Divider orientation='vertical' flexItem />
        <section className='w-[80%] mx-auto px-5 pb-10 lg:pb-0 mt-10'>
          <div className='w-full max-w-5xl mx-auto'>
            <h1 className='text-center font-semibold text2 mb-10 text-3xl'>
              Choose Delivery Address
            </h1>

            <div className='flex gap-5 flex-wrap justify-center'>
              {order.orders?.map((item, index) => (
                <AddressCard
                  key={index}
                  handleSelectAddress={createOrderUsingSelecteAdddress}
                  item={item}
                  showButton={true}
                />
              ))}

              
              <Card className='flex flex-col gap-5 w-64 p-6 bg-[#1e1e1e] text-gray-400 shadow-xl rounded-2xl'>
                <div className='flex items-center gap-3'>
                  <div className='p-2 rounded-full bg-gray-700'>
                    <AddLocationAltIcon className='text-white' />
                  </div>
                  <h1 className='font-semibold text-lg text-white whitespace-nowrap'>
                    Add New Address
                  </h1>

                </div>

                <p className='text-sm text-gray-500'>
                  You can add a new delivery address to your profile.
                </p>

                <Button
                  variant='outlined'
                  fullWidth
                  onClick={handleOpenAddressModal}
                  sx={{
                    borderColor: '#ffffff55',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 500,
                    borderRadius: '8px',
                    ':hover': {
                      borderColor: '#ffffffaa',
                      backgroundColor: '#2c2c2c',
                    },
                  }}
                >
                  Add
                </Button>
              </Card>


            </div>
          </div>
        </section>

      </main>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ handleSubmit }) => (
              <Form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  padding: '15px',
                }}
              >

                <Field
                  as={TextField}
                  name="streetAddress"
                  label="Street Address"
                  fullWidth
                  variant="outlined"
                />


                <Field
                  as={TextField}
                  name="stateProvince"
                  label="State"
                  fullWidth
                  variant="outlined"
                />


                <div style={{ display: 'flex', gap: '16px' }}>
                  <Field
                    as={TextField}
                    name="city"
                    label="City"
                    fullWidth
                    variant="outlined"
                  />
                  <Field
                    as={TextField}
                    name="postalCode"
                    label="Pincode"
                    fullWidth
                    variant="outlined"
                  />
                </div>


                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                  <button
                    type="submit"
                    style={{
                      padding: '10px 30px',
                      backgroundColor: '#1976d2',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '16px',
                      cursor: 'pointer',
                    }}
                  >
                    Deliver Here
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>

    </>
  )
}

export default Cart
