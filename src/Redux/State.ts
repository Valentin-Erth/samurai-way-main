import {v1} from "uuid";

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
export type ActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>
export type stateType = {
    profilePage: profilePageType
    dialogsPage: messagesPageType
    sidebar: sidebarType
}
type sidebarType = {}
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
            ]
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
        if (action.type === "ADD-POST") {
            // debugger;
            const newPost: postsType = {
                id: v1(), message: action.postText,
                likesCount: "0"
            }
            this._state.profilePage.posts.push(newPost);
            this._renderEntireTree();
            this._state.profilePage.newPostText = ""
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.NewText;
            this._renderEntireTree();
        }
    }
}
//strore-OPP
export const addPostActionCreator=(newPostText:string)=>{
    return {
        type: "ADD-POST",
        postText: newPostText
    } as const
}
export const updateNewPostTextActionCreator=(NewText:string)=>{
    return {
        type: "UPDATE-NEW-POST-TEXT",
        NewText: NewText
    } as const
}

