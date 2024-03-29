import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./Login/Login";



type AppStateType = {
    // store: StoreTypeRedux
    //state: stateType
    //dispatch: (action: ActionTypes) => void
}
const App: React.FC<AppStateType> = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <Login/>}/>

                <Route path="/news" component={Profile}/>
                <Route path="/music" component={Profile}/>
                <Route path="/settings" component={Profile}/>
            </div>
        </div>
    );
}

export default App;
