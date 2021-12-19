import React from "react"


const ItemCard = (props) => {

    return (
        <div>
            <h5>{props.item.name}</h5>
            <p>R$: {props.item.price}</p>
            <button
                onClick={() => props.decreaseQty(props.item)}
                disabled={props.item.productQuantity === 1}
            >-</button>
            <span>{props.item.productQuantity}</span>
            <button
                onClick={() => props.increaseQty(props.item)}
                disabled={props.item.productQuantity === props.item.qty_stock}
            >+</button>
            <button onClick={() => props.removeFromCart(props.item)}>Remover</button>
        </div>
    )
}

export default ItemCard