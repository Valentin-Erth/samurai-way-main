import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionTypes} from "./Redux/Store";
import {store, StoreTypeRedux} from "./Redux/ReduxStore";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppStateType = {
    store: StoreTypeRedux
    //state: stateType
    //dispatch: (action: ActionTypes) => void
}
const App: React.FC<AppStateType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            {/*store.getState()*/}
            {/*dispatch={store.dispatch.bind(store)}*/}
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer
                    store={props.store}
                />}/>
                <Route path="/profile" render={() => <Profile
                    store={props.store}
                />}/>
                <Route path="/news" component={Profile}/>
                <Route path="/music" component={Profile}/>
                <Route path="/settings" component={Profile}/>
            </div>
        </div>
    );
}

export default App;
