import React from "react"
import Header from "./Header"
import Order from "./Order"
import Inventory from "./Inventory"

const App = () => {
    return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Hurry Up!" />
            </div>
            <Order />
            <Inventory />
        </div>
    )
}

export default App
