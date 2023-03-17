import React from 'react';
import './index.css';
import {Store} from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={Store.getState()}
                 dispatch={Store.dispatch.bind(Store)}
            /></BrowserRouter>,
        document.getElementById('root')
    );
};
renderEntireTree();// Отрисовка со старта
Store.subscribe(renderEntireTree);
