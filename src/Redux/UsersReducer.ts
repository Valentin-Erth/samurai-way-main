import {v1} from "uuid";

export type ActionUsersTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>| ReturnType<typeof setUsersAC>
export type UserType = {
    id: string
    photoUrl:string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}
export type InitialStateType = typeof initialState;
let initialState = {
    users: [
    ] as UserType[]
}
export const UsersReducer = (state: InitialStateType = initialState, action: ActionUsersTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
return {...state,
    users: state.users.map(u=>u.id===action.userID? {...u, followed: true}:u)}
        case "UNFOLLOW":
            return {...state,
                users: state.users.map(u=>u.id===action.userID? {...u, followed: false}:u)}
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}
export const followAC = (userID:string) => ({type: "FOLLOW",userID}as const)
export const unfollowAC = (userID:string) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
}
export const setUsersAC = (users:UserType[]) => {
    return {
        type: "SET_USERS",
        users
    } as const
}