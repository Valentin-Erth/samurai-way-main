import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";

type DialogsType={
    dialogData: DialogItemType[]
    messagesData: MessageType[]
}
export const Dialogs = (props:DialogsType) => {


    const dialogsElements = props.dialogData.map(d => {
        return (
            <DialogItem name={d.name} id={d.id}/>
        )
    })
    const messagesElements = props.messagesData.map(m => {
        return (
            <Message message={m.message} id={m.id}/>
        )
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}