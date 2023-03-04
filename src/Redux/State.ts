import {v1} from "uuid";

let renderEntireTree=()=>{
    console.log("State changed")
}

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
export let state: stateType = {
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
}

export const addPost = () => {
    // debugger;
    const newPost: postsType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: "0"
    };
    state.profilePage.posts.push(newPost);
    renderEntireTree();
    state.profilePage.newPostText = ""
}
export const updateNewPostText = (NewText: string) => {
    state.profilePage.newPostText = NewText;
    renderEntireTree();
}
export const subscribe=(callback:()=>void)=>{
    renderEntireTree=callback;// наблюдатель
}