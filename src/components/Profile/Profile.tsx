import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import s from "./Profile.module.css";
import {ProfileInfo} from "./Profileinfo/Profileinfo";

export const Profile = () => {
    return (
        <div>
            < ProfileInfo/>
            <MyPosts/>
        </div>
    )
}