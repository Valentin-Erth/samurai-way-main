import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import s from "./Profile.module.css";
import {ProfileInfo} from "./Profileinfo/Profileinfo";
import {PostType} from "./MyPosts/Post/Post";

type ProfileType={
    postsData: PostType[]
}
export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    )
}