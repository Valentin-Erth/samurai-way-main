export type ActionAuthTypes =
    | ReturnType<typeof setAuthUserData>

export type InitialStateType = typeof initialState;
let initialState = {
    userId: "0",
    login: "",
    email: "",
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionAuthTypes): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,isAuth: true
            }
        default:
            return state
    }
}
export const setAuthUserData = (userId: string, email: string, login: string) => ({
    type: "SET_USER_DATA",
    data: {userId, email, login}
} as const)

