import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import {Post} from './Post/Post';
import {ActionTypes, postsType} from "../../../Redux/Store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";

type MyPostsType = {
    postsData: postsType[]
    dispatch: (action: ActionTypes) => void
    newPostText: string
}

export const MyPostsContainer = (props: MyPostsType) => {

    const postsElements = props.postsData.map(p => {
        return (
            <Post key={p.id}
                  message={p.message}
                  likesCount={p.likesCount}
                  id={p.id}/>
        )
    })

    const addPostHandler = (newPostText:string) => {
        // props.addPost(props.newPostText);
        props.dispatch(addPostActionCreator(newPostText));
    }
    const onPostChangeHandler = (NewText:string) => {
        props.dispatch(updateNewPostTextActionCreator(NewText))
    }
    return (
        <MyPosts onPostChange={onPostChangeHandler} addPost={addPostHandler} newPostText={props.newPostText} postsData={props.postsData}/>
    )
}