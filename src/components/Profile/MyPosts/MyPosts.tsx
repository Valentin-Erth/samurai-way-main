import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import {Post} from './Post/Post';
import {ActionTypes, postsType} from "../../../Redux/Store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";

type MyPostsType = {
    postsData: postsType[]
    dispatch: (action: ActionTypes) => void
    newPostText: string
}

export const MyPosts = (props: MyPostsType) => {

    const postsElements = props.postsData.map(p => {
        return (
            <Post key={p.id}
                  message={p.message}
                  likesCount={p.likesCount}
                  id={p.id}/>
        )
    })

    const addPostHandler = () => {
        // props.addPost(props.newPostText);
        props.dispatch(addPostActionCreator(props.newPostText));
    }
    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let NewText=e.currentTarget.value;
        props.dispatch(updateNewPostTextActionCreator(NewText))
    }
    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChangeHandler} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}