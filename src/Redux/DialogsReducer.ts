import {v1} from "uuid";
import {ActionTypes, messagesPageType} from "./Store";

let initialState={
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
}
export const dialogsReducer=(state:messagesPageType=initialState, action:ActionTypes)=>{
switch (action.type){
    case "UPDATE_NEW_MESSAGE-TEXT":
        state.newMessageText=action.NewMessage
        return state
    case "SEND_MESSAGE":
        let textMessage=state.newMessageText
        state.newMessageText=""
        state.messages.push({id: v1(), message: textMessage})
        return state
    default:
        return state
}
}
export const updataNewMessageTextActionCreator=(NewMessage:string)=>{
    return{
        type: "UPDATE_NEW_MESSAGE-TEXT",
        NewMessage: NewMessage
    }as const
}
export const sendMessageActionCreator=(NewMessage:string)=>{
    return{
        type: "SEND_MESSAGE",
        NewMessage: NewMessage
    }as const
}