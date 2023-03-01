import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {v1} from "uuid";
import {MessageType} from "./components/Dialogs/Message/Message";
import {PostType} from "./components/Profile/MyPosts/Post/Post";
let dialogData: DialogItemType[] = [
    {id: v1(), name: "Dimych"},
    {id: v1(), name: "Andrey"},
    {id: v1(), name: "Sveta"},
    {id: v1(), name: "Sasha"},
    {id: v1(), name: "Victor"},
    {id: v1(), name: "Valera"}
]
let messagesData: MessageType[] = [
    {id: v1(), message: "Hi"},
    {id: v1(), message: "How are you"},
    {id: v1(), message: "Yo"},
    {id: v1(), message: "Yo"},
    {id: v1(), message: "Yo"}
]
let postsData: PostType[] = [
    {id: v1(), message: "Hi,how are yuo?", likesCount: "0"},
    {id: v1(), message: "It,s my first post", likesCount: "23"},
]

ReactDOM.render(
  <App dialogData={dialogData}
       messagesData={messagesData}
       postsData={postsData}
  />,
  document.getElementById('root')
);