import React, { useState } from "react"
import Header from "./Header"
import Order from "./Order"
import Inventory from "./Inventory"

const App = () => {
    const [allItems, setAllItems] = useState({})
    // const [order, setOrder] = useState({})

    const AddItem = item => {
        setAllItems({
            ...allItems,
            [`item-${Date.now()}`]: item
        })
    }

    return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Hurry Up!" />
            </div>
            <Order />
            <Inventory AddItem={AddItem} />
        </div>
    )
}

export default App
