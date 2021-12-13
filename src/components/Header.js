
import React from 'react'
import { HeaderStyle } from './styles'
import logo from "../assets/images/logo.jpg"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';





const Header = () => {
    return (
        <HeaderStyle>
            <img src={logo} alt="Logo da Shopper.com.br" />
            <Stack>
            <Button variant="contained" color="primary">Ver estoque</Button>
            </Stack>

        </HeaderStyle>
    )
}

export default Header;