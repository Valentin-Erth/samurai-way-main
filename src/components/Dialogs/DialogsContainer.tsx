import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionTypes, messagesPageType} from "../../Redux/Store";
import {sendMessageActionCreator, updataNewMessageTextActionCreator} from "../../Redux/DialogsReducer";
import {stateType, StoreTypeRedux} from "../../Redux/ReduxStore";
import {Dialogs} from "./Dialogs";

type DialogsContainerType = {
    store: StoreTypeRedux
}
export const DialogsContainer = (props: DialogsContainerType) => {
// debugger;
    const state:stateType=props.store.getState();
    const onSendMessageButton = (newMessageText:string) => {
        props.store.dispatch(sendMessageActionCreator(newMessageText));
    }
    const onMessageChangeHandler = (NewMessage:string) => {
        props.store.dispatch(updataNewMessageTextActionCreator(NewMessage))
    }
    return <Dialogs updataNewMessageText={onMessageChangeHandler}
                    sendMessage={onSendMessageButton}
                    newMessageText={state.dialogsPage.newMessageText} Data={state.dialogsPage}/>
}