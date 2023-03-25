import {v1} from "uuid";
import {dialogsReducer, sendMessageActionCreator, updataNewMessageTextActionCreator} from "./DialogsReducer";

test("message should be update",()=>{
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
    const NewMessage="Will be Very COOL"
    const endState= dialogsReducer(initialState,updataNewMessageTextActionCreator(NewMessage))
    expect(endState.newMessageText).toBe(NewMessage)
    expect(endState.messages.length).toBe(5);
})
test("message should be send",()=>{
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
    const NewMessage="I study React"
    const endState= dialogsReducer(initialState,sendMessageActionCreator(NewMessage))
    expect(endState.newMessageText).toBe("")
    expect(endState.messages.length).toBe(6);

})