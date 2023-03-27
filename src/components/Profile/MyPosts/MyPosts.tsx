import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import {Post} from './Post/Post';
import {MyPostsPropsType} from "./MyPostsContainer";

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.postsData.posts.map(p => {
        return (
            <Post key={p.id}
                  message={p.message}
                  likesCount={p.likesCount}
                  id={p.id}/>
        )
    })

    const addPostHandler = () => {
        props.addPost(props.newPostText);
        // props.dispatch(addPostActionCreator(props.newPostText));
    }
    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let NewText=e.currentTarget.value;
        props.onPostChange(NewText)
        // props.dispatch(updateNewPostTextActionCreator(NewText))
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