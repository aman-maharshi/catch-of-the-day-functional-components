import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { getFunName } from "../helpers"

const StorePicker = () => {
    const [storeName] = useState(getFunName())
    let history = useHistory()

    const handleFormSubmit = e => {
        e.preventDefault()
        history.push(`/store/${storeName}`)
    }

    return (
        <form className="store-selector" onSubmit={handleFormSubmit}>
            <h2>Please enter a store</h2>
            <input type="text" required placeholder="Store Name" defaultValue={storeName} />
            <button type="submit">Next →</button>
        </form>
    )
}

export default StorePicker
