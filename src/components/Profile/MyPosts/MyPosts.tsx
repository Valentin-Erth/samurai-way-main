import React from 'react';
import s from "./MyPosts.module.css";
import avatar from "../../../../images/avatar.jpg"
import { Post } from './Post/Post';

export const MyPosts = () => {
    return (
        <div>
            My Post
            <div><button>Add post</button></div>
            <div>
                New Post
            </div>
            <div className={s.posts}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}