import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from '../pages/HomePage/HomePage'
import StockPage from '../pages/StockPage/StockPage'
import Header from "../components/Header/Header"

const Router = (props) => {
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path={["/"]}>
                    <Header handleShowCart={props.handleShowCart} showCart={props.showCart} />
                    <HomePage showCart={props.showCart} />
                </Route>
                <Route exact path={"/stock"}>
                    <StockPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router