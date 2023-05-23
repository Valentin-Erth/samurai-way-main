import React  from "react";
import {
    InitialStateType,
    sendMessageActionCreator,
    updataNewMessageTextActionCreator
} from "../../Redux/DialogsReducer";
import {RootStateType} from "../../Redux/ReduxStore";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

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
export const DialogsContainer=compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

