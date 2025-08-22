import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography, Grid, Avatar } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EventIcon from '@mui/icons-material/Event';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { user } = useSelector(store => store.auth);

  const [totalUsers, setTotalUsers] = useState(0);
  const [menuItems, setMenuItems] = useState(0);
  const [ordersToday, setOrdersToday] = useState(0);
  const [upcomingEvents, setUpcomingEvents] = useState(0);

  useEffect(() => {
    const animateNumber = (target, setter, duration = 2000) => {
      let start = 0;
      const increment = Math.ceil(target / (duration / 30));
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setter(start);
      }, 30);
    };

    animateNumber(200, setTotalUsers);
    animateNumber(250, setMenuItems);
    animateNumber(80, setOrdersToday);
    animateNumber(5, setUpcomingEvents);
  }, []);

  const stats = [
    { title: 'Total Users', value: totalUsers, icon: <PeopleIcon fontSize="large" /> },
    { title: 'Total Menu Items', value: menuItems, icon: <FastfoodIcon fontSize="large" /> },
    { title: 'Orders Today', value: ordersToday, icon: <ShoppingCartIcon fontSize="large" /> },
    { title: 'Upcoming Events', value: upcomingEvents, icon: <EventIcon fontSize="large" /> },
  ];

  return (
    <div className='p-8  min-h-screen flex flex-col items-center'>
      
      <div className='flex flex-col items-center gap-4 mb-8 text-center'>
        <Avatar className='bg-cyan-500' sx={{ width: 56, height: 56 }}>
          {user?.fullName?.charAt(0)}
        </Avatar>
        <Typography variant="h4" className='font-bold'>
          Welcome, {user?.fullName || 'User'}!
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Here's what's happening today
        </Typography>
      </div>

      {/* Stats Cards */}
      <Grid container spacing={4} className='justify-center'>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className='bg-white shadow-lg rounded-xl'>
              <CardContent className='flex items-center gap-4 justify-center'>
                <div className='text-cyan-500'>
                  {stat.icon}
                </div>
                <div className='text-center'>
                  <Typography variant="h5" className='font-bold'>
                    {stat.value}
                  </Typography>
                  <Typography color="textSecondary">{stat.title}</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
