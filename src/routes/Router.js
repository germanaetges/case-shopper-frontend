import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from '../pages/HomePage/HomePage';
import StockPage from '../pages/StockPage/StockPage';

const Router = (props) => {
    return (
        <BrowserRouter>

            <Routes>
                <Route exact path={"/"} element={<HomePage showCart={props.showCart} />} />
                <Route exact path={"/stock"} element={<StockPage />} />
            </Routes>

        </BrowserRouter >
    )
}
export default Router;