import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppThunk} from "./ReduxStore";

export type ActionUsersTypes =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>
export type UserType = {
    id: string
    photos: { small: string, large: string }
    followed: boolean
    name: string
    status: string
    uniqueUrlName: string
    // location: { city: string, country: string }
}
export type InitialStateType = typeof initialState;
let initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<string>
}
export const UsersReducer = (state: InitialStateType = initialState, action: ActionUsersTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case "SET_USERS":
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE_IS_FETCGING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}
//actions
export const followSuccess = (userID: string) => ({type: "FOLLOW", userID} as const)
export const unfollowSuccess = (userID: string) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
}
export const setUsers = (users: UserType[]) => {
    return {
        type: "SET_USERS",
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: "SET_TOTAL_USERS_COUNT",
    totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE_IS_FETCGING", isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: string) => ({
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching,
    userId
} as const)
//thunks
export const getUsersTC = (currentPage:number, pageSize:number):AppThunk => (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setCurrentPage(currentPage))
            dispatch(setTotalUsersCount(data.totalCount));
        })
}
export const unfollowTC=(userId:string):AppThunk=>(dispatch)=>{
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unfollow(userId)
        .then(data => {
           if (data.resultCode === 0) {
               dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
}
export const followTC=(userId:string):AppThunk=>(dispatch)=>{
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
}

