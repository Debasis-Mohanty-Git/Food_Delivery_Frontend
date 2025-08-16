import { Dashboard, ShoppingBag } from '@mui/icons-material'
import React from 'react'
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import CategoryIcon from '@mui/icons-material/Category';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import EventIcon from '@mui/icons-material/Event';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../State/Authentication/Action';
const menu = [
    { title: "Dashboard", icon: <Dashboard />, path: "/" },
    { title: "Orders", icon: <ShoppingBag />, path: "/orders" },
    { title: "Menu", icon: <ShopTwoIcon />, path: "/menu" },
    { title: "Food Category", icon: <CategoryIcon />, path: "/category" },
    { title: "Ingredients", icon: <FastfoodIcon />, path: "/ingredients" },
    { title: "Events", icon: <EventIcon />, path: "/event" },
    { title: "Details", icon: <AdminPanelSettingsIcon />, path: "/details" },
    { title: "Logout", icon: <LogoutIcon />, path: "/" },
]
const AdminSideBar = ({ handleClose }) => {
    const isSmallScreen = useMediaQuery("(max-width:1080px)")
    const navigate = useNavigate();
    const dispatch=useDispatch();

    const handleNavigate = (item) => {
        navigate(`/admin/restaurant${item.path}`);
        if(item.title==="Logout"){
            navigate("/");
        }
        dispatch(logoutUser());
        handleClose();
    }

    return (
        <div>
            <>

                <Drawer
                    variant={isSmallScreen ? "temporary" : "permanent"}
                    anchor='left'
                    sx={{ zIndex: 1 }}
                    open={true}
                    onClose={handleClose}
                >

                    <div className="text-center font-bold text-lg text-cyan-400 mb-4">
                        Admin Panel
                    </div>


                    <div className='w-[70vw] lg:w-[20vw] h-screen flex-col justify-center text-xl space-y-[1.65rem] text-left'>
                        {menu.map((item, index) => <>
                            <div onClick={()=>handleNavigate(item)}
                                className="px-5 py-1 flex items-center gap-4 cursor-pointer 
             rounded-md transition-all duration-200
             hover:bg-slate-700 hover:text-cyan-400"
                            >
                                <span className="text-cyan-400">{item.icon}</span>
                                <span className="text-white font-medium">{item.title}</span>
                            </div>

                            {index !== menu.length - 1 && <Divider />}
                        </>)}
                    </div>

                </Drawer>
            </>
        </div>
    )
}

export default AdminSideBar



