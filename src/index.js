import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import StorePicker from "./components/StorePicker"
import App from "./components/App"
import NotFound from "./components/NotFound"

import "./css/style.css"

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={StorePicker} />
                <Route path="/store/:storeId" component={App} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

// ReactDOM.render(<Routes />, document.getElementById("main"))
ReactDOM.render(<App />, document.getElementById("main"))
