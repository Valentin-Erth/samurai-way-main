import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionTypes, stateType} from "./Redux/Store";

type AppStateType = {
    state: stateType
    dispatch: (action: ActionTypes) => void
}
const App: React.FC<AppStateType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <Dialogs
                    Data={props.state.dialogsPage}
                    dispatch={props.dispatch}
                />}/>
                <Route path="/profile" render={() => <Profile
                    Data={props.state.profilePage}
                    dispatch={props.dispatch}
                />}/>
                <Route path="/news" component={Profile}/>
                <Route path="/music" component={Profile}/>
                <Route path="/settings" component={Profile}/>
            </div>
        </div>
    );
}

export default App;
