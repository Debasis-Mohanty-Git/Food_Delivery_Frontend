import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../State/Authentication/Action';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const initialValue = {
  fullName: "",
  email: "",
  password: "",
  role: ""
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (value) => {
  dispatch(registerUser({ userData: value, navigate }))
  }
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  return (
    <div >
      <div>
        <Typography variant='h5' className='text-center'>
          Register
        </Typography>

        <Formik onSubmit={handleSubmit}
          initialValues={initialValue}>

          <Form>
            <Field
              as={TextField}
              name="fullName"
              label="Full Name"
              fullWidth
              variant="outlined"
              margin="normal"
            />

            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
            />

            {/* <Field
              as={TextField}
              name="password"
              label="Password"
              fullWidth
              variant="outlined"
              margin="normal"
              type="password"
            /> */}

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

            <FormControl fullWidth margin="normal">
              <InputLabel id="role-simple-select-label">Role</InputLabel>
              <Field
                as={Select}
                labelId="role-simple-select-label"
                id="role-simple-select"
                label="Role"
                name="role"
              >
                <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
              </Field>
            </FormControl>

            <Button sx={{ mt: 2, padding: "0.8rem" }}
              fullWidth type='submit' variant='contained'>Register</Button>
          </Form>
        </Formik>

        <Typography variant="body2" className="text-center pt-3 text-gray-700">
          If you have an account already?{' '}
          <Button onClick={() => navigate("/account/login")}>Login</Button>
        </Typography>

      </div>
    </div>
  )
}

export default RegisterForm
