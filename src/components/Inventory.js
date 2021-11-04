import React from "react"
import AddItemForm from "./AddItemForm"

const Inventory = ({ AddItem, loadSampleItems, allItems, setAllItems }) => {
    const updateInventoryItem = (e, itemKey) => {
        let currentItem = allItems[itemKey]

        // handling price change - string to number
        let changedValue = e.target.value
        if (e.target.name === "price") {
            if (changedValue) {
                changedValue = parseInt(changedValue, 10)
            } else {
                changedValue = 0
            }
        }

        currentItem = {
            ...currentItem,
            [e.target.name]: changedValue
        }

        setAllItems({
            ...allItems,
            [itemKey]: currentItem
        })
    }

    const removeInventoryItem = itemKey => {
        const allItemsCopy = { ...allItems }
        delete allItemsCopy[itemKey]
        setAllItems(allItemsCopy)
    }

    return (
        <div>
            <h2>Inventory</h2>
            <div className="item-edit-wrapper">
                {Object.keys(allItems).map(itemKey => {
                    const item = allItems[itemKey]

                    return (
                        <div className="item-edit" key={itemKey}>
                            <input onChange={e => updateInventoryItem(e, itemKey)} defaultValue={item.name} type="text" name="name" placeholder="Item Name" />
                            <input onChange={e => updateInventoryItem(e, itemKey)} defaultValue={item.price} type="number" name="price" placeholder="Item Price" />
                            <select onChange={e => updateInventoryItem(e, itemKey)} defaultValue={item.status} name="status">
                                <option value="">- Select -</option>
                                <option value="available">Available</option>
                                <option value="unavailable">Sold Out</option>
                            </select>
                            <textarea onChange={e => updateInventoryItem(e, itemKey)} defaultValue={item.desc} name="desc" placeholder="Item Description"></textarea>
                            <input onChange={e => updateInventoryItem(e, itemKey)} defaultValue={item.image} type="text" name="image" placeholder="Item Image" />
                            <button className="remove-item" onClick={() => removeInventoryItem(itemKey)}>
                                Remove Item
                            </button>
                        </div>
                    )
                })}
            </div>
            <AddItemForm AddItem={AddItem} />
            {/* <button onClick={loadSampleItems}>Load Sample Items</button> */}
        </div>
    )
}

export default Inventory
