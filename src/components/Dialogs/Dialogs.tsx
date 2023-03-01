import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {v1} from "uuid";

type DialogItemType = {
    id: string
    name: string
}
const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/ + props.id";
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
type MessageType = {
    id: string
    message: string
}
const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
export const Dialogs = () => {
    let dialogData: DialogItemType[] = [
        {id: v1(), name: "Dimych"},
        {id: v1(), name: "Andrey"},
        {id: v1(), name: "Sveta"},
        {id: v1(), name: "Sasha"},
        {id: v1(), name: "Victor"},
        {id: v1(), name: "Valera"}
    ]
    let messagesData: MessageType[] = [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How are you"},
        {id: v1(), message: "Yo"},
        {id: v1(), message: "Yo"},
        {id: v1(), message: "Yo"}
    ]
    const dialogDataForDialogs=dialogData.map(d => {
        return (
            <DialogItem name={d.name} id={d.id}/>
        )
    })
    const messagesDataForDialogs=messagesData.map(m=>{
        return(
            <Message message={m.message} id={m.id}/>
        )
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogDataForDialogs}
            </div>
            <div className={s.messages}>
                {messagesDataForDialogs}
                </div>
        </div>
    )
}