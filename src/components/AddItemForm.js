import React, { useState } from "react"

const AddItemForm = ({ AddItem }) => {
    const [item, setItem] = useState({
        name: "",
        price: "",
        status: "",
        desc: "",
        image: ""
    })

    const updateItem = e => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        AddItem(item)

        setItem({
            name: "",
            price: "",
            status: "",
            desc: "",
            image: ""
        })
    }

    return (
        <form className="item-edit" onSubmit={handleFormSubmit}>
            <input onChange={updateItem} value={item.name} type="text" name="name" placeholder="Item Name" />
            <input onChange={updateItem} value={item.price} type="number" name="price" placeholder="Item Price" />
            <select onChange={updateItem} value={item.status} name="status">
                <option value="">- Select -</option>
                <option value="available">Available</option>
                <option value="unavailable">Sold Out</option>
            </select>
            <textarea onChange={updateItem} value={item.desc} name="desc" placeholder="Item Description"></textarea>
            <input onChange={updateItem} value={item.image} type="text" name="image" placeholder="Item Image" />
            <button type="sumbit">+ Add Item</button>
        </form>
    )
}

export default AddItemForm
