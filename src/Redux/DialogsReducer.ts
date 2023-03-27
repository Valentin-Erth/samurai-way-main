import {v1} from "uuid";

export type MessagesType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
    avatar: string
}
export type InitialStateType = typeof initialState;
export type ActionDialogsTypes =
    ReturnType<typeof updataNewMessageTextActionCreator> | ReturnType<typeof sendMessageActionCreator>
let initialState = {
    messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How are you"},
        {id: v1(), message: "By"},
        {id: v1(), message: "Yo"},
        {id: v1(), message: "Yo"}
    ] as MessagesType[],
    dialogs: [
        {id: v1(), name: "Dimych", avatar: "https://thumbs.dreamstime.com/b/avatar-van-de-geekmens-104871313.jpg"},
        {
            id: v1(),
            name: "Andrey",
            avatar: "https://www.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg"
        },
        {
            id: v1(),
            name: "Sveta",
            avatar: "https://cdn1.vectorstock.com/i/1000x1000/32/10/young-man-avatar-character-vector-14213210.jpg"
        },
        {
            id: v1(),
            name: "Sasha",
            avatar: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/b3053232163929.567197ac6e6f5.png"
        },
        {
            id: v1(),
            name: "Victor",
            avatar: "https://media.geeksforgeeks.org/wp-content/uploads/20210209004413/AVATAR2.png"
        },
        {
            id: v1(),
            name: "Valera",
            avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000"
        }
    ] as DialogsType[],
    newMessageText: ""
}
export const dialogsReducer = (state: InitialStateType = initialState, action: ActionDialogsTypes): InitialStateType => {
    switch (action.type) {
        case "UPDATE_NEW_MESSAGE-TEXT":
            // state.newMessageText=action.NewMessage
            return {...state, newMessageText: action.NewMessage}
        case "SEND_MESSAGE":
            // let textMessage=state.newMessageText
            const newMessage = {
                id: v1(), message: action.NewMessage
            }
            // state.newMessageText=""
            // state.messages.push({id: v1(), message: textMessage})
            return {...state, messages: [...state.messages, newMessage], newMessageText: ""}
        default:
            return state
    }
}
export const updataNewMessageTextActionCreator = (NewMessage: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE-TEXT",
        NewMessage: NewMessage
    } as const
}
export const sendMessageActionCreator = (NewMessage: string) => {
    return {
        type: "SEND_MESSAGE",
        NewMessage: NewMessage
    } as const
}