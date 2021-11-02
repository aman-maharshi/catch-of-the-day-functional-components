import React, { useState } from "react"
import Header from "./Header"
import Order from "./Order"
import Inventory from "./Inventory"
import data from "../sample-items"
import Item from "./Item"

const App = () => {
    const [allItems, setAllItems] = useState(data)
    const [order, setOrder] = useState({})

    const AddItem = item => {
        setAllItems({
            [`item-${Date.now()}`]: item,
            ...allItems
        })
    }

    const loadSampleItems = () => {
        setAllItems({ ...data })
    }

    const addToOrder = itemKey => {
        setOrder({
            ...order,
            [itemKey]: order[itemKey] + 1 || 1
        })
    }

    return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Hurry Up!" />
                <ul className="list-of-items">
                    {Object.keys(allItems).map(item => {
                        return <Item key={item} itemKey={item} addToOrder={addToOrder} details={allItems[item]} />
                    })}
                </ul>
            </div>
            <Order />
            <Inventory AddItem={AddItem} loadSampleItems={loadSampleItems} />
        </div>
    )
}

export default App
