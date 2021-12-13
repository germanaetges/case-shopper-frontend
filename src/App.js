import './App.css';
import Header from "./components/Header"
import { HomePage } from './pages/HomePage/HomePage';
import {ThemeProvider } from '@mui/material/styles'
import { theme } from "./components/theme/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Header />
    <HomePage />
    </ThemeProvider>
  );
}

export default App;


