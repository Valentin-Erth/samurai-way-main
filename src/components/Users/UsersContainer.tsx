import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStateType} from "../../Redux/ReduxStore";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../Redux/UsersReducer";

type MapStateToPropsType = {
    users:UserType[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
    }
type MapDispatchToPropsType = {
    follow: (userId:string) => void
    unfollow: (userId:string)=> void
    setUsers:(users:UserType[])=>void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}
export type UsersPropsType=MapStateToPropsType& MapDispatchToPropsType

const mapStateToProps=(state:RootStateType):MapStateToPropsType=>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps=(dispatch:Dispatch):MapDispatchToPropsType=>{
        return {
        follow: (userId:string)=>dispatch(followAC(userId)),
        unfollow: (userId:string)=>dispatch(unfollowAC(userId)),
        setUsers:(users:UserType[])=>dispatch(setUsersAC(users)),
        setCurrentPage:(pageNumber:number)=>dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCount:(totalCount:number)=>dispatch(setTotalUsersCountAC(totalCount))
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

