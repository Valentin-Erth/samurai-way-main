import React from 'react';
import {ProfileInfo} from "./Profileinfo/Profileinfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfileType = {
    //Data: profilePageType
    //dispatch: (action: ActionTypes) => void
    // store: StoreTypeRedux
}
export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}