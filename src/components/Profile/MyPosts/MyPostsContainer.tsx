import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import {Post} from './Post/Post';
import {ActionTypes, postsType} from "../../../Redux/Store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {stateType, StoreTypeRedux} from "../../../Redux/ReduxStore";

type MyPostsTypeontainer = {
    // postsData: postsType[]
    // dispatch: (action: ActionTypes) => void
    // newPostText: string
    store: StoreTypeRedux
}

export const MyPostsContainer = (props: MyPostsTypeontainer) => {

    const state: stateType = props.store.getState();
    const addPost = (newPostText: string) => {
        // props.addPost(props.newPostText);
        props.store.dispatch(addPostActionCreator(newPostText));
    }
    const onPostChange = (NewText: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(NewText))
    }
    return (
        <MyPosts onPostChange={onPostChange}
                 addPost={addPost} newPostText={state.profilePage.newPostText}
                 postsData={state.profilePage.posts}/>
    )
}