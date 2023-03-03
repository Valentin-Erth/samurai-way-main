import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";
import {dialogsType, messagesPageType, messagesType} from "../../Redux/State";

type DialogsType={
    Data: messagesPageType

}
export const Dialogs = (props:DialogsType) => {
// debugger;
    const dialogsElements = props.Data.dialogs.map(d => {
        return (
            <DialogItem key={d.id} name={d.name} id={d.id}/>
        )
    })
    const messagesElements = props.Data.messages.map(m => {
        return (
            <Message key={m.id} message={m.message} id={m.id}/>
        )
    })
    const newMessageElement=React.createRef<HTMLTextAreaElement>()
    const addMessageButton=()=>{
        let message=newMessageElement.current?.value
        alert(message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div><button onClick={addMessageButton}>add message</button></div>
            <div><textarea ref={newMessageElement}></textarea></div>
        </div>
    )
}