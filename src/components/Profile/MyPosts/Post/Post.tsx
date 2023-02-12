import React from 'react';
import s from "./Post.module.css";
import avatar from "../../../../images/avatar.jpg"

type PostType={
    message: string
    likesCount: string
}
export const Post = (props:PostType) => {
    return (
        <div className={s.item}>
            <img src={avatar} alt="avatar" />
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )

}