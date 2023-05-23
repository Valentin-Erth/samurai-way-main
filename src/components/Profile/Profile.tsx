import React from 'react';
import {ProfileInfo} from "./Profileinfo/Profileinfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {profileType} from "../../Redux/ProfileReducer";


type ProfileType = {
    profile:profileType
    updateStatus:(status:string)=>void
    status:string
    }
export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}