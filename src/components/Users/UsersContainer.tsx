import React from 'react';
import {connect} from "react-redux";
import {AppThunk, RootStateType} from "../../Redux/ReduxStore";
import {Dispatch} from "redux";
import CircularProgress from '@mui/material/CircularProgress';
import preloader from '../../images/preloader-4.gif';
import {
    followSuccess, followTC, getUsersTC,
    setCurrentPage,
    toggleFollowingProgress, unfollowSuccess, unfollowTC,
    UserType
} from "../../Redux/UsersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";


export class UsersApiComponent extends React.Component<UsersApiPropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        // debugger
        this.props.getUsersTC(pageNumber,this.props.pageSize)
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
                   followingInProgress={this.props.followingInProgress}
                   unfollowTC={this.props.unfollowTC}
                   followTC={this.props.follow}

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
    followingInProgress:Array<string>
}
type MapDispatchToPropsType = {
    unfollowTC:(userId:string)=>void
    followTC:(userId:string)=>void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    //setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    //setTotalUsersCount: (totalCount: number) => void
    //toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress:(isFetching: boolean, userId:string)=>void
    getUsersTC:(currentPage:number,pageSize:number)=>void
}
export type UsersApiPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
    follow: followSuccess,unfollow: unfollowSuccess,setCurrentPage,toggleFollowingProgress,getUsersTC,unfollowTC,followTC
})(UsersApiComponent);


