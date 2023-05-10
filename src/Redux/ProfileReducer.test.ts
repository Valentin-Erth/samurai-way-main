import {v1} from "uuid";
import {addPostActionCreator, profileReducer, profileType, updateNewPostTextActionCreator} from "./ProfileReducer";

test("post should be added", ()=>{
    let initialState={
        posts: [
            {id: v1(), message: "Hi,how are yuo?", likesCount: "0"},
            {id: v1(), message: "It,s my first post", likesCount: "23"}
        ],
        newPostText: "It-kamasutra",
        profile: {} as profileType
    }
    let newPostText="I study React"
    const endState=profileReducer(initialState, addPostActionCreator(newPostText))

    expect(endState.posts[2].message).toBe(newPostText)
    expect(endState.posts.length).toBe(3);
} )
test("post should be updated", ()=>{
    let initialState={
        posts: [
            {id: v1(), message: "Hi,how are yuo?", likesCount: "0"},
            {id: v1(), message: "It,s my first post", likesCount: "23"}
        ],
        newPostText: "It-kamasutra",
        profile: {} as profileType
    }
    let NewText="It Boroda"
    const endState=profileReducer(initialState, updateNewPostTextActionCreator(NewText))

    expect(endState.newPostText).toBe(NewText)
    expect(endState.posts.length).toBe(2);
} )

