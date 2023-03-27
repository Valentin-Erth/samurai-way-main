import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";


export type DialogItemType = {
    id: string
    name: string

}
export const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/ + props.id";
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink className={s.dialog} to={path}>{props.name}</NavLink>
        </div>
    )
}