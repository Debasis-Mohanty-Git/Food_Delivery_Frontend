import { ThemeProvider } from '@emotion/react';
import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import RestaurantDetails from './Component/Restaurant/RestaurantDetails';
import Cart from './Component/Cart/Cart';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      <Navbar />
      {/* <Home /> */}
      {/* <RestaurantDetails /> */}
      <Cart />
      </ThemeProvider>
    </div>
  );
}

export default App;
