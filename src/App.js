import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from "./components/theme/theme"
import { useState } from 'react'
import Router from './routes/Router'

function App() {

  const [showCart, setShowCart] = useState(false)

  const handleShowCart = () => {

    setShowCart(!showCart)

  }

  return (
    <ThemeProvider theme={theme}>
      <Router handleShowCart={handleShowCart} showCart={showCart} />
    </ThemeProvider>
  )
}

export default App