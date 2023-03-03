import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from './Post/Post';
import {postsType} from "../../../Redux/State";

type MyPostsType = {
    postsData: postsType[]
    addPost: (postText: string) => void
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
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if(newPostElement.current){
            props.addPost( newPostElement.current.value)
            newPostElement.current.value=""
        }

    }
    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}