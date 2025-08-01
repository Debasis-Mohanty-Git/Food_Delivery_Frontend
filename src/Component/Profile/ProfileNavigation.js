import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const menu = [
  { title: "Orders", icon: <ShoppingBagIcon /> },
  { title: "Favorites", icon: <FavoriteIcon /> },
  { title: "Address", icon: <HomeIcon /> },
  { title: "Payments", icon: <AccountBalanceWalletIcon /> },
  { title: "Notification", icon: <CircleNotificationsIcon /> },
  { title: "Event", icon: <EventIcon /> },
  { title: "Logout", icon: <LogoutIcon /> }


]
const ProfileNavigation = ({ open, handleClose }) => {

  const isSmallScreeen = useMediaQuery("(max-width:1080)");
  const navigate = useNavigate();

  const handleNavigate = (item) => {
   navigate(`/my-profile/${item.title.toLowerCase()}`)
  }

  return (
    <div>
      <Drawer
        onClose={handleClose}
        variant={isSmallScreeen ? "temporary" : "permanent"}
        open={open}
        anchor='left' sx={{ zIndex: 1 }}
      >

        <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16'>
          {menu.map((item, i) => <>
            <div onClick={()=>handleNavigate(item)}
              className='px-5 flex items-center space-x-5 cursor-pointer'>
              {item.icon}
              <span>{item.title}</span>
            </div>
            {i !== menu.length - 1 && <Divider />}
          </>)}

        </div>

      </Drawer>
    </div>
  )
}

export default ProfileNavigation
