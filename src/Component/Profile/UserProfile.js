import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../State/Authentication/Action';
import { useNavigate } from 'react-router-dom';
const UserProfile = () => {
const dispatch=useDispatch();
const navigate=useNavigate();
const { user } = useSelector(store => store.auth);
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/")
  }
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>

      <div className='flex flex-col justify-center items-center p-8 text-center'>
        <AccountCircleIcon sx={{ fontSize: '9rem', color: '#1976d2' }} />
        <h1 className='py-4 text-3xl font-bold'>{user?.name}</h1>
        <p className='text-gray-600 text-base mb-6'>Email: {user?.email}</p>
        <Button
          onClick={handleLogout}
          variant='contained'
          sx={{ paddingX: '2rem', paddingY: '0.5rem', fontWeight: 'bold' }}
          color='error'
        >
          Logout
        </Button>
      </div>


    </div>
  )
}

export default UserProfile
