import React from "react"

const Item = ({ itemKey, addToOrder, details }) => {
    const { name, price, status, desc, image } = details
    const isAvailable = status === "available"
    return (
        <li className="menu-item">
            <img src={image} alt="item-pic" />
            <h3 className="item-name">
                {name}
                <span className="price">₹ {price}</span>
            </h3>
            <p>{desc}</p>
            <button onClick={() => addToOrder(itemKey)} disabled={!isAvailable}>
                {isAvailable ? "Add to Order" : "Sold Out"}
            </button>
        </li>
    )
}

export default Item
