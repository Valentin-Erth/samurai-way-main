import {v1} from "uuid";
import {ActionTypes, postsType, profilePageType} from "./State";

export const profileReducer = (state:profilePageType, action:ActionTypes) => {
    switch (action.type){
        case "ADD_POST":
            const newPost: postsType = {
                id: v1(), message: action.postText,
                likesCount: "0"
            }
            state.posts.push(newPost);
            state.newPostText = ""
            return state
        case "UPDATE_NEW_POST_TEXT":
            state.newPostText = action.NewText;
            return state
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