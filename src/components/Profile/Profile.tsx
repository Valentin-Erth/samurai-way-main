import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import s from "./Profile.module.css";
import {ProfileInfo} from "./Profileinfo/Profileinfo";
import {PostType} from "./MyPosts/Post/Post";
import {ActionTypes, profilePageType} from "../../Redux/State";

type ProfileType = {
    Data: profilePageType
    dispatch: (action: ActionTypes) => void
}
export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.Data.posts}
                     dispatch={props.dispatch}
                     newPostText={props.Data.newPostText}
            />
        </div>
    )
}