import {v1} from "uuid";

export type ActionUsersTypes =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
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
    isFetching: true
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
        default:
            return state
    }
}
export const followAC = (userID: string) => ({type: "FOLLOW", userID} as const)
export const unfollowAC = (userID: string) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: "SET_USERS",
        users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: "SET_TOTAL_USERS_COUNT",
    totalUsersCount
} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: "TOGGLE_IS_FETCGING", isFetching} as const)
