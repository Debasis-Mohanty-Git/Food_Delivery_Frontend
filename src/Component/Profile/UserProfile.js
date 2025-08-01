import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
const UserProfile = () => {

  const handleLogout = () => {
    console.log("this is Logout button in userProfile")
  }
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>

      <div className='flex flex-col justify-center items-center p-8 text-center'>
        <AccountCircleIcon sx={{ fontSize: '9rem', color: '#1976d2' }} />
        <h1 className='py-4 text-3xl font-bold'>Debasis Mohanty</h1>
        <p className='text-gray-600 text-base mb-6'>Email: mohantydebasis@gmail.com</p>
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
