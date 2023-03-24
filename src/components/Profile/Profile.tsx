import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import s from "./Profile.module.css";
import {ProfileInfo} from "./Profileinfo/Profileinfo";
import {PostType} from "./MyPosts/Post/Post";
import {ActionTypes, profilePageType} from "../../Redux/Store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfileType = {
    Data: profilePageType
    dispatch: (action: ActionTypes) => void
}
export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer postsData={props.Data.posts}
                     dispatch={props.dispatch}
                     newPostText={props.Data.newPostText}
            />
        </div>
    )
}