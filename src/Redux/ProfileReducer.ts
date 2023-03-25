import {v1} from "uuid";
import {ActionTypes, postsType, profilePageType} from "./Store";

let initialState={
    posts: [
        {id: v1(), message: "Hi,how are yuo?", likesCount: "0"},
        {id: v1(), message: "It,s my first post", likesCount: "23"}
    ],
    newPostText: "It-kamasutra"
}
export const profileReducer = (state:profilePageType=initialState, action:ActionTypes) => {
    switch (action.type){
        case "ADD_POST":
            const newPost: postsType = {
                id: v1(), message: action.postText,
                likesCount: "0"
            }
            // state.posts.push(newPost);
            // state.newPostText = ""
            return {...state,posts: [...state.posts,newPost],newPostText: ""}
        case "UPDATE_NEW_POST_TEXT":
            // state.newPostText = action.NewText;
            return {...state,newPostText: action.NewText }
        default:
            return state
    }
}
export const addPostActionCreator=(newPostText:string)=>{
    return {
        type: "ADD_POST",
        postText: newPostText
    } as const
}
export const updateNewPostTextActionCreator=(NewText:string)=>{
    return {
        type: "UPDATE_NEW_POST_TEXT",
        NewText: NewText
    } as const
}