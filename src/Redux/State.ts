import {v1} from "uuid";
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "./ProfileReducer";
import {dialogsReducer, sendMessageActionCreator, updataNewMessageTextActionCreator} from "./DialogsReducer";
import {sidebarReducer} from "./SidebarReducer";

export type StoreType = {
    _state: stateType
    _renderEntireTree: () => void
    subscribe: (callback: () => void) => void
    getState: () => stateType
    dispatch: (actionCreator: ActionTypes) => void
}
// type AddPostActionType = {
//     type: "ADD-POST"
//     postText: string
// }
// type ChangeNewTextActionType = {
//     type: "UPDATE-NEW-POST-TEXT"
//     NewText: string
// }
export type ActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>| ReturnType<typeof updataNewMessageTextActionCreator>|ReturnType<typeof sendMessageActionCreator>
export type stateType = {
    profilePage: profilePageType
    dialogsPage: messagesPageType
    sidebar: sidebarType
}
export type sidebarType = {}
export type messagesType = {
    id: string
    message: string
}
export type dialogsType = {
    id: string
    name: string
}
export type postsType = {
    id: string
    message: string
    likesCount: string
}
export type profilePageType = {
    posts: postsType[]
    newPostText: string
}
export type messagesPageType = {
    messages: messagesType[]
    dialogs: dialogsType[]
    newMessageText: string
}
export const Store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: "Hi,how are yuo?", likesCount: "0"},
                {id: v1(), message: "It,s my first post", likesCount: "23"}
            ],
            newPostText: "It-kamasutra"
        },
        dialogsPage: {
            messages: [
                {id: v1(), message: "Hi"},
                {id: v1(), message: "How are you"},
                {id: v1(), message: "Yo"},
                {id: v1(), message: "Yo"},
                {id: v1(), message: "Yo"}
            ],
            dialogs: [
                {id: v1(), name: "Dimych"},
                {id: v1(), name: "Andrey"},
                {id: v1(), name: "Sveta"},
                {id: v1(), name: "Sasha"},
                {id: v1(), name: "Victor"},
                {id: v1(), name: "Valera"}
            ],
            newMessageText: ""
        },
        sidebar: {}
    },
    _renderEntireTree() {
        console.log("State changed")
    },
    subscribe(callback) {
        this._renderEntireTree = callback;// наблюдатель
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage= profileReducer(this._state.profilePage,action);
        this._state.dialogsPage= dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar= sidebarReducer(this._state.sidebar,action);
        this._renderEntireTree();
    }
}
//strore-OPP



