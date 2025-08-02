import { ThemeProvider } from '@emotion/react';
import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import RestaurantDetails from './Component/Restaurant/RestaurantDetails';
import Cart from './Component/Cart/Cart';
import Profile from './Component/Profile/Profile';
import CustomerRouter from './Component/Routers/CustomerRouter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './State/Authentication/Action';

function App() {

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store);

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
  }, [auth.jwt])

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <CustomerRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
