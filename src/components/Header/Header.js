
import React from 'react'
import { HeaderStyle, ButtonStyle } from './styles'
import logo from "../../assets/images/logo.jpg"
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom'



const Header = (props) => {

    const history = useHistory()

    const goToStock = () => {
        history.push("/stock")
    }

    return (
        <HeaderStyle>
            <img src={logo} alt="Logo da Shopper.com.br" />
            <ButtonStyle>
                <Button variant="contained" color="primary" onClick={goToStock} >Ver estoque</Button>
                <Button onClick={props.handleShowCart} variant="contained" color="primary">
                    {props.showCart ? "Esconder Carrinho" : "Ver carrinho"}
                </Button>
            </ButtonStyle>
        </HeaderStyle>
    )
}

export default Header;