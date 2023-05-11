import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {sidebarReducer} from "./SidebarReducer";
import {UsersReducer} from "./UsersReducer";
import {authReducer} from "./auth-Reducer";

const rootReducers=combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: UsersReducer,
    auth: authReducer
});
export let store=createStore(rootReducers);
// @ts-ignore
window.store = store;
export type StoreTypeRedux= typeof store
export type RootStateType=ReturnType<typeof rootReducers>
