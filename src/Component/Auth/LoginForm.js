import { Button, TextField, Typography, InputAdornment, IconButton } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../State/Authentication/Action';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const initialValue = {
  email: "",
  password: ""
}

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (value) => {
    dispatch(loginUser({ userData: value, navigate }))
  }

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <Typography variant='h5' className='text-center'>
        Login
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValue}>
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
            type={showPassword ? "text" : "password"}
            fullWidth
            variant="outlined"
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
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

export default LoginForm;
