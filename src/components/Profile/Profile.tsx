import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import s from "./Profile.module.css";
import {ProfileInfo} from "./Profileinfo/Profileinfo";
import {PostType} from "./MyPosts/Post/Post";
import {profilePageType} from "../../Redux/State";

type ProfileType={
    Data: profilePageType
    addPost:(postText: string)=>void
}
export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.Data.posts} addPost={props.addPost}/>
        </div>
    )
}