import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/ReduxStore";
import {Dispatch} from "redux";
import CircularProgress from '@mui/material/CircularProgress';
import preloader from '../../images/preloader-4.gif';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UserType
} from "../../Redux/UsersReducer";

import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


export class UsersApiComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
            // debugger
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        // debugger
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber,this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
            })
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
            />
        </>
    }
}

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userId: string) => dispatch(followAC(userId)),
//         unfollow: (userId: string) => dispatch(unfollowAC(userId)),
//         setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
//         setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
//         setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount)),
//         toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
//     }
// }

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersApiComponent);


