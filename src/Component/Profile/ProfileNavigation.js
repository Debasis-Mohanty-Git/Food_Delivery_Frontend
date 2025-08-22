// import React from 'react'
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import HomeIcon from '@mui/icons-material/Home';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
// import EventIcon from '@mui/icons-material/Event';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { Divider, Drawer, useMediaQuery } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { logoutUser } from '../../State/Authentication/Action';

// const menu = [
//   { title: "Orders", icon: <ShoppingBagIcon /> },
//   { title: "Favorites", icon: <FavoriteIcon /> },
//   { title: "Address", icon: <HomeIcon /> },
//   { title: "Payments", icon: <AccountBalanceWalletIcon /> },
//   { title: "Notification", icon: <CircleNotificationsIcon /> },
//   { title: "Event", icon: <EventIcon /> },
//   { title: "Logout", icon: <LogoutIcon /> }


// ]
// const ProfileNavigation = ({ open, handleClose }) => {

//   const isSmallScreeen = useMediaQuery("(max-width:1080)");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleNavigate = (item) => {

//     if (item.title == "Logout") {
//       dispatch(logoutUser());
//       navigate('/')
//     }
//     else {
//       navigate(`/my-profile/${item.title.toLowerCase()}`)
//     }
//   }

//   return (
//     <div>
//       <Drawer
//         onClose={handleClose}
//         variant={isSmallScreeen ? "temporary" : "permanent"}
//         open={open}
//         anchor='left' sx={{ zIndex: 1 }}
//       >

//         <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16'>
//           {menu.map((item, i) => <>
//             <div onClick={() => handleNavigate(item)}
//               className='px-5 flex items-center space-x-5 cursor-pointer'>
//               {item.icon}
//               <span>{item.title}</span>
//             </div>
//             {i !== menu.length - 1 && <Divider />}
//           </>)}

//         </div>

//       </Drawer>
//     </div>
//   )
// }

// export default ProfileNavigation

import React, { useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";

import {
  Divider,
  Drawer,
  IconButton,
  useMediaQuery,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../State/Authentication/Action";

const menu = [
  { title: "Orders", icon: <ShoppingBagIcon /> },
  { title: "Favorites", icon: <FavoriteIcon /> },
  { title: "Address", icon: <HomeIcon /> },
  { title: "Payments", icon: <AccountBalanceWalletIcon /> },
  { title: "Notification", icon: <CircleNotificationsIcon /> },
  { title: "Event", icon: <EventIcon />},
  { title: "Logout", icon: <LogoutIcon /> },
];

const ProfileNavigation = () => {
  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (item) => {
    if (item.title === "Logout") {
      dispatch(logoutUser());
      navigate("/");
    } else {
      navigate(`/my-profile/${item.title.toLowerCase()}`);
    }
    if (isSmallScreen) setOpen(false); 
  };

  return (
    <div>
      {isSmallScreen && (
        <AppBar
          position="fixed"
          elevation={0} 
          sx={{ backgroundColor: "transparent", zIndex: 1201 }}
        >
          <Toolbar className="flex justify-between">
            <IconButton
              color="inherit"
              onClick={() => setOpen(true)}
            >
              <MenuIcon className="mt-16" />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}


      <Drawer
        onClose={() => setOpen(false)}
        variant={isSmallScreen ? "temporary" : "permanent"}
        open={isSmallScreen ? open : true}
        anchor="left"
        sx={{ zIndex: 1200 }}
      >
        <div className="w-[60vw] lg:w-[20vw] h-[100vh] flex flex-col text-xl gap-6 pt-20">
          {menu.map((item, i) => (
            <React.Fragment key={i}>
              <div
                onClick={() => handleNavigate(item)}
                className="px-5 flex items-center space-x-5 cursor-pointer py-2 rounded"
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
              {i !== menu.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default ProfileNavigation;