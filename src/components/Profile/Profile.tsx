import React from 'react';
import {ProfileInfo} from "./Profileinfo/Profileinfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {profileType} from "../../Redux/ProfileReducer";


type ProfileType = {
    profile:profileType
    //Data: profilePageType
    //dispatch: (action: ActionTypes) => void
    // store: StoreTypeRedux
}
export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}