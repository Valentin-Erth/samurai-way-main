import React from 'react';
import s from "./MyPosts.module.css";
import {Post, PostType} from './Post/Post';

type MyPostsType={
    postsData: PostType[]
}
export const MyPosts = (props:MyPostsType) => {

    const postsElements=props.postsData.map(p=>{
        return(
            <Post message={p.message}
                  likesCount={p.likesCount}
                  id={p.id}/>
        )
    })
    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}