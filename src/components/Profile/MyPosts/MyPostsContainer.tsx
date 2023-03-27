import React from 'react';
import {addPostActionCreator, InitialStateType, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../Redux/ReduxStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";

// export const MyPostsContainer = (props: MyPostsTypeontainer) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const state: RootStateType = store.getState();
//                 const addPost = (newPostText: string) => {
//                     // props.addPost(props.newPostText);
//                     store.dispatch(addPostActionCreator(newPostText));
//                 }
//                 const onPostChange = (NewText: string) => {
//                     store.dispatch(updateNewPostTextActionCreator(NewText))
//                 }
//                 return (
//                     <MyPosts onPostChange={onPostChange}
//                              addPost={addPost}
//                              newPostText={state.profilePage.newPostText}
//                              postsData={state.profilePage.posts}/>)
//             }}
//         </StoreContext.Consumer>
//     )}
type MapStateToPropsType = {
    postsData: InitialStateType
    newPostText: string
}
type MapDispatchToPropsType = {
    onPostChange: (NewText: string) => void
    addPost: (newPostText: string) => void

}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        postsData: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onPostChange: (NewText: string) => {
            dispatch(updateNewPostTextActionCreator(NewText))
        },
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)