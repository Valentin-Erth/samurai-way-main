import {v1} from "uuid";

export type stateType = {
    profilePage:profilePageType
    dialogsPage:messagesPageType
}
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
export type profilePageType={
    posts: postsType[]
}
 export type messagesPageType={
    messages:messagesType[]
     dialogs: dialogsType[]
}
export let state:stateType = {
    profilePage:{
        posts: [
            {id: v1(), message: "Hi,how are yuo?", likesCount: "0"},
            {id: v1(), message: "It,s my first post", likesCount: "23"}
        ]
            },
    dialogsPage:{
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
    }
   }