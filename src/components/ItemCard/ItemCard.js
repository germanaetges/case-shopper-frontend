import React from "react"


const ItemCard = (props) => {

console.log(props)
    return (
        <div>
            <h5>{props.item.name}</h5>
        </div>
    )
}

export default ItemCard