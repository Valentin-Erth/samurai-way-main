import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {sidebarReducer} from "./SidebarReducer";
import {messagesPageType, profilePageType, sidebarType} from "./Store";

const reducers=combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer
});
export let store=createStore(reducers);
export type StoreTypeRedux= typeof store
// export type RootStateType=ReturnType<typeof reducers>
export type stateType = {
    profilePage: profilePageType
    dialogsPage: messagesPageType
    sidebarPage: sidebarType
}