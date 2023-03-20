import {v1} from "uuid";
import {ActionTypes, messagesPageType} from "./State";

export const dialogsReducer=(state:messagesPageType, action:ActionTypes)=>{
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