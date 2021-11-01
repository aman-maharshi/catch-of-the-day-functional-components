import React from "react"
import AddItemForm from "./AddItemForm"

const Inventory = ({ AddItem, loadSampleItems }) => {
    return (
        <div>
            <h2>Inventory</h2>
            <AddItemForm AddItem={AddItem} />
            <button onClick={loadSampleItems}>Load Sample Items</button>
        </div>
    )
}

export default Inventory
