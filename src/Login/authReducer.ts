import {authAPI, LoginParamsType} from "../api/api";
import {Dispatch} from "redux";
import {toggleIsFetching} from "../Redux/UsersReducer";

const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action:ActionsAuthType ): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}
//thunk
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsAuthType>) => {
    dispatch(toggleIsFetching(true))
    authAPI.login(data)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true))
                dispatch(toggleIsFetching(false))
            }
        })
}

// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

// types
export type ActionsAuthType = ReturnType<typeof setIsLoggedInAC>
    |ReturnType<typeof toggleIsFetching>