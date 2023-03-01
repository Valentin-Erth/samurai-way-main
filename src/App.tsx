import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "./components/Dialogs/Message/Message";
import {PostType} from "./components/Profile/MyPosts/Post/Post";

type AppType = {
    dialogData: DialogItemType[]
    messagesData: MessageType[]
    postsData: PostType[]
}
const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs
                        dialogData={props.dialogData}
                        messagesData={props.messagesData}
                        />}/>
                    <Route path="/profile" render={() => <Profile
                        postsData={props.postsData}/>}/>
                    <Route path="/news" component={Profile}/>
                    <Route path="/music" component={Profile}/>
                    <Route path="/settings" component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
