import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import {Post} from './Post/Post';
import {postsType} from "../../../Redux/State";

type MyPostsType = {
    postsData: postsType[]
    addPost: (postText: string) => void
    newPostText:string
    updateNewPostText:(NewText: string)=>void
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
        props.addPost(props.newPostText);

    }
    const onPostChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewPostText(e.currentTarget.value)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea  onChange={onPostChangeHandler} value={props.newPostText}/>
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