import React from "react"


const ItemCard = (props) => {

    console.log(props)
    return (
        <div>
            <h5>{props.item.name}</h5>
            <button
                onClick={() => props.decreaseQty(props.item)}
                disabled={props.item.productQuantity === 1}
            >-</button>
            <span>{props.item.productQuantity}</span>
            <button
                onClick={() => props.increaseQty(props.item)}
                disabled={props.item.productQuantity === props.item.qty_stock}
            >+</button>
        </div>
    )
}

export default ItemCard