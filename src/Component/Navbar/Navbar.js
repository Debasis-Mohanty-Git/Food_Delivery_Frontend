import { Avatar, Badge, IconButton, Menu, MenuItem, TextField, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { cyan } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../State/Authentication/Action';
import { searchMenuItem } from '../../State/Menu/Action';

const Navbar = () => {
    const navigate = useNavigate();
    const { auth, cart } = useSelector(store => store);
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");

    const [anchorEl, setAnchorEl] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const [keyword, setKeyword] = useState(""); 

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

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/')
    };

    
    const handleSearch = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            dispatch(searchMenuItem({ jwt, keyword }));
            navigate(`/search?query=${keyword}`);
            setShowSearch(false); 
            setKeyword("");
        }
    };

    return (
        <div className='px-5 z-50 py-[0.8rem] bg-cyan-600/80 lg:px-20 flex justify-between relative'>
            
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <li className='logo font-semibold text-green-200 text-2xl list-none'>
                    TummyTime
                </li>
            </div>

            
            <div className='flex items-center space-x-2 lg:space-x-10'>


                <div>
                    {showSearch ? (
                        <form onSubmit={handleSearch}>
                            <TextField
                                autoFocus
                                variant="outlined"
                                size="small"
                                placeholder="Search food..."
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton type="submit">
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: "8px",
                                    "& .MuiInputBase-input": {
                                        color: "Black",
                                    },
                                    "& .MuiInputBase-input::placeholder": {
                                        color: "gray",
                                        opacity: 1,
                                    },
                                }}
                            />

                        </form>
                    ) : (
                        <IconButton onClick={() => setShowSearch(true)}>
                            <SearchIcon sx={{ fontSize: "1.5rem" }} />
                        </IconButton>
                    )}
                </div>


                <div>
                    {auth.user ? (
                        <>
                            <Avatar
                                onClick={handleAvatarClick}
                                sx={{ bgcolor: "white", color: cyan.A400, cursor: "pointer" }}
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
                    ) : (
                        <IconButton onClick={() => navigate("/account/register")}>
                            <Person />
                        </IconButton>
                    )}
                </div>


                <div>
                    <IconButton onClick={() => navigate("/cart")}>
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
