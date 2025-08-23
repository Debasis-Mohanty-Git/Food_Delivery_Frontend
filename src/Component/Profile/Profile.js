import React, { useState } from 'react'
import ProfileNavigation from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom'
import Orders from './Orders'
import UserProfile from './UserProfile'
import Event from './Event'
import Favorates from './Favorates'
import Address from './Address'

const Profile = () => {
  const [openSideBar, setOpenSideBar] = useState(false)
  return (
    <div className='lg:flex justify-between'>
      <div className="sticky top-16">
        <ProfileNavigation open={openSideBar} />
      </div>


      <div className='lg:w-[80%]'>
        <Routes>
          <Route path="/" element={<UserProfile />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/address" element={<Address />}></Route>
          <Route path="/favorites" element={<Favorates />}></Route>
          <Route path="/event" element={<Event />}></Route>
        </Routes>
      </div>

    </div>
  )
}

export default Profile
