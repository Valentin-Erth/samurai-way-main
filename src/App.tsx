import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";


type AppStateType = {
    // store: StoreTypeRedux
    //state: stateType
    //dispatch: (action: ActionTypes) => void
}
const App: React.FC<AppStateType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile" render={() => <ProfileContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>

                <Route path="/news" component={Profile}/>
                <Route path="/music" component={Profile}/>
                <Route path="/settings" component={Profile}/>
            </div>
        </div>
    );
}

export default App;
