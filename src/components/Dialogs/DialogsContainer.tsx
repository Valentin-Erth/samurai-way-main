import React  from "react";
import {
    InitialStateType,
    sendMessageActionCreator,
    updataNewMessageTextActionCreator
} from "../../Redux/DialogsReducer";
import {RootStateType} from "../../Redux/ReduxStore";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {ProfileApiComponent} from "../Profile/ProfileContainer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


// export const DialogsContainer = (props: DialogsContainerType) => {
// // debugger;
//
//     return(
//         <StoreContext.Consumer>
//             {(store)=>{
//                 const state:RootStateType=store.getState();
//                 const onSendMessageButton = (newMessageText:string) => {
//                     store.dispatch(sendMessageActionCreator(newMessageText));
//                 }
//                 const onMessageChangeHandler = (NewMessage:string) => {
//                     store.dispatch(updataNewMessageTextActionCreator(NewMessage))
//                 }
//                 return(
//                     <Dialogs updataNewMessageText={onMessageChangeHandler}
//                              sendMessage={onSendMessageButton}
//                              newMessageText={state.dialogsPage.newMessageText}
//                              Data={state.dialogsPage}/>
//                     )}
//         }
//         </StoreContext.Consumer>
//         )}
type MapStateToPropsType={
    Data:InitialStateType
    newMessageText:string
    }
type MapDispatchtoPropsType={
    updataNewMessageText:(newMessageText:string)=>void
    sendMessage:(NewMessage:string)=>void
}
export type DialogsPropsType=MapStateToPropsType & MapDispatchtoPropsType
const mapStateToProps=(state:RootStateType):MapStateToPropsType=>{
    return {
        Data: state.dialogsPage,
        newMessageText:state.dialogsPage.newMessageText,
       }
}
const mapDispatchToProps=(dispatch: Dispatch):MapDispatchtoPropsType=>{
    return {
        updataNewMessageText:(newMessageText:string)=>{
            dispatch(updataNewMessageTextActionCreator(newMessageText))

        },
        sendMessage:(NewMessage:string)=>{
            dispatch(sendMessageActionCreator(NewMessage));
        }

    }
}
let AuthRedirectComponent=WithAuthRedirect(Dialogs)

export const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);