import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import StorePicker from "./components/StorePicker"
import App from "./components/App"
import NotFound from "./components/NotFound"

import "./css/style.css"

// import { BrowserRouter, Match, Miss } from "react-router"

// const Routes = () => {
//     return (
//         <BrowserRouter>
//             <div>
//                 <Match exactly pattern="/" component={StorePicker} />
//                 <Match pattern="/store/:storeId" component={App} />
//                 <Miss component={NotFound} />
//             </div>
//         </BrowserRouter>
//     )
// }

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

ReactDOM.render(<Routes />, document.getElementById("main"))
