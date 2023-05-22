import {v1} from "uuid";
import {AppThunk} from "./ReduxStore";
import {usersAPI} from "../api/api";

export type ActionProfileTypes =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>
type postsType = {
    id: string
    message: string
    likesCount: string
}
export type profileType= {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type InitialStateType = typeof initialState;
let initialState = {
    posts: [
        {id: v1(), message: "Hi,how are yuo?", likesCount: "0"},
        {id: v1(), message: "It,s my first post", likesCount: "23"}
    ] as postsType[],
    newPostText: "It-kamasutra.com",
    profile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: "",
        },
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 1,
        photos: {
            small: "",
            large: ""
        }
    }
    }
export const profileReducer = (state: InitialStateType = initialState, action: ActionProfileTypes): InitialStateType => {
    switch (action.type) {
        case "ADD_POST":
            const newPost: postsType = {
                id: v1(), message: action.postText,
                likesCount: "0"
            }
            // state.posts.push(newPost);
            // state.newPostText = ""
            return {...state, posts: [...state.posts, newPost], newPostText: ""}
        case "UPDATE_NEW_POST_TEXT":
            // state.newPostText = action.NewText;
            return {...state, newPostText: action.NewText}
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}
export const setUserProfile = (profile:profileType) => {
    return {
        type: "SET_USER_PROFILE",
        profile
    } as const
}
export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD_POST",
        postText: newPostText
    } as const
}
export const updateNewPostTextActionCreator = (NewText: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        NewText: NewText
    } as const
}
//thunsk
export const getUserProfileTC=(userId:string):AppThunk=>(dispatch)=>{
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        })
}