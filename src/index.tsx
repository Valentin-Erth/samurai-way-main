import React from 'react';
import './index.css';
import {store} from "./Redux/ReduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App/>
            </Provider>
            </BrowserRouter>,document.getElementById('root')
    );
};
renderEntireTree();// Отрисовка со старта
store.subscribe(renderEntireTree);
