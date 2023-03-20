import React from 'react';
import './index.css';
import {store} from "./Redux/ReduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
            /></BrowserRouter>,
        document.getElementById('root')
    );
};
renderEntireTree();// Отрисовка со старта
store.subscribe(renderEntireTree);
