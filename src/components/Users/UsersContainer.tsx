import React from 'react';
import {connect} from "react-redux";
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
import axios from "axios";
import {Users} from "./Users";


export class UsersApiComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                console.log(response.data.totalCount)

                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged(pageNumber: number) {
        // debugger
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
        />
    }
}
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

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersApiComponent);


