import React from 'react';
import './index.css';
import {addPost, state, subscribe, updateNewPostText} from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}/></BrowserRouter>,
        document.getElementById('root')
    );
};
renderEntireTree();
subscribe(renderEntireTree);
