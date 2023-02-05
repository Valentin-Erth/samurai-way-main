import React from 'react';
import img from '../../images/img.jpg'
import { MyPosts } from './MyPosts/MyPosts';
import s from "./Profile.module.css";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={img} alt="img" />
            </div>
            <div>
                ava+description
            </div>
            <MyPosts />
        </div>
    )
}