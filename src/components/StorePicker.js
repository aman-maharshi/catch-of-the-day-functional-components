import React from "react"

const StorePicker = () => {
    return (
        <form className="store-selector">
            <h2>Please enter a store</h2>
            <input type="text" required placeholder="Store Name" />
            <button type="submit">Next →</button>
        </form>
    )
}

export default StorePicker
