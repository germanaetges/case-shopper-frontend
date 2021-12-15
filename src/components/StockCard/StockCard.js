import React from 'react'
import { StockCardStyle } from './styles'

const StockCard = (props) => {

    return (

        <StockCardStyle>
            <p><i>Id do produto: </i>{props.product.id}</p>
            <p><i>Nome do produto: </i>{props.product.name}</p>
            <p><i>Preço do produto: </i>R$ {props.product.price}</p>
            <p><i>Quantidade em estoque: </i>{props.product.qty_stock}</p>
        </StockCardStyle>
    )
}

export default StockCard