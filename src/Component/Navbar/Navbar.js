import { Avatar, Badge, IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../State/Authentication/Action';

const Navbar = () => {
    const navigate = useNavigate();
    const { auth,cart } = useSelector(store => store);
    const dispatch=useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = () => {
        handleClose();
        if (auth.user?.role === "ROLE_CUSTOMER") {
            navigate("/my-profile");
        } else {
            navigate("/admin/restaurant");
        }
    };

    const handleLogout =()=>{
        dispatch(logoutUser());
        navigate('/')
    }

    return (
        <div className='px-5 z-50 py-[0.8rem] bg-[#e91e63] lg:px-20 flex justify-between relative'>
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <li className='logo font-semibold text-gray-300 text-2xl list-none'>
                    Debasis
                </li>
            </div>

            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </div>

                <div>
                    {auth.user ?
                        <>
                            <Avatar
                                onClick={handleAvatarClick}
                                sx={{ bgcolor: "white", color: pink.A400, cursor: "pointer" }}
                            >
                                {auth.user?.fullName[0]?.toUpperCase()}
                            </Avatar>

                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}

                            >
                                <MenuItem onClick={handleProfileClick}>My Profile</MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </>
                        :
                        <IconButton onClick={() => navigate("/account/register")}>
                            <Person />
                        </IconButton>
                    }
                </div>

                <div>
                    <IconButton onClick={()=>navigate("/cart")}>
                        <Badge color='primary' badgeContent={cart.cart?.item.length}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
