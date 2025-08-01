import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../State/Authentication/Action';

const initialValue = {
  email: "",
  password: ""
}

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (value) => {
    dispatch(loginUser({ userData: value, navigate }))
  }
  return (
    <div>
      <Typography variant='h5' className='text-center'>
        Login
      </Typography>

      <Formik onSubmit={handleSubmit}
        initialValues={initialValue}>

        <Form>
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
          />

          <Field
            as={TextField}
            name="password"
            label="Password"
            fullWidth
            variant="outlined"
            margin="normal"
          />

          <Button sx={{ mt: 2, padding: "0.8rem" }}
            fullWidth type='submit' variant='contained'>Login</Button>
        </Form>
      </Formik>

      <Typography variant="body2" className="text-center pt-3 text-gray-700">
        Don't have an account?{' '}
        <Button onClick={() => navigate("/account/register")}>Register</Button>
      </Typography>

    </div>
  )
}

export default LoginForm
