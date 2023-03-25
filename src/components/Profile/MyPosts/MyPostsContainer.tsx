import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import {Post} from './Post/Post';
import {ActionTypes, postsType} from "../../../Redux/Store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {stateType, StoreTypeRedux} from "../../../Redux/ReduxStore";
import {StoreContext} from "../../../StoreContext";

type MyPostsTypeontainer = {
    // postsData: postsType[]
    // dispatch: (action: ActionTypes) => void
    // newPostText: string
    // store: StoreTypeRedux
}

export const MyPostsContainer = (props: MyPostsTypeontainer) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state: stateType = store.getState();
                const addPost = (newPostText: string) => {
                    // props.addPost(props.newPostText);
                    store.dispatch(addPostActionCreator(newPostText));
                }
                const onPostChange = (NewText: string) => {
                    store.dispatch(updateNewPostTextActionCreator(NewText))
                }
                return (
                    <MyPosts onPostChange={onPostChange}
                             addPost={addPost}
                             newPostText={state.profilePage.newPostText}
                             postsData={state.profilePage.posts}/>)
            }
        }
        </StoreContext.Consumer>
    )
}