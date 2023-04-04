import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStateType} from "../../Redux/ReduxStore";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../Redux/UsersReducer";

type MapStateToPropsType = {
    users:UserType[]
    }
type MapDispatchToPropsType = {
    follow: (userId:string) => void
    unfollow: (userId:string)=> void
    setUsers:(users:UserType[])=>void
}
export type UsersPropsType=MapStateToPropsType& MapDispatchToPropsType

const mapStateToProps=(state:RootStateType):MapStateToPropsType=>{
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps=(dispatch:Dispatch):MapDispatchToPropsType=>{
    return {
        follow: (userId:string)=>dispatch(followAC(userId)),
        unfollow: (userId:string)=>dispatch(unfollowAC(userId)),
        setUsers:(users:UserType[])=>dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);


