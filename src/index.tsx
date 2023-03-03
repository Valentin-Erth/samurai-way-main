import React from 'react';
import './index.css';
import {addPost, state, stateType, subscribe, updateNewPostText} from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";


const renderEntireTree=(state:stateType)=>{
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
};
renderEntireTree(state);

subscribe(renderEntireTree);