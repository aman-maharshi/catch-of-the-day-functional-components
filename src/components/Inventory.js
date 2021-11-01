import React from "react"
import AddItemForm from "./AddItemForm"

const Inventory = ({ AddItem }) => {
    return (
        <div>
            <h2>Inventory</h2>
            <AddItemForm AddItem={AddItem} />
        </div>
    )
}

export default Inventory
