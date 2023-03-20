import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionTypes,messagesPageType} from "../../Redux/State";
import {sendMessageActionCreator, updataNewMessageTextActionCreator} from "../../Redux/DialogsReducer";

type DialogsType = {
    Data: messagesPageType
    dispatch: (action: ActionTypes) => void

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
    const newMessageElement = props.Data.newMessageText
    const onSendMessageButton = () => {
       props.dispatch(sendMessageActionCreator(newMessageElement));
    }
    const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let NewMessage=e.currentTarget.value;
        props.dispatch(updataNewMessageTextActionCreator(NewMessage))
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
                <div><textarea placeholder={"Enter yuor message"} value={newMessageElement} onChange={onMessageChangeHandler}></textarea></div>
            </div>
        </div>
    )
}