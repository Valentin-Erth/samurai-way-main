import {v1} from "uuid";
import {
    dialogsReducer, DialogsType,
    MessagesType,
    sendMessageActionCreator,
    updataNewMessageTextActionCreator
} from "./DialogsReducer";

test("message should be update",()=>{
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
    const NewMessage="Will be Very COOL"
    const endState= dialogsReducer(initialState,updataNewMessageTextActionCreator(NewMessage))
    expect(endState.newMessageText).toBe(NewMessage)
    expect(endState.messages.length).toBe(5);
})
test("message should be send",()=>{
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
    const NewMessage="I study React"
    const endState= dialogsReducer(initialState,sendMessageActionCreator(NewMessage))
    expect(endState.newMessageText).toBe("")
    expect(endState.messages.length).toBe(6);

})