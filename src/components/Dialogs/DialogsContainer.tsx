import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionTypes, messagesPageType} from "../../Redux/Store";
import {sendMessageActionCreator, updataNewMessageTextActionCreator} from "../../Redux/DialogsReducer";
import {stateType, StoreTypeRedux} from "../../Redux/ReduxStore";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type DialogsContainerType = {
    // store: StoreTypeRedux
}
export const DialogsContainer = (props: DialogsContainerType) => {
// debugger;

    return(
        <StoreContext.Consumer>
            {(store)=>{
                const state:stateType=store.getState();
                const onSendMessageButton = (newMessageText:string) => {
                    store.dispatch(sendMessageActionCreator(newMessageText));
                }
                const onMessageChangeHandler = (NewMessage:string) => {
                    store.dispatch(updataNewMessageTextActionCreator(NewMessage))
                }
                return(
                    <Dialogs updataNewMessageText={onMessageChangeHandler}
                             sendMessage={onSendMessageButton}
                             newMessageText={state.dialogsPage.newMessageText}
                             Data={state.dialogsPage}/>
                    )

            }

        }
        </StoreContext.Consumer>
        )


}