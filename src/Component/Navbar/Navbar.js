import { Avatar, Badge, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate();
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
                       <SearchIcon sx={{fontSize:"1.5rem"}}/>
                   </IconButton>
                </div>

                <div className=''>
                    {false?<Avatar sx={{bgcolor:"white" ,color:pink.A400}}>
                        D
                    </Avatar>
                    :<IconButton onClick={()=>navigate("/account/register")}><Person/></IconButton>}
                </div>

                <div>
                   <IconButton>
                    <Badge color='primary' badgeContent={2}>
                       <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
                    </Badge>
                   </IconButton>
                </div>

            </div>

        </div>
    )
}

export default Navbar
