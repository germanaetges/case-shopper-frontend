import './App.css';
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import { ThemeProvider } from '@mui/material/styles'
import { theme } from "./components/theme/theme"
import { useState } from 'react';
import Router from './routes/Router';

function App() {

  const [showCart, setShowCart] = useState(false)

  const handleShowCart = () => {

    setShowCart(!showCart)

  }

  return (
    <ThemeProvider theme={theme}>
      <Header handleShowCart={handleShowCart} showCart={showCart} />
      <Router showCart={showCart} />
    </ThemeProvider>
  );
}

export default App;


