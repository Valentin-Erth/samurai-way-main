import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {sidebarReducer} from "./SidebarReducer";
import {UsersReducer} from "./UsersReducer";

const rootReducers=combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: UsersReducer
});
export let store=createStore(rootReducers);
export type StoreTypeRedux= typeof store
export type RootStateType=ReturnType<typeof rootReducers>
