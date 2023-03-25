import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionTypes,messagesPageType} from "../../Redux/Store";
import {sendMessageActionCreator, updataNewMessageTextActionCreator} from "../../Redux/DialogsReducer";
import {StoreTypeRedux} from "../../Redux/ReduxStore";

type DialogsType = {
    Data: messagesPageType
    sendMessage:(newMessageText:string)=>void
    updataNewMessageText:(NewMessage:string)=>void
    newMessageText:string
    }
export const Dialogs = (props: DialogsType) => {
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

    const onSendMessageButton = () => {
       props.sendMessage(props.newMessageText);
    }
    const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let NewMessage=e.currentTarget.value;
        props.updataNewMessageText(NewMessage);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <button onClick={onSendMessageButton}>add message</button>
                </div>
                <div><textarea placeholder={"Enter yuor message"} value={props.newMessageText} onChange={onMessageChangeHandler}></textarea></div>
            </div>
        </div>
    )
}