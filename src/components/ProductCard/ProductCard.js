import React from 'react'
import { CardStyle } from './styles'

const ProductCard = (props) => {

    return (

        <CardStyle>
            <p>{props.product.name}</p>
            <p>R${props.product.price}</p>
            <button>Adicionar ao carrinho</button>
        </CardStyle>

    )

}

export default ProductCard