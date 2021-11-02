import React from "react"

const Order = ({ allItems, order }) => {
    const getCartTotal = () => {
        let total = 0
        Object.keys(order).forEach(item => {
            total += order[item] * allItems[item].price
        })
        return total
    }

    return (
        <div className="order-wrap">
            <h2>Your Order</h2>
            <ul className="order">
                {Object.keys(order).map(item => (
                    <li>
                        <span>
                            {allItems[item].name} ({order[item]})
                        </span>
                        <span className="price">₹ {order[item] * allItems[item].price}</span>
                    </li>
                ))}

                <li className="total">
                    <strong>Total: </strong>₹ {getCartTotal()}
                </li>
            </ul>
        </div>
    )
}

export default Order
