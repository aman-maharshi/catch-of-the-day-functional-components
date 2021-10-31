import React from "react"

import { getFunName } from "../helpers"

const StorePicker = () => {
    return (
        <form className="store-selector">
            <h2>Please enter a store</h2>
            <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
            <button type="submit">Next →</button>
        </form>
    )
}

export default StorePicker
