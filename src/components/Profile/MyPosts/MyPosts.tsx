import React from 'react';
import s from "./MyPosts.module.css";
import {Post, PostType} from './Post/Post';
import {v1} from "uuid";

export const MyPosts = () => {
    let postsData: PostType[] = [
        {id: v1(), message: "Hi,how are yuo?", likesCount: "0"},
        {id: v1(), message: "It,s my first post", likesCount: "23"},
    ]
    const postsElements=postsData.map(p=>{
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