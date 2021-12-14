
import React from 'react'
import { HeaderStyle } from './styles'
import logo from "../../assets/images/logo.jpg"
import Button from '@mui/material/Button';


const Header = (props) => {
    return (
        <HeaderStyle>
            <img src={logo} alt="Logo da Shopper.com.br" />
            <div>
                <Button variant="contained" color="primary">Ver estoque</Button>
                <Button onClick={props.handleShowCart} variant="contained" color="primary">
                    {props.showCart ? "Esconder Carrinho": "Ver carrinho"}
                </Button>
            </div>


        </HeaderStyle>
    )
}

export default Header;