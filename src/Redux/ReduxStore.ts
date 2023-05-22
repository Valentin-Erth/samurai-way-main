import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionProfileTypes, profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {sidebarReducer} from "./SidebarReducer";
import {ActionUsersTypes, UsersReducer} from "./UsersReducer";
import {ActionAuthTypes, authReducer} from "./auth-Reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"

const rootReducers=combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: UsersReducer,
    auth: authReducer
});
export let store=createStore(rootReducers,applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;
export type StoreTypeRedux= typeof store
export type RootStateType=ReturnType<typeof rootReducers>
//Универсальная типизация thunks
export type AppThunk<ReturneType=void>=ThunkAction<ReturneType, RootStateType, unknown, AppActoinsType>
//все типы экшенов для всего app
export type AppActoinsType=ActionUsersTypes|ActionAuthTypes|ActionProfileTypes
