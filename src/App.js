import { ThemeProvider } from '@emotion/react';
import './App.css';
// import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import RestaurantDetails from './Component/RestaurantDetails';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      <Navbar />
      {/* <Home /> */}
      <RestaurantDetails />
      </ThemeProvider>
    </div>
  );
}

export default App;
