import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {stateType} from "./Redux/State";

type appStateType = {
    state: stateType
    addPost:(postText: string)=>void
}
const App = (props: appStateType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs
                        Data={props.state.dialogsPage}
                    />}/>
                    <Route path="/profile" render={() => <Profile
                        Data={props.state.profilePage}
                        addPost={props.addPost}
                    />}/>
                    <Route path="/news" component={Profile}/>
                    <Route path="/music" component={Profile}/>
                    <Route path="/settings" component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
